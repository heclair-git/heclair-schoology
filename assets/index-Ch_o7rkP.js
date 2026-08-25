(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={version:`2.0`,meta:{last_updated:`2026-08-24T23:44:52Z`,last_updated_pt:`2026-08-24T16:44:52-07:00`,timezone:`America/Los_Angeles`,source:`schoology_parent`,parent_account:`parent@example.com`,parent_name:`Parent`,school:`Middle School`,children_verified:[`Charlotte Loose`,`Louis Loose`],totals:{total_upcoming:11,homework_only:7,web_voluntary:4,overdue_visible:0,overdue_hidden:2}},users:[{id:`12345`,name_display:`Louis Loose`,name_first:`Louis`,name_last:`Loose`,primary_email:null,role:`Student`,grade_level:`7`,school:`Middle School`,linked_parent_id:`parent_001`},{id:`12346`,name_display:`Charlotte Loose`,name_first:`Charlotte`,name_last:`Loose`,primary_email:null,role:`Student`,grade_level:`8`,school:`Middle School`,linked_parent_id:`parent_001`},{id:`t_789`,name_display:`Ms. Hagg`,role:`Teacher`,primary_email:null}],courses:[{id:`8500088178`,title:`Algebra 1`,course_code:`ALG1-4AB`,course_title_raw:`Algebra 1 : 4(A-B)`},{id:`8500088179`,title:`Science 7`,course_code:`SCI7-01`,course_title_raw:`Science 7 : 1(A-B)`},{id:`8500088180`,title:`WEB Leadership`,course_code:`WEB-01`,course_title_raw:`WEB : Section 1`}],sections:[{id:`8500088178`,course_id:`8500088178`,section_title:`Period 4(A-B)`,section_code:`ALG1-04`,section_title_raw:`Algebra 1 : 4(A-B)`,course_title:`Algebra 1`,location:`Room 204`,teachers:[`Ms. Hagg`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`]},{id:`8500088179`,course_id:`8500088179`,section_title:`Period 1(A-B)`,section_code:`SCI7-01`,section_title_raw:`Science 7 : 1(A-B)`,course_title:`Science 7`,location:`Lab 3`,teachers:[`Ms. Keller`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`]},{id:`8500088180`,course_id:`8500088180`,section_title:`Section 1`,section_code:`WEB-01`,section_title_raw:`WEB : Section 1`,course_title:`WEB Leadership`,location:`Gym`,teachers:[`Ms. Keller`,`Ms. Connelly`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`,`12346`]}],grading_periods:[{id:`Tri1-2026`,title:`Trimester 1`,start:`2026-08-20`,end:`2026-11-13`}],folders:[{id:`f_1029722623`,section_id:`8500088178`,title:`Chapter 1 - Solving Linear Equations`},{id:`f_1029722624`,section_id:`8500088179`,title:`Unit 1 - Scientific Method`}],assignments:[{id:`8516163487`,section_id:`8500088178`,course_id:`8500088178`,folder_id:`f_1029722623`,title:`1.1 Notes and HW`,description:`Attach your completed notes with completed and corrected homework when the assignment is due. Thank you!`,instructions_summary:`Attach completed notes with corrected HW`,due:`2026-08-25T23:59:00-07:00`,due_human_pt:`Tuesday, August 25, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-20T15:57:00-07:00`,max_points:100,grading_category:`Formative`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Due Tomorrow`,status_detail:`hidden overdue 1 day`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!0,overdue_days:1,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163487/info`,teacher_name:`Ms. Hagg`,student_id:`12345`,attachment_ids:[`3528031067`,`3529363942`]},{id:`8516163499`,section_id:`8500088179`,course_id:`8500088179`,folder_id:`f_1029722624`,title:`Lab Safety Contract & Survey`,description:`Please review safety guidelines with parent/guardian and submit signed form.`,instructions_summary:`Submit signed safety form`,due:`2026-08-26T23:59:00-07:00`,due_human_pt:`Wednesday, August 26, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-21T10:00:00-07:00`,max_points:50,grading_category:`Homework`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Due in 2 days`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163499/info`,teacher_name:`Ms. Keller`,student_id:`12345`,attachment_ids:[]},{id:`8516163555`,section_id:`8500088180`,course_id:`8500088180`,folder_id:null,title:`WEB Welcome Reflection & Goal Sheet`,description:`Voluntary reflection activity for WEB Leaders.`,instructions_summary:`Voluntary reflection activity`,due:`2026-08-28T23:59:00-07:00`,due_human_pt:`Friday, August 28, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-22T09:00:00-07:00`,max_points:null,grading_category:`Voluntary`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Voluntary WEB activity`,is_voluntary:!0,is_web_voluntary:!0,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163555/info`,teacher_name:`Ms. Keller`,student_id:`12346`,attachment_ids:[]}],attachments:[{id:`3528031067`,assignment_id:`8516163487`,filename:`1_Ch1_HWAnswers.pdf`,file_size:4194304,mime_type:`application/pdf`,source_url:`https://app.schoology.com/attachment/3528031067/source/02e762e8423679b8354e5051e63d8a07.pdf`,docviewer_url:`https://app.schoology.com/attachment/3528031067/docviewer`,material_url:`https://app.schoology.com/course/8500088178/materials/gp/8516163508`},{id:`3529363942`,assignment_id:`8516163487`,filename:`Ch1_StampSheet.pdf`,file_size:198656,mime_type:`application/pdf`,source_url:`https://app.schoology.com/attachment/3529363942/source/stamp.pdf`,docviewer_url:`https://app.schoology.com/attachment/3529363942/docviewer`,material_url:`https://app.schoology.com/course/8500088178/materials/gp/8516163508`}],grades:[{section_id:`8500088178`,uid:`12345`,assignment_id:`8516163487`,grade:null,max_points:100,percent:null,letter:null,is_missing:!1,is_excused:!1,is_late:!1,comment:null,graded_at:null}],submissions:[{id:`sub_8516163487`,assignment_id:`8516163487`,uid:`12345`,created:null,submitted_at:null,body:null,file_ids:[],status:`not_submitted`}],updates:[{id:`136911845`,section_id:`8500088178`,course_id:`8500088178`,author_id:`t_789`,author_name:`Ms. Hagg`,author_role:`Teacher`,body:`Good morning and happy Monday! Here are the notes for today's lesson (1.1); please download them for class today.`,body_html:`<p>Good morning and happy Monday! Here are the notes for today's lesson (1.1); please download them for class today.</p>`,body_truncated:!0,created:`2026-08-24T11:25:00-07:00`,attachment_ids:[`3531986838`]}],calendar_events:[{id:`cal_0825`,title:`Picture Day (7th Grade)`,section_id:null,start:`2026-08-25T00:00:00-07:00`,type:`school`},{id:`cal_0827`,title:`Back to School Night (6:00 PM)`,section_id:null,start:`2026-08-27T18:00:00-07:00`,type:`school`}]},t=e.users.find(e=>e.role===`Student`)?.id||`12345`,n=`all`;function r(){let t=document.querySelector(`#app`);t&&(t.innerHTML=`
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
          <p class="brand-subtitle">${e.meta.school} • Live Sync v${e.version}</p>
        </div>
        <div class="meta-timestamp">
          <span class="pulse-dot"></span>
          Last Updated: <strong>${e.meta.last_updated_pt}</strong>
        </div>
      </header>

      <!-- Totals Grid -->
      <section class="totals-grid">
        <div class="total-card">
          <div class="total-value">${e.meta.totals.total_upcoming}</div>
          <div class="total-label">Total Upcoming</div>
        </div>
        <div class="total-card">
          <div class="total-value" style="color: #38bdf8;">${e.meta.totals.homework_only}</div>
          <div class="total-label">Homework Only</div>
        </div>
        <div class="total-card">
          <div class="total-value" style="color: #c084fc;">${e.meta.totals.web_voluntary}</div>
          <div class="total-label">Voluntary WEB</div>
        </div>
        <div class="total-card alert-card">
          <div class="total-value" style="color: #f43f5e;">${e.meta.totals.overdue_hidden}</div>
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
          <button class="filter-btn" data-filter="overdue">Overdue Items (${e.meta.totals.overdue_hidden})</button>
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
  `,i(),o(),s(),c(),a(),l())}function i(){let n=document.querySelector(`#student-tabs`);n&&(n.innerHTML=e.users.filter(e=>e.role===`Student`).map(e=>`
    <button class="student-tab ${e.id===t?`active`:``}" data-student-id="${e.id}">
      🎓 ${e.name_display} ${e.grade_level?`(Grade ${e.grade_level})`:``}
    </button>
  `).join(``))}function a(){let r=document.querySelector(`#assignment-list`),i=document.querySelector(`#assignment-section-title`);if(!r)return;let a=e.assignments.filter(e=>e.student_id===t||!e.student_id);if(n===`homework`?a=a.filter(e=>!e.is_voluntary&&!e.is_web_voluntary):n===`voluntary`?a=a.filter(e=>e.is_voluntary||e.is_web_voluntary):n===`overdue`&&(a=a.filter(e=>e.is_overdue_hidden||e.overdue_days>0)),i&&(i.innerHTML=`Assignments & Homework for ${e.users.find(e=>e.id===t)?.name_display||`Student`} (${a.length})`),a.length===0){r.innerHTML=`
      <div class="assignment-card" style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No assignments found for this filter.</p>
      </div>
    `;return}r.innerHTML=a.map(t=>{let n=e.sections.find(e=>e.id===t.section_id),r=e.folders.find(e=>e.id===t.folder_id),i=e.attachments.filter(e=>t.attachment_ids?.includes(e.id)),a=`due-tomorrow`,o=t.status||`Upcoming`;return t.is_overdue_hidden?(a=`overdue`,o=`⚠️ Overdue (${t.overdue_days}d hidden)`):t.is_voluntary&&(a=`voluntary`,o=`Voluntary WEB`),`
      <article class="assignment-card ${t.is_overdue_hidden?`overdue-hidden`:``}">
        <div class="card-top">
          <div>
            <span class="course-badge">
              ${n?n.course_title:`Course`}
            </span>
            ${r?`<span class="folder-path">📁 ${r.title}</span>`:``}
          </div>
          <span class="status-badge ${a}">${o}</span>
        </div>

        <h3 class="assignment-title">${t.title}</h3>
        <p class="assignment-desc">${t.instructions_summary||t.description}</p>

        ${i.length>0?`
          <div class="attachments-list">
            ${i.map(e=>`
              <a href="${e.source_url}" target="_blank" rel="noopener" class="attachment-chip">
                📎 ${e.filename} (${(e.file_size/1048576).toFixed(1)}MB)
              </a>
            `).join(``)}
          </div>
        `:``}

        <div class="card-footer">
          <div class="due-time">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            ${t.due_human_pt}
          </div>
          <div>
            ${t.teacher_name?`Teacher: <strong>${t.teacher_name}</strong>`:``}
          </div>
        </div>
      </article>
    `}).join(``)}function o(){let t=document.querySelector(`#course-list`);t&&(t.innerHTML=e.sections.map(e=>`
    <div class="course-item">
      <div>
        <div class="course-name">${e.course_title}</div>
        <div class="course-period">${e.section_title} • ${e.teachers.join(`, `)}</div>
      </div>
    </div>
  `).join(``))}function s(){let t=document.querySelector(`#updates-list`);t&&(t.innerHTML=e.updates.map(e=>`
    <div class="update-card">
      <div class="update-author">${e.author_name} (${e.author_role})</div>
      <div class="update-body" id="update-body-${e.id}">${e.body}</div>
      ${e.body_truncated?`
        <button class="btn-readmore" data-update-id="${e.id}">Read full update...</button>
      `:``}
    </div>
  `).join(``))}function c(){let t=document.querySelector(`#calendar-list`);t&&(t.innerHTML=e.calendar_events.map(e=>{let t=new Date(e.start);return`
      <div class="calendar-item">
        <div class="calendar-date-box">
          <div class="date-day">${t.getDate()}</div>
          <div class="date-month">${t.toLocaleString(`en-US`,{month:`short`})}</div>
        </div>
        <div>
          <div style="font-weight: 600; font-size: 0.9rem;">${e.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${e.type.toUpperCase()} EVENT</div>
        </div>
      </div>
    `}).join(``))}function l(){document.querySelector(`#student-tabs`)?.addEventListener(`click`,e=>{let n=e.target.closest(`.student-tab`);if(!n)return;let r=n.getAttribute(`data-student-id`);r&&(t=r,i(),a())}),document.querySelector(`#filter-pills`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.filter-btn`);if(!t)return;let r=t.getAttribute(`data-filter`);r&&(n=r,document.querySelectorAll(`.filter-btn`).forEach(e=>e.classList.remove(`active`,`active-warning`)),t.classList.add(r===`overdue`?`active-warning`:`active`),a())}),document.querySelector(`#updates-list`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.btn-readmore`);if(!n)return;let r=n.getAttribute(`data-update-id`);if(r){let t=e.updates.find(e=>e.id===r),i=document.querySelector(`#update-body-${r}`);i&&t&&(i.innerHTML=`${t.body} <em>(full text loaded from Schoology API)</em>`,n.remove())}})}document.addEventListener(`DOMContentLoaded`,r);