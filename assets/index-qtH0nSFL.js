(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={version:`2.0`,meta:{last_updated:`2026-08-25T01:31:50Z`,last_updated_pt:`2026-08-24T18:31:50-07:00`,timezone:`America/Los_Angeles`,source:`schoology_parent_live_website_only`,parent_account:`loo*****@gmail.com`,parent_name:`J**** L****`,school:`Hillview Middle School`,children_verified:[`Charlotte L****`,`Louis L****`],totals:{total_upcoming:12,homework_only:12,web_voluntary:0,overdue_visible:0,overdue_hidden:0,charlotte_count:6,louis_count:6},scientific_method_found:!1,note:`Clean scrape – only website-visible assignments, no hallucinated scientific method`},users:[{id:`charlotte`,name_display:`Charlotte L****`,name_first:`Charlotte`,name_last:`L****`,role:`Student`,grade_level:`8`,school:`Hillview Middle School`},{id:`louis`,name_display:`Louis L****`,name_first:`Louis`,name_last:`L****`,role:`Student`,grade_level:`7`,school:`Hillview Middle School`},{id:`chad_lesausky`,name_display:`Chad Lesausky`,role:`Teacher`,course:`Science 8`},{id:`james_green`,name_display:`James Green`,role:`Teacher`,course:`Science 7`},{id:`ms_hagg`,name_display:`Ms. Hagg`,role:`Teacher`,course:`Algebra 1`},{id:`mr_rogers`,name_display:`Mr. Rogers`,role:`Teacher`,course:`Social Studies 7`}],courses:[{id:`8500087644`,title:`Algebra 1`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087644`,teacher:`Sayre Dolan`},{id:`8500088701`,title:`Chamber Orchestra`,section:`2(A-B)`,url:`https://app.schoology.com/course/8500088701`},{id:`8500087574`,title:`English Language Arts 8`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500087574`},{id:`8500087635`,title:`Intermediate Dance 7/8`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087635`},{id:`8500087580`,title:`Qu3ST 8`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500087580`},{id:`8500088644`,title:`Science 8`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088644`,teacher:`Chad Lesausky`,materials_status:`There are no materials in this course yet.`},{id:`8500088236`,title:`Social Studies 8`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088236`},{id:`8354061423`,title:`WEB`,section:`Section 1`,url:`https://app.schoology.com/course/8354061423`},{id:`8283152613`,title:`WEB 2027-2028`,section:`Section 1`,url:`https://app.schoology.com/course/8283152613`},{id:`8505069756`,title:`7th Grade - Class of 2028`,section:`Section 1`,url:`https://app.schoology.com/course/8505069756`,org:`Hillview Middle School`},{id:`8500088177`,title:`Algebra 1`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088177`,teacher:`Ms. Hagg`},{id:`8500088933`,title:`English Language Arts 7`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500088933`},{id:`8500087560`,title:`PE 78`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087560`},{id:`8500088936`,title:`Qu3ST 7`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500088936`},{id:`8500087658`,title:`Science 7`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087658`,teacher:`James Green`},{id:`8500088925`,title:`Social Studies 7`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088925`,teacher:`Mr. Rogers`}],sections:[{course_id:`8500087644`,course_title:`Algebra 1`,section_code:`5(A-B)`,teachers:[`Sayre Dolan`],url:`https://app.schoology.com/course/8500087644`},{course_id:`8500088701`,course_title:`Chamber Orchestra`,section_code:`2(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088701`},{course_id:`8500087574`,course_title:`English Language Arts 8`,section_code:`3(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087574`},{course_id:`8500087635`,course_title:`Intermediate Dance 7/8`,section_code:`1(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087635`},{course_id:`8500087580`,course_title:`Qu3ST 8`,section_code:`7(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087580`},{course_id:`8500088644`,course_title:`Science 8`,section_code:`6(A-B)`,teachers:[`Chad Lesausky`],url:`https://app.schoology.com/course/8500088644`},{course_id:`8500088236`,course_title:`Social Studies 8`,section_code:`4(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088236`},{course_id:`8354061423`,course_title:`WEB`,section_code:`Section 1`,teachers:[],url:`https://app.schoology.com/course/8354061423`},{course_id:`8283152613`,course_title:`WEB 2027-2028`,section_code:`Section 1`,teachers:[],url:`https://app.schoology.com/course/8283152613`},{course_id:`8505069756`,course_title:`7th Grade - Class of 2028`,section_code:`Section 1`,teachers:[],url:`https://app.schoology.com/course/8505069756`},{course_id:`8500088177`,course_title:`Algebra 1`,section_code:`4(A-B)`,teachers:[`Ms. Hagg`],url:`https://app.schoology.com/course/8500088177`},{course_id:`8500088933`,course_title:`English Language Arts 7`,section_code:`3(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088933`},{course_id:`8500087560`,course_title:`PE 78`,section_code:`1(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087560`},{course_id:`8500088936`,course_title:`Qu3ST 7`,section_code:`7(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088936`},{course_id:`8500087658`,course_title:`Science 7`,section_code:`5(A-B)`,teachers:[`James Green`],url:`https://app.schoology.com/course/8500087658`},{course_id:`8500088925`,course_title:`Social Studies 7`,section_code:`6(A-B)`,teachers:[`Mr. Rogers`],url:`https://app.schoology.com/course/8500088925`}],assignments:[{id:`live_8500088236_1`,title:`Flora/Fauna Assignment`,course_id:`8500088236`,course_title:`Social Studies 8: 4(A-B)`,child:`Charlotte L****`,due_iso:`2026-08-25T08:00:00`,due_human_pt:`2026-08-25T08:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8354061423_2`,title:`Back to School Night Help`,course_id:`8354061423`,course_title:`WEB: Section 1`,child:`Charlotte L****`,due_iso:`2026-08-26T17:45:00`,due_human_pt:`2026-08-26T17:45:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088236_3`,title:`My-Story`,course_id:`8500088236`,course_title:`Social Studies 8`,child:`Charlotte L****`,due_iso:`2026-09-01T17:00:00`,due_human_pt:`2026-09-01T17:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8283152613_4`,title:`Application Status`,course_id:`8283152613`,course_title:`WEB 2027-2028`,child:`Charlotte L****`,due_iso:`2027-03-26`,due_human_pt:`2027-03-26`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8283152613_5`,title:`Teacher Recommendation`,course_id:`8283152613`,course_title:`WEB 2027-2028`,child:`Charlotte L****`,due_iso:null,due_human_pt:null,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8283152613_6`,title:`WEB Application`,course_id:`8283152613`,course_title:`WEB 2027-2028`,child:`Charlotte L****`,due_iso:null,due_human_pt:null,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088925_7`,title:`Bootcamp #2: L2 "iPad Health"`,course_id:`8500088925`,course_title:`Social Studies 7: 6(A-B)`,child:`Louis L****`,due_iso:`2026-08-25T08:30:00`,due_human_pt:`2026-08-25T08:30:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088177_8`,title:`1.1 Notes and HW`,course_id:`8500088177`,course_title:`Algebra 1: 4(A-B)`,child:`Louis L****`,due_iso:`2026-08-25T23:59:00`,due_human_pt:`2026-08-25T23:59:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088177_9`,title:`10 Things About Me`,course_id:`8500088177`,course_title:`Algebra 1: 4(A-B)`,child:`Louis L****`,due_iso:`2026-08-27T23:59:00`,due_human_pt:`2026-08-27T23:59:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088933_10`,title:`All About Me Scholar Survey for Mr. Rogers and Ms. Ross DUE ELECTRONICALLY BY 3:00pm`,course_id:`8500088933`,course_title:`English Language Arts 7: 3(A-B)`,child:`Louis L****`,due_iso:`2026-08-28T15:00:00`,due_human_pt:`2026-08-28T15:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088933_11`,title:`Summer Reading Due IN CLASS`,course_id:`8500088933`,course_title:`English Language Arts 7: 3(A-B)`,child:`Louis L****`,due_iso:`2026-08-28T15:00:00`,due_human_pt:`2026-08-28T15:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500087658_12`,title:`Who am I Project-It is note Homework (see instructions below)`,course_id:`8500087658`,course_title:`Science 7: 5(A-B)`,child:`Louis L****`,due_iso:`2026-08-25T15:05:00`,due_human_pt:`2026-08-25T15:05:00`,source:`Materials`,status:`Upcoming`,teacher:`James Green`}],assignments_visible_now:[{child:`Charlotte L****`,title:`Flora/Fauna Assignment`,due:`2026-08-25T08:00:00`,course:`Social Studies 8: 4(A-B)`,course_id:`8500088236`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`Back to School Night Help`,due:`2026-08-26T17:45:00`,course:`WEB: Section 1`,course_id:`8354061423`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`My-Story`,due:`2026-09-01T17:00:00`,course:`Social Studies 8`,course_id:`8500088236`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`Application Status`,due:`2027-03-26`,course:`WEB 2027-2028`,course_id:`8283152613`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`Teacher Recommendation`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`WEB Application`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`Bootcamp #2: L2 "iPad Health"`,due:`2026-08-25T08:30:00`,course:`Social Studies 7: 6(A-B)`,course_id:`8500088925`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`1.1 Notes and HW`,due:`2026-08-25T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`10 Things About Me`,due:`2026-08-27T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`All About Me Scholar Survey for Mr. Rogers and Ms. Ross DUE ELECTRONICALLY BY 3:00pm`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`Summer Reading Due IN CLASS`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`Who am I Project-It is note Homework (see instructions below)`,due:`2026-08-25T15:05:00`,course:`Science 7: 5(A-B)`,course_id:`8500087658`,teacher:`James Green`,source:`Materials`}],charlotte:{display_name:`Charlotte L****`,grade:`8th`,courses_seen:[{id:`8500087644`,title:`Algebra 1`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087644`,teacher:`Sayre Dolan`},{id:`8500088701`,title:`Chamber Orchestra`,section:`2(A-B)`,url:`https://app.schoology.com/course/8500088701`},{id:`8500087574`,title:`English Language Arts 8`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500087574`},{id:`8500087635`,title:`Intermediate Dance 7/8`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087635`},{id:`8500087580`,title:`Qu3ST 8`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500087580`},{id:`8500088644`,title:`Science 8`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088644`,teacher:`Chad Lesausky`,materials_status:`There are no materials in this course yet.`},{id:`8500088236`,title:`Social Studies 8`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088236`},{id:`8354061423`,title:`WEB`,section:`Section 1`,url:`https://app.schoology.com/course/8354061423`},{id:`8283152613`,title:`WEB 2027-2028`,section:`Section 1`,url:`https://app.schoology.com/course/8283152613`}],todo_upcoming:[{title:`Flora/Fauna Assignment`,due:`2026-08-25T08:00:00`,course:`Social Studies 8: 4(A-B)`,course_id:`8500088236`},{title:`Back to School Night Help`,due:`2026-08-26T17:45:00`,course:`WEB: Section 1`,course_id:`8354061423`},{title:`My-Story`,due:`2026-09-01T17:00:00`,course:`Social Studies 8`,course_id:`8500088236`},{title:`Application Status`,due:`2027-03-26`,course:`WEB 2027-2028`,course_id:`8283152613`},{title:`Teacher Recommendation`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`},{title:`WEB Application`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`}]},louis:{display_name:`Louis L****`,grade:`7th`,courses_seen:[{id:`8505069756`,title:`7th Grade - Class of 2028`,section:`Section 1`,url:`https://app.schoology.com/course/8505069756`,org:`Hillview Middle School`},{id:`8500088177`,title:`Algebra 1`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088177`,teacher:`Ms. Hagg`},{id:`8500088701`,title:`Chamber Orchestra`,section:`2(A-B)`,url:`https://app.schoology.com/course/8500088701`},{id:`8500088933`,title:`English Language Arts 7`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500088933`},{id:`8500087560`,title:`PE 78`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087560`},{id:`8500088936`,title:`Qu3ST 7`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500088936`},{id:`8500087658`,title:`Science 7`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087658`,teacher:`James Green`},{id:`8500088925`,title:`Social Studies 7`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088925`,teacher:`Mr. Rogers`}],todo_upcoming:[{title:`Bootcamp #2: L2 "iPad Health"`,due:`2026-08-25T08:30:00`,course:`Social Studies 7: 6(A-B)`,course_id:`8500088925`},{title:`1.1 Notes and HW`,due:`2026-08-25T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`},{title:`10 Things About Me`,due:`2026-08-27T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`},{title:`All About Me Scholar Survey for Mr. Rogers and Ms. Ross DUE ELECTRONICALLY BY 3:00pm`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`},{title:`Summer Reading Due IN CLASS`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`}]},scientific_method_check:{checked_courses:[`8500088644 Science 8: 6A-B Chad Lesausky`,`8500087658 Science 7: 5A-B James Green`],found:!1,hallucinated_ids_not_seen:[`8500088179`,`8500088183`],confirmation:`No assignments with titles containing 'Scientific Method', 'Student Journal Entry 1', 'Lab Report' were visible in To-Do UPCOMING or Materials pages for either child at time of scrape.`}},t=`all`,n=!1,r=`schoology_completed_assignments_v1`,i=`schoology_assignment_notes_v1`,a=new Set,o={},s=null;function c(){try{let e=localStorage.getItem(r);if(e){let t=JSON.parse(e);Array.isArray(t)&&(a=new Set(t))}let t=localStorage.getItem(i);t&&(o=JSON.parse(t)||{})}catch(e){console.warn(`Could not read state from localStorage:`,e)}}function l(){try{localStorage.setItem(r,JSON.stringify(Array.from(a))),localStorage.setItem(i,JSON.stringify(o))}catch(e){console.warn(`Could not save state to localStorage:`,e)}}function u(e){a.has(e)?a.delete(e):(a.add(e),o[e]||(s=e)),l(),g()}function d(e,t){let n=t.trim();n?o[e]=n:delete o[e],s=null,l(),g()}async function f(t=!1){try{n=!0,p(`loading`);let r=`./data/schoology_v2.json?t=${Date.now()}`,i=await fetch(r);if(i.ok){let t=await i.json();t&&t.version&&(e=t)}t?(p(`success`),setTimeout(()=>p(`idle`),2e3)):p(`idle`)}catch(e){console.warn(`Using embedded fallback data:`,e),p(`idle`)}finally{n=!1,g()}}function p(e){let t=document.querySelector(`#refresh-btn`);t&&(e===`loading`?(t.disabled=!0,t.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Syncing...
    `):e===`success`?(t.disabled=!1,t.style.background=`#ecfdf5`,t.style.borderColor=`#059669`,t.style.color=`#059669`,t.innerHTML=`✓ Updated!`):(t.disabled=!1,t.style.background=`#f1f5f9`,t.style.borderColor=`#cbd5e1`,t.style.color=`#0f172a`,t.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
      Refresh Data
    `))}function m(){c(),h(),f(!1)}function h(){let t=document.querySelector(`#app`);t&&(t.innerHTML=`
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
          <button class="filter-btn" data-filter="completed" id="completed-filter-btn">Completed (0)</button>
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
  `,S())}function g(){let t=document.querySelector(`#school-subtitle`);t&&(t.textContent=`${e.meta.school} • Live Sync v${e.version}`);let n=document.querySelector(`#last-updated-text`);n&&(n.textContent=e.meta.last_updated_pt);let r=document.querySelector(`#completed-filter-btn`);r&&(r.textContent=`Completed (${a.size})`),_(),v(`12345`,`#louis-assignments-list`),v(`12346`,`#charlotte-assignments-list`),y(),b(),x()}function _(){let t=document.querySelector(`#totals-grid`);if(!t)return;let n=e.assignments.filter(e=>!a.has(e.id)).length,r=e.assignments.filter(e=>e.is_overdue_hidden&&!a.has(e.id)).length;t.innerHTML=`
    <div class="total-card">
      <div class="total-value">${n}</div>
      <div class="total-label">Pending Upcoming</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #2563eb;">${e.meta.totals.homework_only}</div>
      <div class="total-label">Homework Only</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #059669;">${a.size}</div>
      <div class="total-label">Marked Completed</div>
    </div>
    <div class="total-card alert-card">
      <div class="total-value">${r}</div>
      <div class="total-label">Hidden Overdue</div>
    </div>
  `}function v(n,r){let i=document.querySelector(r);if(!i)return;let c=e.assignments.filter(e=>e.student_id===n);if(t===`homework`?c=c.filter(e=>!e.is_voluntary&&!e.is_web_voluntary):t===`voluntary`?c=c.filter(e=>e.is_voluntary||e.is_web_voluntary):t===`overdue`?c=c.filter(e=>(e.is_overdue_hidden||e.overdue_days>0)&&!a.has(e.id)):t===`completed`&&(c=c.filter(e=>a.has(e.id))),c.length===0){i.innerHTML=`
      <div class="assignment-card" style="text-align: center; padding: 32px; color: var(--text-muted);">
        <p style="font-size: 0.9rem;">No assignments for this filter.</p>
      </div>
    `;return}i.innerHTML=c.map(t=>{let n=e.sections.find(e=>e.id===t.section_id),r=e.folders.find(e=>e.id===t.folder_id),i=e.attachments.filter(e=>t.attachment_ids?.includes(e.id)),c=a.has(t.id),l=o[t.id]||``,u=s===t.id,d=`due-tomorrow`,f=t.status||`Upcoming`;return c?(d=`completed-badge`,f=`✓ Completed`):t.is_overdue_hidden?(d=`overdue`,f=`⚠️ Overdue (${t.overdue_days}d hidden)`):t.is_voluntary&&(d=`voluntary`,f=`Voluntary WEB`),`
      <article class="assignment-card ${c?`is-completed`:``} ${t.is_overdue_hidden&&!c?`overdue-hidden`:``}">
        <div class="card-top">
          <div>
            <span class="course-badge">
              ${n?n.course_title:`Course`}
            </span>
            ${r?`<span class="folder-path">📁 ${r.title}</span>`:``}
          </div>
          <span class="status-badge ${d}">${f}</span>
        </div>

        <h3 class="assignment-title">${t.title}</h3>
        <p class="assignment-desc">${t.instructions_summary||t.description}</p>

        <!-- Student Note Display / Form -->
        ${l&&!u?`
          <div class="student-note-display">
            <span>💬 <span class="student-note-text">"${l}"</span></span>
            <button class="btn-edit-note" data-assignment-id="${t.id}">Edit Note</button>
          </div>
        `:``}

        ${u?`
          <div class="note-input-box">
            <input type="text" class="note-text-field" id="note-input-${t.id}" value="${l}" placeholder="Add a note e.g. 'Done on paper', 'Submitted in class'..." />
            <button class="btn-save-note" data-assignment-id="${t.id}">Save Note</button>
          </div>
        `:``}

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
          <div style="display: flex; align-items: center; gap: 8px;">
            ${!l&&!u?`
              <button class="btn-add-note" data-assignment-id="${t.id}">+ Note</button>
            `:``}
            <button class="btn-complete-toggle ${c?`is-checked`:``}" data-assignment-id="${t.id}">
              ${c?`✓ Done`:`◯ Mark Done`}
            </button>
          </div>
        </div>
      </article>
    `}).join(``)}function y(){let t=document.querySelector(`#course-list`);t&&(t.innerHTML=e.sections.map(e=>`
    <div class="course-item">
      <div class="course-name">${e.course_title}</div>
      <div class="course-period">${e.section_title} • ${e.teachers.join(`, `)}</div>
    </div>
  `).join(``))}function b(){let t=document.querySelector(`#updates-list`);t&&(t.innerHTML=e.updates.map(e=>`
    <div class="update-card">
      <div class="update-author">${e.author_name} (${e.author_role})</div>
      <div class="update-body" id="update-body-${e.id}">${e.body}</div>
      ${e.body_truncated?`
        <button class="btn-readmore" data-update-id="${e.id}">Read full update...</button>
      `:``}
    </div>
  `).join(``))}function x(){let t=document.querySelector(`#calendar-list`);t&&(t.innerHTML=e.calendar_events.map(e=>{let t=new Date(e.start);return`
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
    `}).join(``))}function S(){document.querySelector(`#refresh-btn`)?.addEventListener(`click`,()=>{n||f(!0)}),document.querySelector(`#filter-pills`)?.addEventListener(`click`,e=>{let n=e.target.closest(`.filter-btn`);if(!n)return;let r=n.getAttribute(`data-filter`);r&&(t=r,document.querySelectorAll(`.filter-btn`).forEach(e=>e.classList.remove(`active`,`active-warning`,`active-success`)),r===`overdue`?n.classList.add(`active-warning`):r===`completed`?n.classList.add(`active-success`):n.classList.add(`active`),v(`12345`,`#louis-assignments-list`),v(`12346`,`#charlotte-assignments-list`))}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.btn-complete-toggle`);if(t){let e=t.getAttribute(`data-assignment-id`);e&&u(e);return}let n=e.target.closest(`.btn-add-note`)||e.target.closest(`.btn-edit-note`);if(n){let e=n.getAttribute(`data-assignment-id`);e&&(s=e,g(),setTimeout(()=>{document.querySelector(`#note-input-${e}`)?.focus()},50));return}let r=e.target.closest(`.btn-save-note`);if(r){let e=r.getAttribute(`data-assignment-id`);if(e){let t=document.querySelector(`#note-input-${e}`);t&&d(e,t.value)}return}}),document.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let t=e.target;if(t&&t.classList.contains(`note-text-field`)){let e=t.id.replace(`note-input-`,``);e&&d(e,t.value)}}}),document.querySelector(`#updates-list`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.btn-readmore`);if(!n)return;let r=n.getAttribute(`data-update-id`);if(r){let t=e.updates.find(e=>e.id===r),i=document.querySelector(`#update-body-${r}`);i&&t&&(i.innerHTML=`${t.body} <em>(full text loaded from Schoology API)</em>`,n.remove())}})}document.addEventListener(`DOMContentLoaded`,m);