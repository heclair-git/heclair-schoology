import './index.css';
import rawData from '../data/schoology_v2.json';

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
    id: string;
    course_id: string;
    section_title: string;
    course_title: string;
    location?: string;
    teachers: string[];
    enrolled_user_ids: string[];
  }>;
  folders: Array<{
    id: string;
    section_id: string;
    title: string;
  }>;
  assignments: Array<{
    id: string;
    section_id: string;
    course_id: string;
    folder_id?: string;
    title: string;
    description: string;
    instructions_summary?: string;
    due: string;
    due_human_pt: string;
    max_points?: number;
    grading_category: string;
    type: string;
    status: string;
    status_detail?: string;
    is_voluntary: boolean;
    is_web_voluntary: boolean;
    is_overdue_hidden: boolean;
    overdue_days: number;
    student_id: string;
    teacher_name?: string;
    attachment_ids: string[];
    web_url: string;
  }>;
  attachments: Array<{
    id: string;
    assignment_id: string;
    filename: string;
    file_size: number;
    mime_type: string;
    source_url: string;
    docviewer_url: string;
  }>;
  updates: Array<{
    id: string;
    section_id: string;
    author_name: string;
    body: string;
    body_truncated: boolean;
    created: string;
  }>;
  calendar_events: Array<{
    id: string;
    title: string;
    start: string;
    type: string;
  }>;
}

const data = rawData as unknown as SchoologyData;

// App State
let activeStudentId = data.users.find(u => u.role === 'Student')?.id || '12345';
let activeFilter = 'all'; // 'all' | 'homework' | 'voluntary' | 'overdue'

