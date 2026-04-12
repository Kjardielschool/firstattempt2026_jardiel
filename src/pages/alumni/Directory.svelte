<script>
  import AlumniNav from "../../components/AlumniNav.svelte";
  import { navigate } from "svelte-routing";

  let search = "";
  let activeLocation = "All";

  const alumni = [
    { name: "Maria Santos", batch: "BS IT '20", role: "Software Engineer", company: "Google", location: "Davao City", pic: "/images/Maria Santos.png" },
    { name: "Michael Chen", batch: "BS Business '18", role: "Product Manager", company: "Grab", location: "Makati", pic: "/images/Michael Chen.png" },
    { name: "Sarah Jenkins", batch: "BS Nursing '19", role: "Head Nurse", company: "Davao Medical Center", location: "Davao City", pic: "/images/Sarah Jenkins.png" },
    { name: "James Lee", batch: "JD Law '17", role: "Associate Attorney", company: "Cruz & Partners", location: "Cebu", pic: "/images/James Lee.png" },
    { name: "Emily Zhang", batch: "BS Education '21", role: "Teacher", company: "AdDU Grade School", location: "Davao City", pic: "/images/Emily Zhang.png" },
    { name: "David Kim", batch: "BS Architecture '16", role: "Principal Architect", company: "DKA Studio", location: "BGC, Taguig", pic: "/images/David Kim.png" },
    { name: "Alex Rivera", batch: "BS Psychology '22", role: "HR Manager", company: "Aboitiz Power", location: "Davao City", pic: "/images/Alex Rivera Profile Picture.png" },
    { name: "Lisa Wong", batch: "MBA '19", role: "Chief Financial Officer", company: "Mindanao Ventures", location: "Davao City", pic: "/images/Lisa Wong.png" },
    { name: "Fr. Cruz SJ", batch: "MA Philosophy '00", role: "University Rector", company: "AdDU", location: "Davao City", pic: "/images/Fr. Cruz SJ.png" },
    { name: "Atty. Reyes", batch: "JD Law '12", role: "Senior Partner", company: "Reyes Law Offices", location: "Manila", pic: "/images/Atty. Reyes.png" },
  ];

  const locations = ["All", "Davao City", "Manila", "Abroad"];

  $: filtered = alumni.filter(a =>
    (activeLocation === "All" || a.location.includes(activeLocation === "Abroad" ? "" : activeLocation) || (activeLocation === "Abroad" && !["Davao City", "Makati", "Cebu", "BGC, Taguig", "Manila"].includes(a.location))) &&
    (a.name.toLowerCase().includes(search.toLowerCase()) ||
     a.role.toLowerCase().includes(search.toLowerCase()) ||
     a.batch.toLowerCase().includes(search.toLowerCase()) ||
     a.company.toLowerCase().includes(search.toLowerCase()))
  );
</script>

<div class="layout">
  <AlumniNav active="directory" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="eyebrow">ALUMNI COMMUNITY</p>
        <h1>Alumni Directory</h1>
        <p class="sub">Connect with fellow Blue Knights around the world</p>
      </div>
      <div class="search-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="s-icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Search by name, role, batch, or company..." bind:value={search} />
      </div>
    </div>

    <div class="page-content">
      <div class="filters-bar">
        {#each locations as loc}
          <button class="chip" class:active={activeLocation === loc} on:click={() => activeLocation = loc}>{loc}</button>
        {/each}
        <span class="results-count">{filtered.length} alumni found</span>
      </div>

      <div class="directory-grid">
        {#each filtered as alum}
          <div class="alum-card">
            <div class="card-top">
              <img src={alum.pic} alt={alum.name} class="alum-pic" />
              <div class="alum-info">
                <p class="alum-name">{alum.name}</p>
                <p class="alum-batch">{alum.batch}</p>
                <p class="alum-role">{alum.role} <span class="at">at</span> {alum.company}</p>
                <p class="alum-loc">📍 {alum.location}</p>
              </div>
            </div>
            <div class="card-actions">
              <button class="btn-connect">Connect</button>
              <button class="btn-msg">Message</button>
            </div>
          </div>
        {/each}
        {#if filtered.length === 0}
          <p class="empty">No alumni found matching your search.</p>
        {/if}
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; }
  .topbar { background: #003366; padding: 28px 40px; display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; }
  .eyebrow { color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
  h1 { color: white; font-size: 28px; font-weight: 800; margin-bottom: 6px; }
  .sub { color: rgba(255,255,255,0.6); font-size: 14px; }
  .search-wrap { position: relative; display: flex; align-items: flex-end; }
  .search-wrap input { width: 360px; padding: 12px 16px 12px 42px; border: none; border-radius: 12px; font-size: 14px; background: rgba(255,255,255,0.15); color: white; font-family: inherit; outline: none; }
  .search-wrap input::placeholder { color: rgba(255,255,255,0.5); }
  .search-wrap input:focus { background: rgba(255,255,255,0.2); }
  .s-icon { position: absolute; left: 14px; bottom: 13px; width: 16px; height: 16px; color: rgba(255,255,255,0.6); }

  .page-content { padding: 32px 40px; }
  .filters-bar { display: flex; gap: 10px; align-items: center; margin-bottom: 24px; flex-wrap: wrap; }
  .chip { padding: 8px 20px; border-radius: 20px; border: 1.5px solid #d1d5db; background: white; font-size: 13px; cursor: pointer; font-weight: 600; font-family: inherit; transition: all 0.18s; }
  .chip.active { background: #003366; color: white; border-color: #003366; }
  .chip:hover:not(.active) { border-color: #003366; color: #003366; }
  .results-count { margin-left: auto; color: #888; font-size: 13px; }

  .directory-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

  .alum-card { background: white; border-radius: 16px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s; }
  .alum-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
  .card-top { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 14px; }
  .alum-pic { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 3px solid #e8eaf6; flex-shrink: 0; }
  .alum-info { flex: 1; min-width: 0; }
  .alum-name { font-size: 15px; font-weight: 800; color: #1a1a2e; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .alum-batch { font-size: 11px; color: #003366; font-weight: 700; background: #e8eaf6; padding: 2px 8px; border-radius: 20px; display: inline-block; margin: 3px 0; }
  .alum-role { font-size: 12px; color: #555; }
  .at { color: #aaa; }
  .alum-loc { font-size: 11px; color: #aaa; margin-top: 3px; }
  .card-actions { display: flex; gap: 8px; }
  .btn-connect { flex: 1; padding: 9px; background: #003366; color: white; border: none; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .btn-msg { flex: 1; padding: 9px; background: white; color: #003366; border: 1.5px solid #e0e0e0; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .btn-msg:hover { border-color: #003366; }
  .empty { text-align: center; color: #888; padding: 40px; grid-column: 1/-1; }
</style>
