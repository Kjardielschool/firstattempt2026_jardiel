<script>
  import { navigate } from "svelte-routing";
  import AlumniNav from "../../components/AlumniNav.svelte";

  const recommended = [
    { name: "Sarah Jenkins", role: "Senior Product Manager", company: "Google", match: "98%", skills: ["Product Strategy", "UX Research", "Leadership"], batch: "BS CS '15", pic: "/images/Sarah Jenkins.png" },
    { name: "Michael Chen", role: "Director of Engineering", company: "Stripe", match: "95%", skills: ["System Design", "Scalability", "FinTech"], batch: "BS IT '12", pic: "/images/Michael Chen.png" },
    { name: "Atty. Reyes", role: "Senior Partner", company: "Reyes Law Offices", match: "91%", skills: ["Corporate Law", "Contracts", "IP Law"], batch: "JD Law '12", pic: "/images/Atty. Reyes.png" },
    { name: "Fr. Cruz SJ", role: "University Rector", company: "AdDU", match: "88%", skills: ["Leadership", "Philosophy", "Ethics"], batch: "MA Phil '00", pic: "/images/Fr. Cruz SJ.png" },
  ];

  const active = [
    { name: "Emily Zhang", role: "Marketing Lead at Spotify", batch: "BS Education '21", pic: "/images/Emily Zhang.png" },
    { name: "David Kim", role: "Principal Architect, DKA Studio", batch: "BS Architecture '16", pic: "/images/David Kim.png" },
    { name: "Lisa Wong", role: "CFO, Mindanao Ventures", batch: "MBA '19", pic: "/images/Lisa Wong.png" },
    { name: "James Lee", role: "Associate Attorney, Cruz & Partners", batch: "JD Law '17", pic: "/images/James Lee.png" },
  ];

  const industries = [
    { label: "Technology", count: 142, img: "/images/Person working on laptop for workshop.png", color: "#003366" },
    { label: "Finance & Business", count: 98, img: "/images/All-in-One Event Manager Image bg.png", color: "#1a3a5c" },
    { label: "Healthcare", count: 76, img: "/images/Networking event with people talking.png", color: "#0d5c4a" },
    { label: "Law & Government", count: 54, img: "/images/Blue Knight Feed bg image ateneo de davao home dashboard.png", color: "#4a1942" },
  ];

  let activeFilter = "Open to Mentor";
  const filters = ["Open to Mentor", "Technology", "Finance", "Healthcare", "Law"];
</script>

