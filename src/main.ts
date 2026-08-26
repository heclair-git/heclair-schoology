import './index.css';
import fallbackData from '../data/schoology_v2.json';
import fallbackUserState from '../data/schoology_user_state.json';

interface SchoologyData {
  version: string;
  meta: {
    last_updated: string;
    last_updated_pt: string;
    timezone: string;
    source: string;
    school: string;
    children_verified: string[];
    totals: {
      total_upcoming: number;
      homework_only: number;
      web_voluntary: number;
      overdue_visible: number;
      overdue_hidden: number;
    };
  };
  users: Array<{
    id: string;
    name_display: string;
    role: string;
    grade_level?: string;
  }>;
  courses: Array<{
    id: string;
    title: string;
    course_code: string;
  }>;
  sections: Array<{
    id?: string;
    course_id: string;
    section_title?: string;
    section_code?: string;
    section?: string;
    course_title?: string;
    location?: string;
    teachers?: string[];
    teacher?: string;
    enrolled_user_ids?: string[];
  }>;
  folders: Array<{
    id: string;
    section_id: string;
    title: string;
  }>;
  assignments: Array<{
    id: string;
    section_id?: string;
    course_id?: string;
    folder_id?: string;
    title: string;
    description?: string;
    instructions_summary?: string;
    due?: string;
    due_human_pt?: string;
    due_iso?: string;
    max_points?: number;
    grading_category?: string;
    type?: string;
    status?: string;
    status_detail?: string;
    is_voluntary?: boolean;
    is_web_voluntary?: boolean;
    is_overdue_hidden?: boolean;
    overdue_days?: number;
    student_id?: string;
    child?: string;
    teacher_name?: string;
    teacher?: string;
    attachment_ids?: string[];
    web_url?: string;
    course_title?: string;
  }>;
  attachments: Array<{
    id: string;
    assignment_id?: string;
    filename: string;
    file_size: number;
    mime_type?: string;
    source_url: string;
    docviewer_url?: string;
  }>;
  updates: Array<{
    id: string;
    section_id?: string;
    author_name?: string;
    body: string;
    body_truncated?: boolean;
    created?: string;
    author_role?: string;
  }>;
  calendar_events: Array<{
    id: string;
    title: string;
    start: string;
    type: string;
  }>;
}

interface UserStateData {
  version: string;
  last_updated: string;
  completed_assignment_ids: string[];
  assignment_notes: Record<string, string>;
}

const REALTIME_DB_URL = 'https://api.restful-api.dev/objects/ff8081819ff5b11001a036a1f0cd14c4';

let data: SchoologyData = fallbackData as unknown as SchoologyData;
let userState: UserStateData = fallbackUserState as unknown as UserStateData;

let activeFilter = 'all';
let isFetching = false;
let editingNoteAssignmentId: string | null = null;
let lastCheckedAt: Date | null = null;

function formatScraperDate(isoStr: string | undefined): string {
  if (!isoStr) return 'Unknown';
  try {
    const d = new Date(isoStr);
    return d.toLocaleString('en-US', {
      month: 'short', day: 'numeric',
      hour: 'numeric', minute: '2-digit',
      hour12: true, timeZoneName: 'short'
    });
  } catch { return isoStr; }
}

function formatLastChecked(date: Date): string {
  const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diffSec < 10) return 'just now';
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