function initApp() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
    <div class="app-container">
      <!-- Header -->
      <header class="app-header">
        <div>
          <h1 class="brand-title">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
            Schoology Family Portal
          </h1>
          <p class="brand-subtitle">${data.meta.school} • Live Sync v${data.version}</p>
        </div>
        <div class="meta-timestamp">
          <span class="pulse-dot"></span>
          Last Updated: <strong>${data.meta.last_updated_pt}</strong>
        </div>
      </header>

      <!-- Totals Grid -->
      <section class="totals-grid">
        <div class="total-card">
          <div class="total-value">${data.meta.totals.total_upcoming}</div>
          <div class="total-label">Total Upcoming</div>
        </div>
        <div class="total-card">
          <div class="total-value" style="color: #38bdf8;">${data.meta.totals.homework_only}</div>
          <div class="total-label">Homework Only</div>
        </div>
        <div class="total-card">
          <div class="total-value" style="color: #c084fc;">${data.meta.totals.web_voluntary}</div>
          <div class="total-label">Voluntary WEB</div>
        </div>
        <div class="total-card alert-card">
          <div class="total-value" style="color: #f43f5e;">${data.meta.totals.overdue_hidden}</div>
          <div class="total-label">Hidden Overdue</div>
        </div>
      </section>

      <!-- Navigation & Filter Toolbar -->
      <div class="toolbar">
        <div class="student-tabs" id="student-tabs"></div>
        <div class="filter-pills" id="filter-pills">
          <button class="filter-btn active" data-filter="all">All Items</button>
          <button class="filter-btn" data-filter="homework">Homework Only</button>
          <button class="filter-btn" data-filter="voluntary">Voluntary & Activities</button>
          <button class="filter-btn" data-filter="overdue">Overdue Items (${data.meta.totals.overdue_hidden})</button>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="dashboard-grid">
        <!-- Main Column: Assignments -->
        <main>
          <div class="section-header">
            <h2 class="section-title" id="assignment-section-title">Upcoming Assignments</h2>
          </div>
          <div id="assignment-list"></div>
        </main>

        <!-- Sidebar Column: Classes, Updates, Events -->
        <aside>
          <!-- Courses Sidebar -->
          <div class="sidebar-panel">
            <h3 class="section-title" style="font-size: 1.05rem; margin-bottom: 14px;">Classes & Sections</h3>
            <div id="course-list"></div>
          </div>

          <!-- Updates Sidebar -->
          <div class="sidebar-panel">
            <h3 class="section-title" style="font-size: 1.05rem; margin-bottom: 14px;">Teacher Updates</h3>
            <div id="updates-list"></div>
          </div>

          <!-- Calendar Sidebar -->
          <div class="sidebar-panel">
            <h3 class="section-title" style="font-size: 1.05rem; margin-bottom: 14px;">Upcoming Events</h3>
            <div id="calendar-list"></div>
          </div>
        </aside>
      </div>
    </div>
  `;

  renderStudentTabs();
  renderCourses();
  renderUpdates();
  renderCalendar();
  renderAssignments();

  setupEventListeners();
}

function renderStudentTabs() {
  const tabsContainer = document.querySelector('#student-tabs');
  if (!tabsContainer) return;

  const students = data.users.filter(u => u.role === 'Student');
  tabsContainer.innerHTML = students.map(student => `
    <button class="student-tab ${student.id === activeStudentId ? 'active' : ''}" data-student-id="${student.id}">
      🎓 ${student.name_display} ${student.grade_level ? `(Grade ${student.grade_level})` : ''}
    </button>
  `).join('');
}

function renderAssignments() {
  const listContainer = document.querySelector('#assignment-list');
  const titleContainer = document.querySelector('#assignment-section-title');
  if (!listContainer) return;

  let filtered = data.assignments.filter(a => a.student_id === activeStudentId || !a.student_id);

  if (activeFilter === 'homework') {
    filtered = filtered.filter(a => !a.is_voluntary && !a.is_web_voluntary);
  } else if (activeFilter === 'voluntary') {
    filtered = filtered.filter(a => a.is_voluntary || a.is_web_voluntary);
  } else if (activeFilter === 'overdue') {
    filtered = filtered.filter(a => a.is_overdue_hidden || a.overdue_days > 0);
  }

  if (titleContainer) {
    const studentName = data.users.find(u => u.id === activeStudentId)?.name_display || 'Student';
    titleContainer.innerHTML = `Assignments & Homework for ${studentName} (${filtered.length})`;
  }

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="assignment-card" style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No assignments found for this filter.</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = filtered.map(assignment => {
    const section = data.sections.find(s => s.id === assignment.section_id);
    const folder = data.folders.find(f => f.id === assignment.folder_id);
    const attachments = data.attachments.filter(att => assignment.attachment_ids?.includes(att.id));

    let statusClass = 'due-tomorrow';
    let statusText = assignment.status || 'Upcoming';

    if (assignment.is_overdue_hidden) {
      statusClass = 'overdue';
      statusText = `⚠️ Overdue (${assignment.overdue_days}d hidden)`;
    } else if (assignment.is_voluntary) {
      statusClass = 'voluntary';
      statusText = 'Voluntary WEB';
    }

    return `
      <article class="assignment-card ${assignment.is_overdue_hidden ? 'overdue-hidden' : ''}">
        <div class="card-top">
          <div>
            <span class="course-badge">
              ${section ? section.course_title : 'Course'}
            </span>
            ${folder ? `<span class="folder-path">📁 ${folder.title}</span>` : ''}
          </div>
          <span class="status-badge ${statusClass}">${statusText}</span>
        </div>

        <h3 class="assignment-title">${assignment.title}</h3>
        <p class="assignment-desc">${assignment.instructions_summary || assignment.description}</p>

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
            ${assignment.due_human_pt}
          </div>
          <div>
            ${assignment.teacher_name ? `Teacher: <strong>${assignment.teacher_name}</strong>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderCourses() {
  const coursesContainer = document.querySelector('#course-list');
  if (!coursesContainer) return;

  coursesContainer.innerHTML = data.sections.map(section => `
    <div class="course-item">
      <div>
        <div class="course-name">${section.course_title}</div>
        <div class="course-period">${section.section_title} • ${section.teachers.join(', ')}</div>
      </div>
    </div>
  `).join('');
}

function renderUpdates() {
  const updatesContainer = document.querySelector('#updates-list');
  if (!updatesContainer) return;

  updatesContainer.innerHTML = data.updates.map(update => `
    <div class="update-card">
      <div class="update-author">${update.author_name} (${update.author_role})</div>
      <div class="update-body" id="update-body-${update.id}">${update.body}</div>
      ${update.body_truncated ? `
        <button class="btn-readmore" data-update-id="${update.id}">Read full update...</button>
      ` : ''}
    </div>
  `).join('');
}

function renderCalendar() {
  const calendarContainer = document.querySelector('#calendar-list');
  if (!calendarContainer) return;

  calendarContainer.innerHTML = data.calendar_events.map(event => {
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
          <div style="font-weight: 600; font-size: 0.9rem;">${event.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${event.type.toUpperCase()} EVENT</div>
        </div>
      </div>
    `;
  }).join('');
}

function setupEventListeners() {
  // Student Switching
  document.querySelector('#student-tabs')?.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.student-tab');
    if (!target) return;
    const studentId = target.getAttribute('data-student-id');
    if (studentId) {
      activeStudentId = studentId;
      renderStudentTabs();
      renderAssignments();
    }
  });

  // Filter Pills
  document.querySelector('#filter-pills')?.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.filter-btn');
    if (!target) return;
    const filter = target.getAttribute('data-filter');
    if (filter) {
      activeFilter = filter;
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active', 'active-warning'));
      target.classList.add(filter === 'overdue' ? 'active-warning' : 'active');
      renderAssignments();
    }
  });

  // Expand Updates
  document.querySelector('#updates-list')?.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.btn-readmore');
    if (!target) return;
    const updateId = target.getAttribute('data-update-id');
    if (updateId) {
      const updateObj = data.updates.find(u => u.id === updateId);
      const bodyEl = document.querySelector(`#update-body-${updateId}`);
      if (bodyEl && updateObj) {
        bodyEl.innerHTML = `${updateObj.body} <em>(full text loaded from Schoology API)</em>`;
        target.remove();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);
