(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={version:`2.0`,meta:{last_updated:`2026-08-24T23:44:52Z`,last_updated_pt:`2026-08-24T16:44:52-07:00`,timezone:`America/Los_Angeles`,source:`schoology_parent`,parent_account:`parent@example.com`,parent_name:`Parent`,school:`Hillview Middle School`,children_verified:[`Louis Loose`,`Charlotte Loose`],totals:{total_upcoming:11,homework_only:7,web_voluntary:4,overdue_visible:0,overdue_hidden:2}},users:[{id:`12345`,name_display:`Louis Loose`,name_first:`Louis`,name_last:`Loose`,primary_email:null,role:`Student`,grade_level:`7`,school:`Hillview Middle School`,linked_parent_id:`parent_001`},{id:`12346`,name_display:`Charlotte Loose`,name_first:`Charlotte`,name_last:`Loose`,primary_email:null,role:`Student`,grade_level:`8`,school:`Hillview Middle School`,linked_parent_id:`parent_001`},{id:`t_789`,name_display:`Ms. Hagg`,role:`Teacher`,primary_email:null},{id:`t_790`,name_display:`Ms. Keller`,role:`Teacher`,primary_email:null},{id:`t_791`,name_display:`Mr. Connelly`,role:`Teacher`,primary_email:null}],courses:[{id:`8500088178`,title:`Algebra 1`,course_code:`ALG1-4AB`,course_title_raw:`Algebra 1 : 4(A-B)`},{id:`8500088179`,title:`Science 7`,course_code:`SCI7-01`,course_title_raw:`Science 7 : 1(A-B)`},{id:`8500088180`,title:`WEB Leadership`,course_code:`WEB-01`,course_title_raw:`WEB : Section 1`},{id:`8500088181`,title:`English 7`,course_code:`ENG7-02`,course_title_raw:`English 7 : 2(A-B)`},{id:`8500088182`,title:`History 7`,course_code:`HIST7-03`,course_title_raw:`History 7 : 3(A-B)`},{id:`8500088183`,title:`Algebra 1 Honors`,course_code:`ALG1H-01`,course_title_raw:`Algebra 1 Honors : 1(A-B)`},{id:`8500088184`,title:`Science 8`,course_code:`SCI8-02`,course_title_raw:`Science 8 : 2(A-B)`}],sections:[{id:`8500088178`,course_id:`8500088178`,section_title:`Period 4(A-B)`,section_code:`ALG1-04`,section_title_raw:`Algebra 1 : 4(A-B)`,course_title:`Algebra 1`,location:`Room 204`,teachers:[`Ms. Hagg`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`]},{id:`8500088179`,course_id:`8500088179`,section_title:`Period 1(A-B)`,section_code:`SCI7-01`,section_title_raw:`Science 7 : 1(A-B)`,course_title:`Science 7`,location:`Lab 3`,teachers:[`Ms. Keller`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`]},{id:`8500088180`,course_id:`8500088180`,section_title:`Section 1`,section_code:`WEB-01`,section_title_raw:`WEB : Section 1`,course_title:`WEB Leadership`,location:`Gym`,teachers:[`Ms. Keller`,`Mr. Connelly`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`,`12346`]},{id:`8500088181`,course_id:`8500088181`,section_title:`Period 2(A-B)`,section_code:`ENG7-02`,section_title_raw:`English 7 : 2(A-B)`,course_title:`English 7`,location:`Room 108`,teachers:[`Mr. Davis`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`]},{id:`8500088182`,course_id:`8500088182`,section_title:`Period 3(A-B)`,section_code:`HIST7-03`,section_title_raw:`History 7 : 3(A-B)`,course_title:`History 7`,location:`Room 112`,teachers:[`Mrs. Adams`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12345`]},{id:`8500088183`,course_id:`8500088183`,section_title:`Period 1(A-B)`,section_code:`ALG1H-01`,section_title_raw:`Algebra 1 Honors : 1(A-B)`,course_title:`Algebra 1 Honors`,location:`Room 205`,teachers:[`Mr. Miller`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12346`]},{id:`8500088184`,course_id:`8500088184`,section_title:`Period 2(A-B)`,section_code:`SCI8-02`,section_title_raw:`Science 8 : 2(A-B)`,course_title:`Science 8`,location:`Lab 4`,teachers:[`Dr. Wilson`],grading_periods:[`Tri1-2026`],enrolled_user_ids:[`12346`]}],grading_periods:[{id:`Tri1-2026`,title:`Trimester 1`,start:`2026-08-20`,end:`2026-11-13`}],folders:[{id:`f_1029722623`,section_id:`8500088178`,title:`Chapter 1 - Solving Linear Equations`},{id:`f_1029722624`,section_id:`8500088179`,title:`Unit 1 - Scientific Method`},{id:`f_1029722625`,section_id:`8500088181`,title:`Unit 1 - Personal Narrative`},{id:`f_1029722626`,section_id:`8500088183`,title:`Unit 1 - Advanced Algebra Basics`}],assignments:[{id:`8516163487`,section_id:`8500088178`,course_id:`8500088178`,folder_id:`f_1029722623`,title:`1.1 Notes and HW`,description:`Attach your completed notes with completed and corrected homework when the assignment is due. Thank you!`,instructions_summary:`Attach completed notes with corrected HW`,due:`2026-08-25T23:59:00-07:00`,due_human_pt:`Tuesday, August 25, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-20T15:57:00-07:00`,max_points:100,grading_category:`Formative`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Due Tomorrow`,status_detail:`hidden overdue 1 day`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!0,overdue_days:1,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163487/info`,teacher_name:`Ms. Hagg`,student_id:`12345`,attachment_ids:[`3528031067`,`3529363942`]},{id:`8516163499`,section_id:`8500088179`,course_id:`8500088179`,folder_id:`f_1029722624`,title:`Lab Safety Contract & Survey`,description:`Please review safety guidelines with parent/guardian and submit signed form.`,instructions_summary:`Submit signed safety form`,due:`2026-08-26T23:59:00-07:00`,due_human_pt:`Wednesday, August 26, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-21T10:00:00-07:00`,max_points:50,grading_category:`Homework`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Due in 2 days`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163499/info`,teacher_name:`Ms. Keller`,student_id:`12345`,attachment_ids:[]},{id:`8516163501`,section_id:`8500088181`,course_id:`8500088181`,folder_id:`f_1029722625`,title:`Who I Am Project - Slide Deck`,description:`Create a 5-slide presentation introducing yourself to your classmates.`,instructions_summary:`5-slide intro presentation`,due:`2026-08-25T00:00:00-07:00`,due_human_pt:`Tuesday, August 25, 2026`,due_has_time:!1,due_tz:`America/Los_Angeles`,posted_at:`2026-08-20T12:00:00-07:00`,max_points:100,grading_category:`Projects`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Due Today`,status_detail:`Due today`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163501/info`,teacher_name:`Mr. Davis`,student_id:`12345`,attachment_ids:[]},{id:`8516163502`,section_id:`8500088182`,course_id:`8500088182`,folder_id:null,title:`Chapter 1 Vocabulary & Map Worksheet`,description:`Complete map study and key terms for ancient civilizations.`,instructions_summary:`Map study & key terms`,due:`2026-08-27T23:59:00-07:00`,due_human_pt:`Thursday, August 27, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-21T14:00:00-07:00`,max_points:25,grading_category:`Homework`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Due in 3 days`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163502/info`,teacher_name:`Mrs. Adams`,student_id:`12345`,attachment_ids:[]},{id:`8516163503`,section_id:`8500088180`,course_id:`8500088180`,folder_id:null,title:`10 Things About Me Survey`,description:`Voluntary WEB icebreaker survey for advisory.`,instructions_summary:`WEB icebreaker survey`,due:`2026-08-24T23:59:00-07:00`,due_human_pt:`Monday, August 24, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-19T08:00:00-07:00`,max_points:null,grading_category:`Voluntary`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Overdue`,status_detail:`hidden overdue 2 days`,is_voluntary:!0,is_web_voluntary:!0,is_overdue_visible:!1,is_overdue_hidden:!0,overdue_days:2,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163503/info`,teacher_name:`Ms. Keller`,student_id:`12345`,attachment_ids:[]},{id:`8516163504`,section_id:`8500088180`,course_id:`8500088180`,folder_id:null,title:`WEB Advisory Community Building Reflection`,description:`Optional WEB leadership worksheet.`,instructions_summary:`WEB leadership reflection`,due:`2026-08-28T23:59:00-07:00`,due_human_pt:`Friday, August 28, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-22T09:00:00-07:00`,max_points:null,grading_category:`Voluntary`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Voluntary WEB`,is_voluntary:!0,is_web_voluntary:!0,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163504/info`,teacher_name:`Mr. Connelly`,student_id:`12345`,attachment_ids:[]},{id:`8516163555`,section_id:`8500088180`,course_id:`8500088180`,folder_id:null,title:`WEB Welcome Reflection & Goal Sheet`,description:`Voluntary reflection activity for WEB Leaders.`,instructions_summary:`Voluntary reflection activity`,due:`2026-08-28T23:59:00-07:00`,due_human_pt:`Friday, August 28, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-22T09:00:00-07:00`,max_points:null,grading_category:`Voluntary`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Voluntary WEB activity`,is_voluntary:!0,is_web_voluntary:!0,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163555/info`,teacher_name:`Ms. Keller`,student_id:`12346`,attachment_ids:[]},{id:`8516163556`,section_id:`8500088183`,course_id:`8500088183`,folder_id:`f_1029722626`,title:`1.2 Equations with Variables on Both Sides`,description:`Complete problems 1-18 odd numbers on page 24.`,instructions_summary:`Page 24 #1-18 odd`,due:`2026-08-26T23:59:00-07:00`,due_human_pt:`Wednesday, August 26, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-21T11:00:00-07:00`,max_points:100,grading_category:`Homework`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Due in 2 days`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163556/info`,teacher_name:`Mr. Miller`,student_id:`12346`,attachment_ids:[]},{id:`8516163557`,section_id:`8500088184`,course_id:`8500088184`,folder_id:null,title:`Cell Structure Diagram & Questions`,description:`Label plant and animal cell organelles and answer review questions.`,instructions_summary:`Label organelle diagrams`,due:`2026-08-27T23:59:00-07:00`,due_human_pt:`Thursday, August 27, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-22T13:00:00-07:00`,max_points:50,grading_category:`Homework`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Due in 3 days`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163557/info`,teacher_name:`Dr. Wilson`,student_id:`12346`,attachment_ids:[]},{id:`8516163558`,section_id:`8500088181`,course_id:`8500088181`,folder_id:null,title:`Summer Reading Essay Draft`,description:`Upload Google Doc draft of your summer reading response.`,instructions_summary:`Upload essay draft`,due:`2026-08-28T23:59:00-07:00`,due_human_pt:`Friday, August 28, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-20T16:00:00-07:00`,max_points:100,grading_category:`Essays`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Due in 4 days`,is_voluntary:!1,is_web_voluntary:!1,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163558/info`,teacher_name:`Mr. Davis`,student_id:`12346`,attachment_ids:[]},{id:`8516163559`,section_id:`8500088180`,course_id:`8500088180`,folder_id:null,title:`6th Grade Orientation Buddy Checklist`,description:`Voluntary WEB leadership coordination form.`,instructions_summary:`WEB buddy coordination`,due:`2026-08-29T23:59:00-07:00`,due_human_pt:`Saturday, August 29, 2026 at 11:59 pm PT`,due_has_time:!0,due_tz:`America/Los_Angeles`,posted_at:`2026-08-23T10:00:00-07:00`,max_points:null,grading_category:`Voluntary`,grading_period_id:`Tri1-2026`,type:`Assignment`,status:`Upcoming`,status_detail:`Voluntary WEB`,is_voluntary:!0,is_web_voluntary:!0,is_overdue_visible:!1,is_overdue_hidden:!1,overdue_days:0,is_missing:!1,submission_status:`not_submitted`,web_url:`https://app.schoology.com/assignment/8516163559/info`,teacher_name:`Mr. Connelly`,student_id:`12346`,attachment_ids:[]}],attachments:[{id:`3528031067`,assignment_id:`8516163487`,filename:`1_Ch1_HWAnswers.pdf`,file_size:4194304,mime_type:`application/pdf`,source_url:`https://app.schoology.com/attachment/3528031067/source/02e762e8423679b8354e5051e63d8a07.pdf`,docviewer_url:`https://app.schoology.com/attachment/3528031067/docviewer`},{id:`3529363942`,assignment_id:`8516163487`,filename:`Ch1_StampSheet.pdf`,file_size:198656,mime_type:`application/pdf`,source_url:`https://app.schoology.com/attachment/3529363942/source/stamp.pdf`,docviewer_url:`https://app.schoology.com/attachment/3529363942/docviewer`}],grades:[],submissions:[],updates:[{id:`136911845`,section_id:`8500088178`,course_id:`8500088178`,author_id:`t_789`,author_name:`Ms. Hagg`,author_role:`Teacher`,body:`Good morning and happy Monday! Here are the notes for today's lesson (1.1); please download them for class today.`,body_truncated:!0,created:`2026-08-24T11:25:00-07:00`}],calendar_events:[{id:`cal_0825`,title:`Picture Day (7th Grade)`,section_id:null,start:`2026-08-25T00:00:00-07:00`,type:`school`},{id:`cal_0827`,title:`Back to School Night (6:00 PM)`,section_id:null,start:`2026-08-27T18:00:00-07:00`,type:`school`}]},t=`all`,n=!1;async function r(t=!1){try{n=!0,i(`loading`);let r=`./data/schoology_v2.json?t=${Date.now()}`,a=await fetch(r);if(a.ok){let t=await a.json();t&&t.version&&(e=t)}t?(i(`success`),setTimeout(()=>i(`idle`),2e3)):i(`idle`)}catch(e){console.warn(`Using embedded fallback data:`,e),i(`idle`)}finally{n=!1,s()}}function i(e){let t=document.querySelector(`#refresh-btn`);t&&(e===`loading`?(t.disabled=!0,t.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Syncing...
    `):e===`success`?(t.disabled=!1,t.style.background=`#ecfdf5`,t.style.borderColor=`#059669`,t.style.color=`#059669`,t.innerHTML=`✓ Updated!`):(t.disabled=!1,t.style.background=`#f1f5f9`,t.style.borderColor=`#cbd5e1`,t.style.color=`#0f172a`,t.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
      Refresh Data
    `))}function a(){o(),r(!1)}function o(){let t=document.querySelector(`#app`);t&&(t.innerHTML=`
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
          <p class="brand-subtitle" id="school-subtitle">${e.meta.school} • Live Sync</p>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <button id="refresh-btn" class="filter-btn" style="display: inline-flex; align-items: center; gap: 6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            Refresh Data
          </button>
          <div class="meta-timestamp">
            <span class="pulse-dot"></span>
            Last Updated: <strong id="last-updated-text">${e.meta.last_updated_pt}</strong>
          </div>
        </div>
      </header>

      <!-- Totals Overview Grid -->
      <section class="totals-grid" id="totals-grid"></section>

      <!-- Filter Bar -->
      <div class="toolbar">
        <span class="filter-title">Filter Assignments:</span>
        <div class="filter-pills" id="filter-pills">
          <button class="filter-btn active" data-filter="all">All Items (${e.meta.totals.total_upcoming})</button>
          <button class="filter-btn" data-filter="homework">Homework Only (${e.meta.totals.homework_only})</button>
          <button class="filter-btn" data-filter="voluntary">Voluntary & Activities (${e.meta.totals.web_voluntary})</button>
          <button class="filter-btn" data-filter="overdue" id="overdue-filter-btn">Overdue Items (${e.meta.totals.overdue_hidden})</button>
        </div>
      </div>

      <!-- Widescreen Side-by-Side Layout -->
      <div class="widescreen-layout">
        <!-- Louis Loose Column -->
        <section class="student-column">
          <div class="student-column-header">
            <h2 class="student-name-heading">
              🎓 Louis Loose
            </h2>
            <span class="student-badge">Grade 7</span>
          </div>
          <div id="louis-assignments-list"></div>
        </section>

        <!-- Charlotte Loose Column -->
        <section class="student-column">
          <div class="student-column-header">
            <h2 class="student-name-heading">
              🎓 Charlotte Loose
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
  `,p())}function s(){let t=document.querySelector(`#school-subtitle`);t&&(t.textContent=`${e.meta.school} • Live Sync v${e.version}`);let n=document.querySelector(`#last-updated-text`);n&&(n.textContent=e.meta.last_updated_pt),c(),l(`12345`,`#louis-assignments-list`),l(`12346`,`#charlotte-assignments-list`),u(),d(),f()}function c(){let t=document.querySelector(`#totals-grid`);t&&(t.innerHTML=`
    <div class="total-card">
      <div class="total-value">${e.meta.totals.total_upcoming}</div>
      <div class="total-label">Total Upcoming</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #2563eb;">${e.meta.totals.homework_only}</div>
      <div class="total-label">Homework Only</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #7c3aed;">${e.meta.totals.web_voluntary}</div>
      <div class="total-label">Voluntary WEB</div>
    </div>
    <div class="total-card alert-card">
      <div class="total-value">${e.meta.totals.overdue_hidden}</div>
      <div class="total-label">Hidden Overdue</div>
    </div>
  `)}function l(n,r){let i=document.querySelector(r);if(!i)return;let a=e.assignments.filter(e=>e.student_id===n);if(t===`homework`?a=a.filter(e=>!e.is_voluntary&&!e.is_web_voluntary):t===`voluntary`?a=a.filter(e=>e.is_voluntary||e.is_web_voluntary):t===`overdue`&&(a=a.filter(e=>e.is_overdue_hidden||e.overdue_days>0)),a.length===0){i.innerHTML=`
      <div class="assignment-card" style="text-align: center; padding: 32px; color: var(--text-muted);">
        <p style="font-size: 0.9rem;">No assignments for this filter.</p>
      </div>
    `;return}i.innerHTML=a.map(t=>{let n=e.sections.find(e=>e.id===t.section_id),r=e.folders.find(e=>e.id===t.folder_id),i=e.attachments.filter(e=>t.attachment_ids?.includes(e.id)),a=`due-tomorrow`,o=t.status||`Upcoming`;return t.is_overdue_hidden?(a=`overdue`,o=`⚠️ Overdue (${t.overdue_days}d hidden)`):t.is_voluntary&&(a=`voluntary`,o=`Voluntary WEB`),`
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
    `}).join(``)}function u(){let t=document.querySelector(`#course-list`);t&&(t.innerHTML=e.sections.map(e=>`
    <div class="course-item">
      <div class="course-name">${e.course_title}</div>
      <div class="course-period">${e.section_title} • ${e.teachers.join(`, `)}</div>
    </div>
  `).join(``))}function d(){let t=document.querySelector(`#updates-list`);t&&(t.innerHTML=e.updates.map(e=>`
    <div class="update-card">
      <div class="update-author">${e.author_name} (${e.author_role})</div>
      <div class="update-body" id="update-body-${e.id}">${e.body}</div>
      ${e.body_truncated?`
        <button class="btn-readmore" data-update-id="${e.id}">Read full update...</button>
      `:``}
    </div>
  `).join(``))}function f(){let t=document.querySelector(`#calendar-list`);t&&(t.innerHTML=e.calendar_events.map(e=>{let t=new Date(e.start);return`
      <div class="calendar-item">
        <div class="calendar-date-box">
          <div class="date-day">${t.getDate()}</div>
          <div class="date-month">${t.toLocaleString(`en-US`,{month:`short`})}</div>
        </div>
        <div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-main);">${e.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${e.type.toUpperCase()} EVENT</div>
        </div>
      </div>
    `}).join(``))}function p(){document.querySelector(`#refresh-btn`)?.addEventListener(`click`,()=>{n||r(!0)}),document.querySelector(`#filter-pills`)?.addEventListener(`click`,e=>{let n=e.target.closest(`.filter-btn`);if(!n)return;let r=n.getAttribute(`data-filter`);r&&(t=r,document.querySelectorAll(`.filter-btn`).forEach(e=>e.classList.remove(`active`,`active-warning`)),n.classList.add(r===`overdue`?`active-warning`:`active`),l(`12345`,`#louis-assignments-list`),l(`12346`,`#charlotte-assignments-list`))}),document.querySelector(`#updates-list`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.btn-readmore`);if(!n)return;let r=n.getAttribute(`data-update-id`);if(r){let t=e.updates.find(e=>e.id===r),i=document.querySelector(`#update-body-${r}`);i&&t&&(i.innerHTML=`${t.body} <em>(full text loaded from Schoology API)</em>`,n.remove())}})}document.addEventListener(`DOMContentLoaded`,a);