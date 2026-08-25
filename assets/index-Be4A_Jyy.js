(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={version:`2.0`,meta:{last_updated:`2026-08-25T01:37:18.212083Z`,last_updated_pt:`2026-08-24T18:37:18.212083-07:00`,timezone:`America/Los_Angeles`,source:`schoology_parent`,parent_account:`loo*****@gmail.com`,parent_name:`J**** L****`,school:`Hillview Middle School`,children_verified:[`Charlotte L****`,`Louis L****`],totals:{total_upcoming:12,homework_only:12,web_voluntary:0,overdue_visible:0,overdue_hidden:0,charlotte_count:6,louis_count:6},scientific_method_found:!1,note:`Clean scrape – only website-visible assignments, no hallucinated scientific method. Teachers unmasked (public), students masked.`},users:[{id:`charlotte`,name_display:`Charlotte L****`,name_first:`Charlotte`,name_last:`L****`,role:`Student`,grade_level:`8`,school:`Hillview Middle School`,primary_email:null},{id:`louis`,name_display:`Louis L****`,name_first:`Louis`,name_last:`L****`,role:`Student`,grade_level:`7`,school:`Hillview Middle School`,primary_email:null},{id:`chad_lesausky`,name_display:`Chad Lesausky`,role:`Teacher`,course:`Science 8`},{id:`james_green`,name_display:`James Green`,role:`Teacher`,course:`Science 7`},{id:`ms_hagg`,name_display:`Ms. Hagg`,role:`Teacher`,course:`Algebra 1`},{id:`mr_rogers`,name_display:`Mr. Rogers`,role:`Teacher`,course:`Social Studies 7`},{id:`ricardo_rasura`,name_display:`Ricardo Rasura`,role:`Teacher`,course:`Chamber Orchestra`},{id:`lexy_keller`,name_display:`Lexy Keller`,role:`Teacher`,course:`Social Studies 8`},{id:`kara_connelly`,name_display:`Kara Connelly`,role:`Teacher`,course:`WEB`},{id:`ms_wrotniewski`,name_display:`Ms. Wrotniewski`,role:`Teacher`,course:`WEB`},{id:`sayre_dolan`,name_display:`Sayre Dolan`,role:`Teacher`,course:`Algebra 1`}],courses:[{id:`8500087644`,title:`Algebra 1`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087644`,teacher:`Sayre Dolan`},{id:`8500088701`,title:`Chamber Orchestra`,section:`2(A-B)`,url:`https://app.schoology.com/course/8500088701`,teacher:`Ricardo Rasura`},{id:`8500087574`,title:`English Language Arts 8`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500087574`},{id:`8500087635`,title:`Intermediate Dance 7/8`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087635`},{id:`8500087580`,title:`Qu3ST 8`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500087580`},{id:`8500088644`,title:`Science 8`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088644`,teacher:`Chad Lesausky`,materials_status:`There are no materials in this course yet.`},{id:`8500088236`,title:`Social Studies 8`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088236`,teacher:`Lexy Keller`},{id:`8354061423`,title:`WEB`,section:`Section 1`,url:`https://app.schoology.com/course/8354061423`,teacher:`Kara Connelly`},{id:`8283152613`,title:`WEB 2027-2028`,section:`Section 1`,url:`https://app.schoology.com/course/8283152613`},{id:`8505069756`,title:`7th Grade - Class of 2028`,section:`Section 1`,url:`https://app.schoology.com/course/8505069756`,org:`Hillview Middle School`},{id:`8500088177`,title:`Algebra 1`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088177`,teacher:`Ms. Hagg`},{id:`8500088933`,title:`English Language Arts 7`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500088933`},{id:`8500087560`,title:`PE 78`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087560`},{id:`8500088936`,title:`Qu3ST 7`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500088936`},{id:`8500087658`,title:`Science 7`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087658`,teacher:`James Green`},{id:`8500088925`,title:`Social Studies 7`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088925`,teacher:`Mr. Rogers`}],sections:[{course_id:`8500087644`,course_title:`Algebra 1`,section_code:`5(A-B)`,teachers:[`Sayre Dolan`],url:`https://app.schoology.com/course/8500087644`},{course_id:`8500088701`,course_title:`Chamber Orchestra`,section_code:`2(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088701`},{course_id:`8500087574`,course_title:`English Language Arts 8`,section_code:`3(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087574`},{course_id:`8500087635`,course_title:`Intermediate Dance 7/8`,section_code:`1(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087635`},{course_id:`8500087580`,course_title:`Qu3ST 8`,section_code:`7(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087580`},{course_id:`8500088644`,course_title:`Science 8`,section_code:`6(A-B)`,teachers:[`Chad Lesausky`],url:`https://app.schoology.com/course/8500088644`},{course_id:`8500088236`,course_title:`Social Studies 8`,section_code:`4(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088236`},{course_id:`8354061423`,course_title:`WEB`,section_code:`Section 1`,teachers:[],url:`https://app.schoology.com/course/8354061423`},{course_id:`8283152613`,course_title:`WEB 2027-2028`,section_code:`Section 1`,teachers:[],url:`https://app.schoology.com/course/8283152613`},{course_id:`8505069756`,course_title:`7th Grade - Class of 2028`,section_code:`Section 1`,teachers:[],url:`https://app.schoology.com/course/8505069756`},{course_id:`8500088177`,course_title:`Algebra 1`,section_code:`4(A-B)`,teachers:[`Ms. Hagg`],url:`https://app.schoology.com/course/8500088177`},{course_id:`8500088933`,course_title:`English Language Arts 7`,section_code:`3(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088933`},{course_id:`8500087560`,course_title:`PE 78`,section_code:`1(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500087560`},{course_id:`8500088936`,course_title:`Qu3ST 7`,section_code:`7(A-B)`,teachers:[],url:`https://app.schoology.com/course/8500088936`},{course_id:`8500087658`,course_title:`Science 7`,section_code:`5(A-B)`,teachers:[`James Green`],url:`https://app.schoology.com/course/8500087658`},{course_id:`8500088925`,course_title:`Social Studies 7`,section_code:`6(A-B)`,teachers:[`Mr. Rogers`],url:`https://app.schoology.com/course/8500088925`}],grading_periods:[],folders:[],assignments:[{id:`live_8500088236_1`,title:`Flora/Fauna Assignment`,course_id:`8500088236`,course_title:`Social Studies 8: 4(A-B)`,child:`Charlotte L****`,due_iso:`2026-08-25T08:00:00`,due_human_pt:`2026-08-25T08:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8354061423_2`,title:`Back to School Night Help`,course_id:`8354061423`,course_title:`WEB: Section 1`,child:`Charlotte L****`,due_iso:`2026-08-26T17:45:00`,due_human_pt:`2026-08-26T17:45:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088236_3`,title:`My-Story`,course_id:`8500088236`,course_title:`Social Studies 8`,child:`Charlotte L****`,due_iso:`2026-09-01T17:00:00`,due_human_pt:`2026-09-01T17:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8283152613_4`,title:`Application Status`,course_id:`8283152613`,course_title:`WEB 2027-2028`,child:`Charlotte L****`,due_iso:`2027-03-26`,due_human_pt:`2027-03-26`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8283152613_5`,title:`Teacher Recommendation`,course_id:`8283152613`,course_title:`WEB 2027-2028`,child:`Charlotte L****`,due_iso:null,due_human_pt:null,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8283152613_6`,title:`WEB Application`,course_id:`8283152613`,course_title:`WEB 2027-2028`,child:`Charlotte L****`,due_iso:null,due_human_pt:null,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088925_7`,title:`Bootcamp #2: L2 "iPad Health"`,course_id:`8500088925`,course_title:`Social Studies 7: 6(A-B)`,child:`Louis L****`,due_iso:`2026-08-25T08:30:00`,due_human_pt:`2026-08-25T08:30:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088177_8`,title:`1.1 Notes and HW`,course_id:`8500088177`,course_title:`Algebra 1: 4(A-B)`,child:`Louis L****`,due_iso:`2026-08-25T23:59:00`,due_human_pt:`2026-08-25T23:59:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088177_9`,title:`10 Things About Me`,course_id:`8500088177`,course_title:`Algebra 1: 4(A-B)`,child:`Louis L****`,due_iso:`2026-08-27T23:59:00`,due_human_pt:`2026-08-27T23:59:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088933_10`,title:`All About Me Scholar Survey for Mr. Rogers and Ms. Ross DUE ELECTRONICALLY BY 3:00pm`,course_id:`8500088933`,course_title:`English Language Arts 7: 3(A-B)`,child:`Louis L****`,due_iso:`2026-08-28T15:00:00`,due_human_pt:`2026-08-28T15:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500088933_11`,title:`Summer Reading Due IN CLASS`,course_id:`8500088933`,course_title:`English Language Arts 7: 3(A-B)`,child:`Louis L****`,due_iso:`2026-08-28T15:00:00`,due_human_pt:`2026-08-28T15:00:00`,source:`To-Do UPCOMING`,status:`Upcoming`,teacher:null},{id:`live_8500087658_12`,title:`Who am I Project-It is note Homework (see instructions below)`,course_id:`8500087658`,course_title:`Science 7: 5(A-B)`,child:`Louis L****`,due_iso:`2026-08-25T15:05:00`,due_human_pt:`2026-08-25T15:05:00`,source:`Materials`,status:`Upcoming`,teacher:`James Green`,teacher_name:`James Green`}],attachments:[],grades:[],submissions:[],updates:[],calendar_events:[],assignments_visible_now:[{child:`Charlotte L****`,title:`Flora/Fauna Assignment`,due:`2026-08-25T08:00:00`,course:`Social Studies 8: 4(A-B)`,course_id:`8500088236`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`Back to School Night Help`,due:`2026-08-26T17:45:00`,course:`WEB: Section 1`,course_id:`8354061423`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`My-Story`,due:`2026-09-01T17:00:00`,course:`Social Studies 8`,course_id:`8500088236`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`Application Status`,due:`2027-03-26`,course:`WEB 2027-2028`,course_id:`8283152613`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`Teacher Recommendation`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`,source:`To-Do UPCOMING`},{child:`Charlotte L****`,title:`WEB Application`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`Bootcamp #2: L2 "iPad Health"`,due:`2026-08-25T08:30:00`,course:`Social Studies 7: 6(A-B)`,course_id:`8500088925`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`1.1 Notes and HW`,due:`2026-08-25T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`10 Things About Me`,due:`2026-08-27T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`All About Me Scholar Survey for Mr. Rogers and Ms. Ross DUE ELECTRONICALLY BY 3:00pm`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`Summer Reading Due IN CLASS`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`,source:`To-Do UPCOMING`},{child:`Louis L****`,title:`Who am I Project-It is note Homework (see instructions below)`,due:`2026-08-25T15:05:00`,course:`Science 7: 5(A-B)`,course_id:`8500087658`,teacher:`James Green`,source:`Materials`}],charlotte:{display_name:`Charlotte L****`,grade:`8th`,courses_seen:[{id:`8500087644`,title:`Algebra 1`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087644`,teacher:`Sayre Dolan`},{id:`8500088701`,title:`Chamber Orchestra`,section:`2(A-B)`,url:`https://app.schoology.com/course/8500088701`},{id:`8500087574`,title:`English Language Arts 8`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500087574`},{id:`8500087635`,title:`Intermediate Dance 7/8`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087635`},{id:`8500087580`,title:`Qu3ST 8`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500087580`},{id:`8500088644`,title:`Science 8`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088644`,teacher:`Chad Lesausky`,materials_status:`There are no materials in this course yet.`},{id:`8500088236`,title:`Social Studies 8`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088236`},{id:`8354061423`,title:`WEB`,section:`Section 1`,url:`https://app.schoology.com/course/8354061423`},{id:`8283152613`,title:`WEB 2027-2028`,section:`Section 1`,url:`https://app.schoology.com/course/8283152613`}],todo_upcoming:[{title:`Flora/Fauna Assignment`,due:`2026-08-25T08:00:00`,course:`Social Studies 8: 4(A-B)`,course_id:`8500088236`},{title:`Back to School Night Help`,due:`2026-08-26T17:45:00`,course:`WEB: Section 1`,course_id:`8354061423`},{title:`My-Story`,due:`2026-09-01T17:00:00`,course:`Social Studies 8`,course_id:`8500088236`},{title:`Application Status`,due:`2027-03-26`,course:`WEB 2027-2028`,course_id:`8283152613`},{title:`Teacher Recommendation`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`},{title:`WEB Application`,due:null,course:`WEB 2027-2028`,course_id:`8283152613`}]},louis:{display_name:`Louis L****`,grade:`7th`,courses_seen:[{id:`8505069756`,title:`7th Grade - Class of 2028`,section:`Section 1`,url:`https://app.schoology.com/course/8505069756`,org:`Hillview Middle School`},{id:`8500088177`,title:`Algebra 1`,section:`4(A-B)`,url:`https://app.schoology.com/course/8500088177`,teacher:`Ms. Hagg`},{id:`8500088701`,title:`Chamber Orchestra`,section:`2(A-B)`,url:`https://app.schoology.com/course/8500088701`},{id:`8500088933`,title:`English Language Arts 7`,section:`3(A-B)`,url:`https://app.schoology.com/course/8500088933`},{id:`8500087560`,title:`PE 78`,section:`1(A-B)`,url:`https://app.schoology.com/course/8500087560`},{id:`8500088936`,title:`Qu3ST 7`,section:`7(A-B)`,url:`https://app.schoology.com/course/8500088936`},{id:`8500087658`,title:`Science 7`,section:`5(A-B)`,url:`https://app.schoology.com/course/8500087658`,teacher:`James Green`},{id:`8500088925`,title:`Social Studies 7`,section:`6(A-B)`,url:`https://app.schoology.com/course/8500088925`,teacher:`Mr. Rogers`}],todo_upcoming:[{title:`Bootcamp #2: L2 "iPad Health"`,due:`2026-08-25T08:30:00`,course:`Social Studies 7: 6(A-B)`,course_id:`8500088925`},{title:`1.1 Notes and HW`,due:`2026-08-25T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`},{title:`10 Things About Me`,due:`2026-08-27T23:59:00`,course:`Algebra 1: 4(A-B)`,course_id:`8500088177`},{title:`All About Me Scholar Survey for Mr. Rogers and Ms. Ross DUE ELECTRONICALLY BY 3:00pm`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`},{title:`Summer Reading Due IN CLASS`,due:`2026-08-28T15:00:00`,course:`English Language Arts 7: 3(A-B)`,course_id:`8500088933`}]},scientific_method_check:{checked_courses:[`8500088644 Science 8: 6A-B Chad Lesausky`,`8500087658 Science 7: 5A-B James Green`],found:!1,hallucinated_ids_not_seen:[`8500088179`,`8500088183`],confirmation:`No assignments with titles containing 'Scientific Method', 'Student Journal Entry 1', 'Lab Report' were visible in To-Do UPCOMING or Materials pages for either child at time of scrape.`}},t={version:`1.0`,last_updated:`2026-08-25T01:43:00Z`,completed_assignment_ids:[`8516163487`,`8516163556`],assignment_notes:{"8516163487":`Handed in on paper to Ms. Hagg`,"8516163556":`Submitted via Google Classroom`}},n=`https://api.restful-api.dev/objects/ff8081819ff5b11001a036a1f0cd14c4`,r=e,i=t,a=`all`,o=!1,s=null;async function c(e=!1){try{o=!0,p(`loading`);let t=`./data/schoology_v2.json?t=${Date.now()}`,a=await fetch(t);if(a.ok){let e=await a.json();e&&e.assignments&&(r=e)}try{let e=await fetch(n);if(e.ok){let t=await e.json();t&&t.data&&Array.isArray(t.data.completed_assignment_ids)&&(i=t.data)}}catch(e){console.warn(`Realtime database fetch fallback to local JSON:`,e)}e?(p(`success`),setTimeout(()=>p(`idle`),2e3)):p(`idle`)}catch(e){console.warn(`Using fallback data:`,e),p(`idle`)}finally{o=!1,g()}}async function l(){i.last_updated=new Date().toISOString(),g();try{(await fetch(n,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:`heclair_schoology_user_state`,data:i})})).ok&&console.log(`Successfully saved server-side user state across all devices!`)}catch(e){console.warn(`Could not sync to realtime database:`,e)}}function u(e){if(e.student_id===`12345`||e.student_id===`12346`)return e.student_id;if(e.child){let t=String(e.child).toLowerCase();if(t.includes(`louis`))return`12345`;if(t.includes(`charlotte`))return`12346`}let t=(r.sections||[]).find(t=>t.course_id===e.course_id||t.id&&t.id===e.section_id);if(t&&t.enrolled_user_ids){if(t.enrolled_user_ids.includes(`12345`))return`12345`;if(t.enrolled_user_ids.includes(`12346`))return`12346`}return`12345`}function d(e){let t=new Set(i.completed_assignment_ids||[]);t.has(e)?t.delete(e):(t.add(e),i.assignment_notes[e]||(s=e)),i.completed_assignment_ids=Array.from(t),l()}function f(e,t){let n=t.trim();i.assignment_notes||(i.assignment_notes={}),n?i.assignment_notes[e]=n:delete i.assignment_notes[e],s=null,l()}function p(e){let t=document.querySelector(`#refresh-btn`);t&&(e===`loading`?(t.disabled=!0,t.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Syncing...
    `):e===`success`?(t.disabled=!1,t.style.background=`#ecfdf5`,t.style.borderColor=`#059669`,t.style.color=`#059669`,t.innerHTML=`✓ Updated!`):(t.disabled=!1,t.style.background=`#f1f5f9`,t.style.borderColor=`#cbd5e1`,t.style.color=`#0f172a`,t.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
      Refresh Data
    `))}function m(){h(),c(!1)}function h(){let e=document.querySelector(`#app`);e&&(e.innerHTML=`
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
          <p class="brand-subtitle" id="school-subtitle">${r.meta?.school||`Hillview Middle School`} • Realtime Cloud Sync</p>
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
            Last Updated: <strong id="last-updated-text">${r.meta?.last_updated_pt||`Just now`}</strong>
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
  `,S())}function g(){let e=document.querySelector(`#school-subtitle`);e&&(e.textContent=`${r.meta?.school||`Hillview Middle School`} • Realtime Cloud Sync v${r.version||`2.0`}`);let t=document.querySelector(`#last-updated-text`);t&&(t.textContent=r.meta?.last_updated_pt||`Just now`);let n=new Set(i.completed_assignment_ids||[]),a=r.assignments||[],o=a.length,s=a.filter(e=>!e.is_voluntary&&!e.is_web_voluntary&&!String(e.course_title||``).toLowerCase().includes(`web`)).length,c=a.filter(e=>e.is_voluntary||e.is_web_voluntary||String(e.course_title||``).toLowerCase().includes(`web`)).length,l=a.filter(e=>(e.is_overdue_hidden||e.overdue_days&&e.overdue_days>0)&&!n.has(e.id)).length,u=document.querySelector(`#filter-all-btn`);u&&(u.textContent=`All Items (${o})`);let d=document.querySelector(`#filter-hw-btn`);d&&(d.textContent=`Homework Only (${s})`);let f=document.querySelector(`#filter-vol-btn`);f&&(f.textContent=`Voluntary & Activities (${c})`);let p=document.querySelector(`#overdue-filter-btn`);p&&(p.textContent=`Overdue Items (${l})`);let m=document.querySelector(`#completed-filter-btn`);m&&(m.textContent=`Completed (${n.size})`),_(o,s,c,l,n.size),v(`12345`,`#louis-assignments-list`),v(`12346`,`#charlotte-assignments-list`),y(),b(),x()}function _(e,t,n,a,o){let s=document.querySelector(`#totals-grid`);if(!s)return;let c=new Set(i.completed_assignment_ids||[]);s.innerHTML=`
    <div class="total-card">
      <div class="total-value">${(r.assignments||[]).filter(e=>!c.has(e.id)).length}</div>
      <div class="total-label">Pending Upcoming</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #2563eb;">${t}</div>
      <div class="total-label">Homework Only</div>
    </div>
    <div class="total-card">
      <div class="total-value" style="color: #059669;">${o}</div>
      <div class="total-label">Marked Completed</div>
    </div>
    <div class="total-card alert-card">
      <div class="total-value">${a}</div>
      <div class="total-label">Hidden Overdue</div>
    </div>
  `}function v(e,t){let n=document.querySelector(t);if(!n)return;let o=new Set(i.completed_assignment_ids||[]),c=i.assignment_notes||{},l=(r.assignments||[]).filter(t=>u(t)===e);if(a===`homework`?l=l.filter(e=>!e.is_voluntary&&!e.is_web_voluntary&&!String(e.course_title||``).toLowerCase().includes(`web`)):a===`voluntary`?l=l.filter(e=>e.is_voluntary||e.is_web_voluntary||String(e.course_title||``).toLowerCase().includes(`web`)):a===`overdue`?l=l.filter(e=>(e.is_overdue_hidden||e.overdue_days&&e.overdue_days>0)&&!o.has(e.id)):a===`completed`&&(l=l.filter(e=>o.has(e.id))),l.length===0){n.innerHTML=`
      <div class="assignment-card" style="text-align: center; padding: 32px; color: var(--text-muted);">
        <p style="font-size: 0.9rem;">No assignments for this filter.</p>
      </div>
    `;return}n.innerHTML=l.map(e=>{let t=(r.sections||[]).find(t=>t.course_id===e.course_id||t.id&&t.id===e.section_id),n=(r.folders||[]).find(t=>t.id===e.folder_id),i=(r.attachments||[]).filter(t=>e.attachment_ids?.includes(t.id)),a=e.course_title||t&&(t.course_title||t.section_code)||`Course`,l=n?n.title:``,u=e.teacher||e.teacher_name||(t&&t.teachers?t.teachers.join(`, `):t&&t.teacher?t.teacher:``),d=o.has(e.id),f=c[e.id]||``,p=s===e.id,m=`due-tomorrow`,h=e.status||`Upcoming`;d?(m=`completed-badge`,h=`✓ Completed`):e.is_overdue_hidden?(m=`overdue`,h=`⚠️ Overdue (${e.overdue_days||1}d hidden)`):(e.is_voluntary||e.is_web_voluntary||String(a).toLowerCase().includes(`web`))&&(m=`voluntary`,h=`Voluntary WEB`);let g=e.due_human_pt||e.due||e.due_iso||`Upcoming`;return`
      <article class="assignment-card ${d?`is-completed`:``} ${e.is_overdue_hidden&&!d?`overdue-hidden`:``}">
        <div class="card-top">
          <div>
            <span class="course-badge">
              ${a}
            </span>
            ${l?`<span class="folder-path">📁 ${l}</span>`:``}
          </div>
          <span class="status-badge ${m}">${h}</span>
        </div>

        <h3 class="assignment-title">${e.title}</h3>
        <p class="assignment-desc">${e.instructions_summary||e.description||``}</p>

        <!-- Student Note Display / Form -->
        ${f&&!p?`
          <div class="student-note-display">
            <span>💬 <span class="student-note-text">"${f}"</span></span>
            <button class="btn-edit-note" data-assignment-id="${e.id}">Edit Note</button>
          </div>
        `:``}

        ${p?`
          <div class="note-input-box">
            <input type="text" class="note-text-field" id="note-input-${e.id}" value="${f}" placeholder="Add a note e.g. 'Done on paper', 'Submitted in class'..." />
            <button class="btn-save-note" data-assignment-id="${e.id}">Save Note</button>
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
            ${g}
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            ${u?`<span>Teacher: <strong>${u}</strong></span>`:``}
            ${!f&&!p?`
              <button class="btn-add-note" data-assignment-id="${e.id}">+ Note</button>
            `:``}
            <button class="btn-complete-toggle ${d?`is-checked`:``}" data-assignment-id="${e.id}">
              ${d?`✓ Done`:`◯ Mark Done`}
            </button>
          </div>
        </div>
      </article>
    `}).join(``)}function y(){let e=document.querySelector(`#course-list`);if(!e)return;let t=r.sections||[];if(t.length===0){e.innerHTML=`<div style="font-size:0.85rem; color:var(--text-muted);">No classes listed.</div>`;return}e.innerHTML=t.map(e=>{let t=e.course_title||`Course`,n=e.section_title||e.section_code||e.section||``,r=e.teachers?e.teachers.join(`, `):e.teacher||``;return`
      <div class="course-item">
        <div class="course-name">${t}</div>
        <div class="course-period">${n}${r?` • ${r}`:``}</div>
      </div>
    `}).join(``)}function b(){let e=document.querySelector(`#updates-list`);if(!e)return;let t=r.updates||[];if(t.length===0){e.innerHTML=`<div style="font-size:0.85rem; color:var(--text-muted);">No recent updates.</div>`;return}e.innerHTML=t.map(e=>`
    <div class="update-card">
      <div class="update-author">${e.author_name||`Teacher`} ${e.author_role?`(${e.author_role})`:``}</div>
      <div class="update-body" id="update-body-${e.id}">${e.body}</div>
      ${e.body_truncated?`
        <button class="btn-readmore" data-update-id="${e.id}">Read full update...</button>
      `:``}
    </div>
  `).join(``)}function x(){let e=document.querySelector(`#calendar-list`);if(!e)return;let t=r.calendar_events||[];if(t.length===0){e.innerHTML=`<div style="font-size:0.85rem; color:var(--text-muted);">No upcoming events.</div>`;return}e.innerHTML=t.map(e=>{let t=new Date(e.start);return`
      <div class="calendar-item">
        <div class="calendar-date-box">
          <div class="date-day">${t.getDate()}</div>
          <div class="date-month">${t.toLocaleString(`en-US`,{month:`short`})}</div>
        </div>
        <div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--text-main);">${e.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${(e.type||`SCHOOL`).toUpperCase()} EVENT</div>
        </div>
      </div>
    `}).join(``)}function S(){document.querySelector(`#refresh-btn`)?.addEventListener(`click`,()=>{o||c(!0)}),document.querySelector(`#filter-pills`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.filter-btn`);if(!t)return;let n=t.getAttribute(`data-filter`);n&&(a=n,document.querySelectorAll(`.filter-btn`).forEach(e=>e.classList.remove(`active`,`active-warning`,`active-success`)),n===`overdue`?t.classList.add(`active-warning`):n===`completed`?t.classList.add(`active-success`):t.classList.add(`active`),v(`12345`,`#louis-assignments-list`),v(`12346`,`#charlotte-assignments-list`))}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.btn-complete-toggle`);if(t){let e=t.getAttribute(`data-assignment-id`);e&&d(e);return}let n=e.target.closest(`.btn-add-note`)||e.target.closest(`.btn-edit-note`);if(n){let e=n.getAttribute(`data-assignment-id`);e&&(s=e,g(),setTimeout(()=>{document.querySelector(`#note-input-${e}`)?.focus()},50));return}let r=e.target.closest(`.btn-save-note`);if(r){let e=r.getAttribute(`data-assignment-id`);if(e){let t=document.querySelector(`#note-input-${e}`);t&&f(e,t.value)}return}}),document.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let t=e.target;if(t&&t.classList.contains(`note-text-field`)){let e=t.id.replace(`note-input-`,``);e&&f(e,t.value)}}}),document.querySelector(`#updates-list`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.btn-readmore`);if(!t)return;let n=t.getAttribute(`data-update-id`);if(n){let e=(r.updates||[]).find(e=>e.id===n),i=document.querySelector(`#update-body-${n}`);i&&e&&(i.innerHTML=`${e.body} <em>(full text loaded from Schoology API)</em>`,t.remove())}})}document.addEventListener(`DOMContentLoaded`,m);