<div class="layout">
  <AlumniNav active="mentorship" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="eyebrow">MENTORSHIP HUB</p>
        <h1>Find Your Mentor</h1>
        <p class="sub">Connect with experienced Ateneo de Davao alumni ready to guide your career journey</p>
      </div>
      <div class="topbar-right">
        <button class="become-mentor-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>
          Become a Mentor
        </button>
      </div>
    </div>

    <div class="page-content">
      <div class="filters-bar">
        {#each filters as f}
          <button class="chip" class:active={activeFilter === f} on:click={() => activeFilter = f}>{f}</button>
        {/each}
      </div>

      <!-- Recommended Mentors -->
      <section class="section-block">
        <div class="section-hdr">
          <h2>Recommended for You</h2>
          <span class="badge-count">{recommended.length} mentors</span>
        </div>
        <div class="mentors-grid">
          {#each recommended as mentor}
            <div class="mentor-card">
              <div class="match-ribbon">⚡ {mentor.match} Match</div>
              <div class="mentor-top">
                <img src={mentor.pic} alt={mentor.name} class="mentor-pic" />
                <div class="mentor-meta">
                  <p class="mentor-name">{mentor.name}</p>
                  <p class="mentor-role">{mentor.role}</p>
                  <p class="mentor-company">{mentor.company}</p>
                  <span class="batch-tag">🎓 {mentor.batch}</span>
                </div>
              </div>
              <div class="skills-row">
                {#each mentor.skills as skill}
                  <span class="skill-chip">{skill}</span>
                {/each}
              </div>
              <div class="mentor-actions">
                <button class="btn-connect">Request Mentorship</button>
                <button class="btn-bookmark">🔖</button>
              </div>
            </div>
          {/each}
        </div>
      </section>

      <div class="two-col">
        <!-- Recently Active -->
        <section class="section-block card">
          <div class="section-hdr">
            <h2>Recently Active</h2>
            <span class="see-all-link">See All</span>
          </div>
          <div class="active-list">
            {#each active as person}
              <div class="active-row">
                <img src={person.pic} alt={person.name} class="active-pic" />
                <div class="active-info">
                  <p class="active-name">{person.name}</p>
                  <p class="active-role">{person.role}</p>
                  <span class="active-batch">{person.batch}</span>
                </div>
                <button class="add-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/><line x1="20" y1="8" x2="20" y2="14"/></svg>
                  Connect
                </button>
              </div>
            {/each}
          </div>
        </section>

        <!-- Explore by Industry -->
        <section class="section-block card">
          <div class="section-hdr">
            <h2>Explore by Industry</h2>
          </div>
          <div class="industry-grid">
            {#each industries as ind}
              <div class="industry-card" style="background-image:url('{ind.img}')">
                <div class="ind-overlay" style="background:{ind.color}cc"></div>
                <div class="ind-body">
                  <p class="ind-label">{ind.label}</p>
                  <p class="ind-count">{ind.count} mentors</p>
                </div>
              </div>
            {/each}
          </div>
        </section>
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; }

  .topbar { background: #003366; padding: 28px 40px; display: flex; justify-content: space-between; align-items: flex-start; }
  .eyebrow { color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
  h1 { color: white; font-size: 28px; font-weight: 800; margin-bottom: 6px; }
  .sub { color: rgba(255,255,255,0.6); font-size: 14px; max-width: 480px; }
  .topbar-right { display: flex; align-items: center; }
  .become-mentor-btn { display: flex; align-items: center; gap: 8px; padding: 12px 24px; background: #FFD700; color: #003366; border: none; border-radius: 12px; font-size: 14px; font-weight: 800; cursor: pointer; font-family: inherit; }

  .page-content { padding: 32px 40px; }
  .filters-bar { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
  .chip { padding: 8px 20px; border-radius: 20px; border: 1.5px solid #d1d5db; background: white; font-size: 13px; cursor: pointer; font-weight: 600; font-family: inherit; transition: all 0.18s; }
  .chip.active { background: #003366; color: white; border-color: #003366; }

  .section-block { margin-bottom: 32px; }
  .section-block.card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .section-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .section-hdr h2 { font-size: 20px; font-weight: 800; color: #1a1a2e; }
  .badge-count { background: #e8eaf6; color: #003366; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; }
  .see-all-link { color: #003366; font-size: 13px; font-weight: 700; cursor: pointer; }

  .mentors-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .mentor-card { background: white; border-radius: 16px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); position: relative; overflow: hidden; }
  .match-ribbon { position: absolute; top: 14px; right: 14px; background: #fff9e6; color: #d97706; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 20px; }
  .mentor-top { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; }
  .mentor-pic { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 3px solid #e8eaf6; flex-shrink: 0; }
  .mentor-meta { flex: 1; }
  .mentor-name { font-size: 15px; font-weight: 800; color: #1a1a2e; }
  .mentor-role { font-size: 12px; color: #555; margin-top: 1px; }
  .mentor-company { font-size: 12px; color: #003366; font-weight: 600; margin-bottom: 5px; }
  .batch-tag { background: #e8eaf6; color: #003366; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 20px; }
  .skills-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
  .skill-chip { background: #f0f4f8; color: #444; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
  .mentor-actions { display: flex; gap: 8px; }
  .btn-connect { flex: 1; padding: 9px; background: #003366; color: white; border: none; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .btn-bookmark { background: #f0f4f8; border: none; border-radius: 8px; padding: 9px 12px; cursor: pointer; font-size: 14px; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

  .active-list { display: flex; flex-direction: column; gap: 14px; }
  .active-row { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 12px; border: 1px solid #f0f4f8; }
  .active-pic { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb; }
  .active-info { flex: 1; }
  .active-name { font-size: 14px; font-weight: 700; color: #1a1a2e; }
  .active-role { font-size: 12px; color: #666; }
  .active-batch { font-size: 11px; color: #888; }
  .add-btn { display: flex; align-items: center; gap: 6px; background: #003366; color: white; border: none; border-radius: 8px; padding: 8px 14px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; white-space: nowrap; }

  .industry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .industry-card { border-radius: 14px; height: 110px; position: relative; overflow: hidden; background-size: cover; background-position: center; cursor: pointer; }
  .ind-overlay { position: absolute; inset: 0; }
  .ind-body { position: relative; z-index: 2; padding: 16px; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; }
  .ind-label { color: white; font-size: 15px; font-weight: 800; }
  .ind-count { color: rgba(255,255,255,0.7); font-size: 11px; font-weight: 500; }
</style>