async function loadServerData(isManualClick = false) {
  try {
    isFetching = true;
    updateRefreshButtonUI('loading');
    
    // 1. Fetch raw Schoology scrape from Git
    const scrapeUrl = `./data/schoology_v2.json?t=${Date.now()}`;
    const scrapeResponse = await fetch(scrapeUrl);
    if (scrapeResponse.ok) {
      const freshScrape = await scrapeResponse.json();
      if (freshScrape && freshScrape.assignments) {
        data = freshScrape as SchoologyData;
      }
    }

    // 2. Fetch live real-time server database state (shared across all devices)
    try {
      const dbResponse = await fetch(REALTIME_DB_URL);
      if (dbResponse.ok) {
        const dbJson = await dbResponse.json();
        if (dbJson && dbJson.data && Array.isArray(dbJson.data.completed_assignment_ids)) {
          userState = dbJson.data as UserStateData;
        }
      }
    } catch (dbErr) {
      console.warn('Realtime database fetch fallback to local JSON:', dbErr);
    }
    
    lastCheckedAt = new Date();

    if (isManualClick) {
      updateRefreshButtonUI('success');
      setTimeout(() => updateRefreshButtonUI('idle'), 2000);
    } else {
      updateRefreshButtonUI('idle');
    }
  } catch (err) {
    console.warn('Using fallback data:', err);
    lastCheckedAt = new Date();
    updateRefreshButtonUI('idle');
  } finally {
    isFetching = false;
    renderApp();
  }
}

async function syncStateToServerDatabase() {
  userState.last_updated = new Date().toISOString();
  renderApp();

  try {
    const putRes = await fetch(REALTIME_DB_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'heclair_schoology_user_state',
        data: userState
      })
    });

    if (putRes.ok) {
      console.log('Successfully saved server-side user state across all devices!');
    }
  } catch (err) {
    console.warn('Could not sync to realtime database:', err);
  }
}

function getStudentIdForAssignment(assignment: any): '12345' | '12346' {
  if (assignment.student_id === '12345' || assignment.student_id === '12346') {
    return assignment.student_id;
  }
  if (assignment.child) {
    const childStr = String(assignment.child).toLowerCase();
    if (childStr.includes('louis')) return '12345';
    if (childStr.includes('charlotte')) return '12346';
  }
  const section = (data.sections || []).find(s => s.course_id === assignment.course_id || (s.id && s.id === assignment.section_id));
  if (section && section.enrolled_user_ids) {
    if (section.enrolled_user_ids.includes('12345')) return '12345';
    if (section.enrolled_user_ids.includes('12346')) return '12346';
  }
  return '12345';
}

function toggleAssignmentComplete(assignmentId: string) {
  const set = new Set(userState.completed_assignment_ids || []);
  if (set.has(assignmentId)) {
    set.delete(assignmentId);
  } else {
    set.add(assignmentId);
    if (!userState.assignment_notes[assignmentId]) {
      editingNoteAssignmentId = assignmentId;
    }
  }
  userState.completed_assignment_ids = Array.from(set);
  syncStateToServerDatabase();
}

function saveAssignmentNote(assignmentId: string, noteText: string) {
  const trimmed = noteText.trim();
  if (!userState.assignment_notes) userState.assignment_notes = {};
  
  if (trimmed) {
    userState.assignment_notes[assignmentId] = trimmed;
  } else {
    delete userState.assignment_notes[assignmentId];
  }
  editingNoteAssignmentId = null;
  syncStateToServerDatabase();
}

function updateRefreshButtonUI(state: 'idle' | 'loading' | 'success') {
  const btn = document.querySelector<HTMLButtonElement>('#refresh-btn');
  if (!btn) return;
  
  if (state === 'loading') {
    btn.disabled = true;
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Syncing...
    `;
  } else if (state === 'success') {
    btn.disabled = false;
    btn.style.background = '#ecfdf5';
    btn.style.borderColor = '#059669';
    btn.style.color = '#059669';
    btn.innerHTML = `✓ Updated!`;
  } else {
    btn.disabled = false;
    btn.style.background = '#f1f5f9';
    btn.style.borderColor = '#cbd5e1';
    btn.style.color = '#0f172a';
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
      Refresh Data
    `;
  }
}

function initApp() {
  renderAppLayout();
  loadServerData(false);
}

