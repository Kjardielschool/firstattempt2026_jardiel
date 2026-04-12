<script>
  import { navigate } from "svelte-routing";
  import AlumniNav from "../../components/AlumniNav.svelte";

  const skills = ["Product Design", "UX Research", "Prototyping", "Design Systems", "Mentorship", "HR Strategy", "Organizational Psychology"];
  const experience = [
    { role: "HR Manager", company: "Aboitiz Power", years: "2023 – Present", desc: "Leading talent acquisition and organizational development initiatives across Mindanao operations.", active: true },
    { role: "HR Associate", company: "Monde Nissin", years: "2022 – 2023", desc: "Handled recruitment, onboarding, and employee relations for 200+ workforce.", active: false }
  ];
  const education = [
    { school: "Ateneo de Davao University", degree: "Bachelor of Science in Psychology", years: "2018 – 2022" },
    { school: "Ateneo de Davao University", degree: "Senior High School – STEM Track", years: "2016 – 2018" }
  ];
</script>

<div class="layout">
  <AlumniNav active="profile" />
  <main class="main">

    <!-- Hero Banner -->
    <div class="profile-hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-left">
          <div class="avatar-wrap">
            <img src="/images/Alex Rivera Profile Picture.png" alt="Alex Rivera" class="avatar" />
            <span class="online-ring"></span>
          </div>
          <div class="hero-info">
            <div class="name-row">
              <h1>Alex Rivera</h1>
              <span class="verified-tag">✓ Verified Alumnus</span>
            </div>
            <p class="title-role">HR Manager at Aboitiz Power</p>
            <p class="meta-row">
              <span>📍 Davao City, Philippines</span>
              <span class="sep">·</span>
              <span>🎓 BS Psychology · Class of 2022</span>
              <span class="sep">·</span>
              <span>👥 148 connections</span>
            </p>
          </div>
        </div>
        <div class="hero-actions">
          <button class="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/><line x1="20" y1="8" x2="20" y2="14"/></svg>
            Connect
          </button>
          <button class="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Message
          </button>
          <button class="btn-edit">Edit Profile</button>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="body-grid">
      <!-- Left column -->
      <div class="left-col">
        <div class="card">
          <h3>About</h3>
          <p class="about-text">Passionate HR professional with a background in organizational psychology and talent development. Graduated from AdDU with a BS Psychology degree and has since worked in multiple industries across Mindanao. Committed to creating inclusive, people-first workplaces. Always happy to connect with fellow Ateneans and mentor incoming graduates! 💛</p>
        </div>

        <div class="card">
          <h3>Work Experience</h3>
          <div class="timeline">
            {#each experience as exp}
              <div class="timeline-item">
                <div class="tl-dot" class:active={exp.active}></div>
                <div class="tl-line" class:last={!exp.active}></div>
                <div class="tl-body">
                  <p class="tl-role">{exp.role}</p>
                  <p class="tl-company">{exp.company}</p>
                  <span class="tl-years">{exp.years}</span>
                  <p class="tl-desc">{exp.desc}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <div class="card">
          <h3>Education</h3>
          <div class="edu-list">
            {#each education as edu}
              <div class="edu-item">
                <div class="edu-icon">🎓</div>
                <div>
                  <p class="edu-school">{edu.school}</p>
                  <p class="edu-degree">{edu.degree}</p>
                  <p class="edu-years">{edu.years}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="right-col">
        <div class="card">
          <h3>Skills & Expertise</h3>
          <div class="skills-wrap">
            {#each skills as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>

        <div class="card">
          <h3>Mutual Connections</h3>
          <div class="connections-list">
            <div class="connection-row">
              <img src="/images/Maria Santos.png" alt="Maria Santos" class="conn-pic" />
              <div>
                <p class="conn-name">Maria Santos</p>
                <p class="conn-sub">BS IT '20 · Google</p>
              </div>
              <button class="small-connect">Connect</button>
            </div>
            <div class="connection-row">
              <img src="/images/Michael Chen.png" alt="Michael Chen" class="conn-pic" />
              <div>
                <p class="conn-name">Michael Chen</p>
                <p class="conn-sub">BS Business '18 · Grab</p>
              </div>
              <button class="small-connect">Connect</button>
            </div>
            <div class="connection-row">
              <img src="/images/Sarah Jenkins.png" alt="Sarah Jenkins" class="conn-pic" />
              <div>
                <p class="conn-name">Sarah Jenkins</p>
                <p class="conn-sub">BS Nursing '19 · DMC</p>
              </div>
              <button class="small-connect">Connect</button>
            </div>
          </div>
          <button class="see-all-link">View all 6 mutual connections →</button>
        </div>

        <div class="card activity-card">
          <h3>Activity</h3>
          <div class="stat-row">
            <div class="stat"><p class="stat-num">148</p><p class="stat-label">Connections</p></div>
            <div class="stat"><p class="stat-num">3</p><p class="stat-label">Events Joined</p></div>
            <div class="stat"><p class="stat-num">1</p><p class="stat-label">Mentee</p></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; }

  .profile-hero { background: #003366; padding: 0; }
  .hero-bg { height: 140px; background: linear-gradient(135deg, #003366 0%, #001f4d 40%, #0a4f9e 100%); position: relative; overflow: hidden; }
  .hero-bg::after { content: ''; position: absolute; inset: 0; background: url('/images/Blue Knight Feed bg image ateneo de davao home dashboard.png') center/cover; opacity: 0.15; }
  .hero-content { padding: 0 40px 28px; display: flex; justify-content: space-between; align-items: flex-end; margin-top: -48px; position: relative; z-index: 2; }
  .hero-left { display: flex; align-items: flex-end; gap: 24px; }
  .avatar-wrap { position: relative; }
  .avatar { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 5px solid white; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
  .online-ring { position: absolute; bottom: 8px; right: 6px; width: 18px; height: 18px; background: #22c55e; border-radius: 50%; border: 3px solid white; }
  .hero-info { padding-bottom: 6px; }
  .name-row { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
  h1 { color: white; font-size: 26px; font-weight: 800; }
  .verified-tag { background: #FFD700; color: #003366; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; }
  .title-role { color: #FFD700; font-size: 15px; font-weight: 600; margin-bottom: 6px; }
  .meta-row { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.7); font-size: 13px; flex-wrap: wrap; }
  .sep { color: rgba(255,255,255,0.3); }
  .hero-actions { display: flex; gap: 10px; align-items: center; padding-bottom: 6px; }
  .btn-primary { display: flex; align-items: center; gap: 7px; padding: 11px 22px; background: #FFD700; color: #003366; border: none; border-radius: 10px; font-size: 14px; font-weight: 800; cursor: pointer; font-family: inherit; }
  .btn-secondary { display: flex; align-items: center; gap: 7px; padding: 11px 22px; background: rgba(255,255,255,0.15); color: white; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 10px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .btn-edit { padding: 11px 22px; background: transparent; color: rgba(255,255,255,0.6); border: 1.5px solid rgba(255,255,255,0.2); border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }

  .body-grid { display: grid; grid-template-columns: 1fr 320px; gap: 24px; padding: 32px 40px; }
  .left-col, .right-col { display: flex; flex-direction: column; gap: 20px; }

  .card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .card h3 { font-size: 17px; font-weight: 800; color: #1a1a2e; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid #f0f4f8; }
  .about-text { font-size: 14px; color: #555; line-height: 1.8; }

  .timeline { display: flex; flex-direction: column; gap: 0; }
  .timeline-item { display: flex; gap: 16px; position: relative; padding-bottom: 24px; }
  .tl-dot { width: 14px; height: 14px; border-radius: 50%; background: #003366; flex-shrink: 0; margin-top: 3px; z-index: 1; }
  .tl-dot:not(.active) { background: #d1d5db; }
  .tl-line { position: absolute; left: 6px; top: 17px; width: 2px; background: #e5e7eb; bottom: 0; }
  .tl-line.last { display: none; }
  .tl-body { flex: 1; }
  .tl-role { font-size: 15px; font-weight: 800; color: #1a1a2e; }
  .tl-company { font-size: 13px; color: #666; margin-bottom: 6px; }
  .tl-years { background: #e8eaf6; color: #003366; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; display: inline-block; margin-bottom: 8px; }
  .tl-desc { font-size: 13px; color: #777; line-height: 1.6; }

  .edu-list { display: flex; flex-direction: column; gap: 16px; }
  .edu-item { display: flex; gap: 14px; align-items: flex-start; }
  .edu-icon { font-size: 28px; background: #e8eaf6; padding: 10px; border-radius: 12px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .edu-school { font-size: 14px; font-weight: 700; color: #1a1a2e; }
  .edu-degree { font-size: 13px; color: #555; }
  .edu-years { font-size: 12px; color: #aaa; margin-top: 2px; }

  .skills-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-tag { background: #e8eaf6; color: #003366; font-size: 13px; font-weight: 600; padding: 7px 14px; border-radius: 20px; }

  .connections-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 12px; }
  .connection-row { display: flex; align-items: center; gap: 10px; }
  .conn-pic { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb; }
  .conn-name { font-size: 13px; font-weight: 700; color: #1a1a2e; }
  .conn-sub { font-size: 11px; color: #aaa; }
  .small-connect { margin-left: auto; background: #003366; color: white; border: none; border-radius: 7px; padding: 6px 12px; font-size: 11px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .see-all-link { background: none; border: none; color: #003366; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; padding: 4px 0; }

  .activity-card .stat-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  .stat { text-align: center; background: #f8fafc; border-radius: 10px; padding: 16px 8px; }
  .stat-num { font-size: 24px; font-weight: 900; color: #003366; }
  .stat-label { font-size: 11px; color: #888; font-weight: 600; margin-top: 2px; }
</style>