function renderAppLayout() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
    <div class="app-container">
      <!-- Header -->
      <header class="app-header">
        <div>
          <h1 class="brand-title">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
            Schoology Family Dashboard
          </h1>
          <p class="brand-subtitle" id="school-subtitle">${data.meta?.school || 'Hillview Middle School'} • Realtime Cloud Sync</p>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <button id="refresh-btn" class="filter-btn" style="display: inline-flex; align-items: center; gap: 6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            Refresh Data
          </button>
          <div class="meta-timestamp" style="flex-direction: column; align-items: flex-end; gap: 2px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="pulse-dot"></span>
              <span>Scraper: <strong id="last-updated-text">—</strong></span>
            </div>
            <div style="font-size:0.75rem; color: var(--text-dim);">Checked: <span id="last-checked-text">—</span></div>
          </div>
        </div>
      </header>

      <!-- Totals Overview Grid -->
      <section class="totals-grid" id="totals-grid"></section>

      <!-- Filter Bar -->
      <div class="toolbar">
        <span class="filter-title">Filter Assignments:</span>
        <div class="filter-pills" id="filter-pills">
          <button class="filter-btn active" data-filter="all" id="filter-all-btn">All Items</button>
          <button class="filter-btn" data-filter="homework" id="filter-hw-btn">Homework Only</button>
          <button class="filter-btn" data-filter="voluntary" id="filter-vol-btn">Voluntary & Activities</button>
          <button class="filter-btn" data-filter="overdue" id="overdue-filter-btn">Overdue Items</button>
          <button class="filter-btn" data-filter="completed" id="completed-filter-btn">Completed</button>
        </div>
      </div>

      <!-- Widescreen Side-by-Side Layout -->
      <div class="widescreen-layout">
        <!-- Louis Column -->
        <section class="student-column">
          <div class="student-column-header">
            <h2 class="student-name-heading">
              🎓 Louis
            </h2>
            <span class="student-badge">Grade 7</span>
          </div>
          <div id="louis-assignments-list"></div>
        </section>

        <!-- Charlotte Column -->
        <section class="student-column">
          <div class="student-column-header">
            <h2 class="student-name-heading">
              🎓 Charlotte
            </h2>
            <span class="student-badge" style="background: #faf5ff; color: #7c3aed; border-color: #e9d5ff;">Grade 8</span>
          </div>
          <div id="charlotte-assignments-list"></div>
        </section>

        <!-- Sidebar Column -->
        <aside class="sidebar-column">
          <div class="sidebar-panel">
            <h3 class="section-title">Classes & Sections</h3>
            <div id="course-list"></div>
          </div>

          <div class="sidebar-panel">
            <h3 class="section-title">Teacher Updates</h3>
            <div id="updates-list"></div>
          </div>

          <div class="sidebar-panel">
            <h3 class="section-title">Upcoming Events</h3>
            <div id="calendar-list"></div>
          </div>
        </aside>
      </div>
    </div>
  `;

  setupEventListeners();
}

function renderApp() {
  const subtitle = document.querySelector('#school-subtitle');
  if (subtitle) subtitle.textContent = `${data.meta?.school || 'Hillview Middle School'} • Realtime Cloud Sync v${data.version || '2.0'}`;

  const timestampText = document.querySelector('#last-updated-text');
  if (timestampText) timestampText.textContent = formatScraperDate(data.meta?.last_updated_pt || data.meta?.last_updated);

  const checkedText = document.querySelector('#last-checked-text');
  if (checkedText) checkedText.textContent = lastCheckedAt ? formatLastChecked(lastCheckedAt) : '—';

  const completedSet = new Set(userState.completed_assignment_ids || []);
  
  const allAssignments = data.assignments || [];
  const totalUpcoming = allAssignments.length;
  const homeworkOnly = allAssignments.filter(a => !a.is_voluntary && !a.is_web_voluntary && !String(a.course_title || '').toLowerCase().includes('web')).length;
  const voluntary = allAssignments.filter(a => a.is_voluntary || a.is_web_voluntary || String(a.course_title || '').toLowerCase().includes('web')).length;
  const overdueCount = allAssignments.filter(a => (a.is_overdue_hidden || (a.overdue_days && a.overdue_days > 0)) && !completedSet.has(a.id)).length;

  const btnAll = document.querySelector('#filter-all-btn');
  if (btnAll) btnAll.textContent = `All Items (${totalUpcoming})`;

  const btnHw = document.querySelector('#filter-hw-btn');
  if (btnHw) btnHw.textContent = `Homework Only (${homeworkOnly})`;

  const btnVol = document.querySelector('#filter-vol-btn');
  if (btnVol) btnVol.textContent = `Voluntary & Activities (${voluntary})`;

  const btnOverdue = document.querySelector('#overdue-filter-btn');
  if (btnOverdue) btnOverdue.textContent = `Overdue Items (${overdueCount})`;

  const completedBtn = document.querySelector('#completed-filter-btn');
  if (completedBtn) completedBtn.textContent = `Completed (${completedSet.size})`;

  renderTotalsGrid(totalUpcoming, homeworkOnly, voluntary, overdueCount, completedSet.size);
  renderStudentAssignments('12345', '#louis-assignments-list');
  renderStudentAssignments('12346', '#charlotte-assignments-list');
  renderCourses();
  renderUpdates();
  renderCalendar();
}

function renderTotalsGrid(totalUpcoming: number, homeworkOnly: number, voluntary: number, overdueCount: number, completedCount: number) {
  const container = document.querySelector('#totals-grid');
  if (!container) return;

  const completedSet = new Set(userState.completed_assignment_ids || []);
  const pendingUpcoming = (data.assignments || []).filter(a => !completedSet.has(a.id)).length;

  container.innerHTML = `
    <div class="total-card">
      <div class="total-value">${pendingUpcoming}</div>
      <div class="total-label">Pending Upcoming</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #2563eb;">${homeworkOnly}</div>
      <div class="total-label">Homework Only</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #059669;">${completedCount}</div>
      <div class="total-label">Marked Completed</div>
    </div>
    <div class="total-card alert-card">
      <div class="total-value">${overdueCount}</div>
      <div class="total-label">Hidden Overdue</div>
    </div>
  `;
}

function renderStudentAssignments(studentId: string, containerSelector: string) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const completedSet = new Set(userState.completed_assignment_ids || []);
  const notesMap = userState.assignment_notes || {};

  const allAssignments = data.assignments || [];
  let filtered = allAssignments.filter(a => getStudentIdForAssignment(a) === studentId);

  if (activeFilter === 'homework') {
    filtered = filtered.filter(a => !a.is_voluntary && !a.is_web_voluntary && !String(a.course_title || '').toLowerCase().includes('web'));
  } else if (activeFilter === 'voluntary') {
    filtered = filtered.filter(a => a.is_voluntary || a.is_web_voluntary || String(a.course_title || '').toLowerCase().includes('web'));
  } else if (activeFilter === 'overdue') {
    filtered = filtered.filter(a => (a.is_overdue_hidden || (a.overdue_days && a.overdue_days > 0)) && !completedSet.has(a.id));
  } else if (activeFilter === 'completed') {
    filtered = filtered.filter(a => completedSet.has(a.id));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="assignment-card" style="text-align: center; padding: 32px; color: var(--text-muted);">
        <p style="font-size: 0.9rem;">No assignments for this filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(assignment => {
    const section = (data.sections || []).find(s => s.course_id === assignment.course_id || (s.id && s.id === assignment.section_id));
    const folder = (data.folders || []).find(f => f.id === assignment.folder_id);
    const attachments = (data.attachments || []).filter(att => assignment.attachment_ids?.includes(att.id));

    const courseTitle = assignment.course_title || (section ? (section.course_title || section.section_code || 'Course') : 'Course');
    const folderTitle = folder ? folder.title : '';
    const teacherName = assignment.teacher || assignment.teacher_name || (section && section.teachers ? section.teachers.join(', ') : (section && section.teacher ? section.teacher : ''));

    const isCompleted = completedSet.has(assignment.id);
    const noteText = notesMap[assignment.id] || '';
    const isEditingNote = editingNoteAssignmentId === assignment.id;

    let statusClass = 'due-tomorrow';
    let statusText = assignment.status || 'Upcoming';

    if (isCompleted) {
      statusClass = 'completed-badge';
      statusText = '✓ Completed';
    } else if (assignment.is_overdue_hidden) {
      statusClass = 'overdue';
      statusText = `⚠️ Overdue (${assignment.overdue_days || 1}d hidden)`;
    } else if (assignment.is_voluntary || assignment.is_web_voluntary || String(courseTitle).toLowerCase().includes('web')) {
      statusClass = 'voluntary';
      statusText = 'Voluntary WEB';
    }

    const dueDisplay = assignment.due_human_pt || assignment.due || assignment.due_iso || 'Upcoming';

    return `
      <article class="assignment-card ${isCompleted ? 'is-completed' : ''} ${assignment.is_overdue_hidden && !isCompleted ? 'overdue-hidden' : ''}">
        <div class="card-top">
          <div>
            <span class="course-badge">
              ${courseTitle}
            </span>
            ${folderTitle ? `<span class="folder-path">📁 ${folderTitle}</span>` : ''}
          </div>
          <span class="status-badge ${statusClass}">${statusText}</span>
        </div>

        <h3 class="assignment-title">${assignment.title}</h3>
        <p class="assignment-desc">${assignment.instructions_summary || assignment.description || ''}</p>

        <!-- Student Note Display / Form -->
        ${noteText && !isEditingNote ? `
          <div class="student-note-display">
            <span>💬 <span class="student-note-text">"${noteText}"</span></span>
            <button class="btn-edit-note" data-assignment-id="${assignment.id}">Edit Note</button>
          </div>
        ` : ''}

        ${isEditingNote ? `
          <div class="note-input-box">
            <input type="text" class="note-text-field" id="note-input-${assignment.id}" value="${noteText}" placeholder="Add a note e.g. 'Done on paper', 'Submitted in class'..." />
            <button class="btn-save-note" data-assignment-id="${assignment.id}">Save Note</button>
          </div>
        ` : ''}

        ${attachments.length > 0 ? `
          <div class="attachments-list">
            ${attachments.map(att => `
              <a href="${att.source_url}" target="_blank" rel="noopener" class="attachment-chip">
                📎 ${att.filename} (${(att.file_size / (1024 * 1024)).toFixed(1)}MB)
              </a>
            `).join('')}
          </div>
        ` : ''}

        <div class="card-footer">
          <div class="due-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            ${dueDisplay}
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${teacherName ? `<span>Teacher: <strong>${teacherName}</strong></span>` : ''}
            ${!noteText && !isEditingNote ? `
              <button class="btn-add-note" data-assignment-id="${assignment.id}">+ Note</button>
            ` : ''}
            <button class="btn-complete-toggle ${isCompleted ? 'is-checked' : ''}" data-assignment-id="${assignment.id}">
              ${isCompleted ? '✓ Done' : '◯ Mark Done'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderCourses() {
  const container = document.querySelector('#course-list');
  if (!container) return;

  const sections = data.sections || [];
  if (sections.length === 0) {
    container.innerHTML = '<div style="font-size:0.85rem; color:var(--text-muted);">No classes listed.</div>';
    return;
  }

  container.innerHTML = sections.map(section => {
    const title = section.course_title || 'Course';
    const code = section.section_title || section.section_code || section.section || '';
    const teachers = section.teachers ? section.teachers.join(', ') : (section.teacher || '');

    return `
      <div class="course-item">
        <div class="course-name">${title}</div>
        <div class="course-period">${code}${teachers ? ` • ${teachers}` : ''}</div>
      </div>
    `;
  }).join('');
}

function renderUpdates() {
  const container = document.querySelector('#updates-list');
  if (!container) return;

  const updates = data.updates || [];
  if (updates.length === 0) {
    container.innerHTML = '<div style="font-size:0.85rem; color:var(--text-muted);">No recent updates.</div>';
    return;
  }

  container.innerHTML = updates.map(update => `
    <div class="update-card">
      <div class="update-author">${update.author_name || 'Teacher'} ${update.author_role ? `(${update.author_role})` : ''}</div>
      <div class="update-body" id="update-body-${update.id}">${update.body}</div>
      ${update.body_truncated ? `
        <button class="btn-readmore" data-update-id="${update.id}">Read full update...</button>
      ` : ''}
    </div>
  `).join('');
}

function renderCalendar() {
  const container = document.querySelector('#calendar-list');
  if (!container) return;

  const events = data.calendar_events || [];
  if (events.length === 0) {
    container.innerHTML = '<div style="font-size:0.85rem; color:var(--text-muted);">No upcoming events.</div>';
    return;
  }

  container.innerHTML = events.map(event => {
    const d = new Date(event.start);
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });

    return `
      <div class="calendar-item">
        <div class="calendar-date-box">
          <div class="date-day">${day}</div>
          <div class="date-month">${month}</div>
        </div>
        <div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-main);">${event.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${(event.type || 'SCHOOL').toUpperCase()} EVENT</div>
        </div>
      </div>
    `;
  }).join('');
}

function setupEventListeners() {
  // Manual Refresh Button Click
  document.querySelector('#refresh-btn')?.addEventListener('click', () => {
    if (!isFetching) loadServerData(true);
  });

  // Filter Pills
  document.querySelector('#filter-pills')?.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.filter-btn');
    if (!target) return;
    const filter = target.getAttribute('data-filter');
    if (filter) {
      activeFilter = filter;
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active', 'active-warning', 'active-success'));
      if (filter === 'overdue') target.classList.add('active-warning');
      else if (filter === 'completed') target.classList.add('active-success');
      else target.classList.add('active');

      renderStudentAssignments('12345', '#louis-assignments-list');
      renderStudentAssignments('12346', '#charlotte-assignments-list');
    }
  });

  // Toggle Completion Click (Event Delegation)
  document.addEventListener('click', (e) => {
    const completeBtn = (e.target as HTMLElement).closest('.btn-complete-toggle');
    if (completeBtn) {
      const assignmentId = completeBtn.getAttribute('data-assignment-id');
      if (assignmentId) toggleAssignmentComplete(assignmentId);
      return;
    }

    const addNoteBtn = (e.target as HTMLElement).closest('.btn-add-note') || (e.target as HTMLElement).closest('.btn-edit-note');
    if (addNoteBtn) {
      const assignmentId = addNoteBtn.getAttribute('data-assignment-id');
      if (assignmentId) {
        editingNoteAssignmentId = assignmentId;
        renderApp();
        setTimeout(() => {
          document.querySelector<HTMLInputElement>(`#note-input-${assignmentId}`)?.focus();
        }, 50);
      }
      return;
    }

    const saveNoteBtn = (e.target as HTMLElement).closest('.btn-save-note');
    if (saveNoteBtn) {
      const assignmentId = saveNoteBtn.getAttribute('data-assignment-id');
      if (assignmentId) {
        const input = document.querySelector<HTMLInputElement>(`#note-input-${assignmentId}`);
        if (input) saveAssignmentNote(assignmentId, input.value);
      }
      return;
    }
  });

  // Enter key in note input
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      if (target && target.classList.contains('note-text-field')) {
        const assignmentId = target.id.replace('note-input-', '');
        if (assignmentId) saveAssignmentNote(assignmentId, target.value);
      }
    }
  });

  // Expand Updates
  document.querySelector('#updates-list')?.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.btn-readmore');
    if (!target) return;
    const updateId = target.getAttribute('data-update-id');
    if (updateId) {
      const updateObj = (data.updates || []).find(u => u.id === updateId);
      const bodyEl = document.querySelector(`#update-body-${updateId}`);
      if (bodyEl && updateObj) {
        bodyEl.innerHTML = `${updateObj.body} <em>(full text loaded from Schoology API)</em>`;
        target.remove();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);
