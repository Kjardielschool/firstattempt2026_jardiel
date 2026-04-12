<script>
  import { navigate } from "svelte-routing";
  import AdminNav from "../../components/AdminNav.svelte";

  const kpis = [
    { label: "Total Alumni", value: "12,432", sub: "+248 this month", color: "#003366", icon: "👥" },
    { label: "Verified Alumni", value: "11,904", sub: "95.8% verification rate", color: "#059669", icon: "✅" },
    { label: "Event Attendance", value: "3,210", sub: "Across 8 events YTD", color: "#d97706", icon: "📅" },
    { label: "Total Revenue", value: "₱2.1M", sub: "Events + Donations YTD", color: "#7c3aed", icon: "💰" },
  ];

  const barData = [
    { month: "Jan", alumni: 82, events: 1 },
    { month: "Feb", alumni: 120, events: 2 },
    { month: "Mar", alumni: 95, events: 1 },
    { month: "Apr", alumni: 148, events: 3 },
    { month: "May", alumni: 210, events: 2 },
    { month: "Jun", alumni: 176, events: 4 },
    { month: "Jul", alumni: 130, events: 1 },
    { month: "Aug", alumni: 248, events: 3 },
    { month: "Sep", alumni: 190, events: 2 },
    { month: "Oct", alumni: 168, events: 2 },
  ];

  const maxAlumni = Math.max(...barData.map(d => d.alumni));

  const topEvents = [
    { title: "AdDU Annual Alumni Gala 2024", attendees: 142, revenue: "₱71,000", rating: 4.9, img: "/images/Annual AdDU Gala Dashboard Image.png" },
    { title: "Blue Knight Tech Mixer", attendees: 58, revenue: "₱29,000", rating: 4.7, img: "/images/Blue Knight Tech Mixer Dashboard Image.png" },
    { title: "Annual Tech Alumni Meetup", attendees: 88, revenue: "₱44,000", rating: 4.5, img: "/images/Annual Tech Alumni Meetup 2024 Targeted Invitation Builder.png" },
  ];

  const byCollege = [
    { college: "School of Engineering & Architecture", count: 2840, pct: 23 },
    { college: "School of Business & Governance", count: 2480, pct: 20 },
    { college: "School of Nursing", count: 1860, pct: 15 },
    { college: "School of Arts & Sciences", count: 1980, pct: 16 },
    { college: "School of Law", count: 1240, pct: 10 },
    { college: "Others", count: 2032, pct: 16 },
  ];

  const colors = ["#003366","#0a4f9e","#0d9488","#d97706","#7c3aed","#888"];
</script>

<div class="layout">
  <AdminNav active="reports" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="eyebrow">ANALYTICS & REPORTS</p>
        <h1>Reports Homepage</h1>
        <p class="sub">Ateneo de Davao University Alumni Portal — Year-to-Date Overview</p>
      </div>
      <div class="topbar-actions">
        <button class="export-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export Report
        </button>
      </div>
    </div>

    <div class="page-content">
      <!-- KPIs -->
      <div class="kpi-grid">
        {#each kpis as kpi}
          <div class="kpi-card" style="border-top:4px solid {kpi.color}">
            <div class="kpi-icon" style="background:{kpi.color}15">{kpi.icon}</div>
            <p class="kpi-label">{kpi.label}</p>
            <p class="kpi-value" style="color:{kpi.color}">{kpi.value}</p>
            <p class="kpi-sub">{kpi.sub}</p>
          </div>
        {/each}
      </div>

      <div class="charts-row">
        <!-- Bar Chart: Monthly Alumni Registrations -->
        <div class="chart-card">
          <div class="chart-hdr">
            <h3>Monthly Alumni Registrations</h3>
            <span class="chart-year">2024</span>
          </div>
          <div class="bar-chart">
            {#each barData as d}
              <div class="bar-col">
                <div class="bar-wrap">
                  <div class="bar-fill" style="height:{(d.alumni/maxAlumni)*160}px; background:#003366">
                    <span class="bar-val">{d.alumni}</span>
                  </div>
                </div>
                <p class="bar-label">{d.month}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- Alumni by College -->
        <div class="chart-card">
          <h3>Alumni by College</h3>
          <div class="college-list">
            {#each byCollege as item, i}
              <div class="college-row">
                <span class="col-dot" style="background:{colors[i]}"></span>
                <span class="col-name">{item.college}</span>
                <div class="col-bar-wrap">
                  <div class="col-bar" style="width:{item.pct}%; background:{colors[i]}"></div>
                </div>
                <span class="col-pct">{item.pct}%</span>
                <span class="col-count">{item.count.toLocaleString()}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Top Events -->
      <div class="card">
        <h3>Top Performing Events</h3>
        <div class="events-table-grid">
          {#each topEvents as ev}
            <div class="top-ev-card">
              <img src={ev.img} alt={ev.title} class="top-ev-img" />
              <div class="top-ev-info">
                <p class="top-ev-title">{ev.title}</p>
                <div class="top-ev-stats">
                  <span>👥 {ev.attendees} attended</span>
                  <span class="rev">💰 {ev.revenue}</span>
                  <span class="rating">⭐ {ev.rating}</span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; }

  .topbar { background: #1a1a2e; padding: 28px 40px; display: flex; justify-content: space-between; align-items: flex-start; }
  .eyebrow { color: rgba(255,255,255,0.4); font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
  h1 { color: white; font-size: 28px; font-weight: 800; margin-bottom: 6px; }
  .sub { color: rgba(255,255,255,0.5); font-size: 14px; }
  .export-btn { display: flex; align-items: center; gap: 8px; padding: 12px 22px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }

  .page-content { padding: 32px 40px; }

  .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
  .kpi-card { background: white; border-radius: 14px; padding: 22px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .kpi-icon { font-size: 24px; padding: 10px; border-radius: 10px; display: inline-block; margin-bottom: 12px; }
  .kpi-label { font-size: 12px; color: #888; font-weight: 600; margin-bottom: 4px; }
  .kpi-value { font-size: 28px; font-weight: 900; margin-bottom: 4px; }
  .kpi-sub { font-size: 12px; color: #aaa; }

  .charts-row { display: grid; grid-template-columns: 3fr 2fr; gap: 20px; margin-bottom: 24px; }
  .chart-card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .chart-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  h3 { font-size: 17px; font-weight: 800; color: #1a1a2e; margin-bottom: 16px; }
  .chart-hdr h3 { margin-bottom: 0; }
  .chart-year { background: #e8eaf6; color: #003366; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; }

  .bar-chart { display: flex; gap: 8px; align-items: flex-end; height: 200px; padding-bottom: 24px; position: relative; }
  .bar-col { display: flex; flex-direction: column; align-items: center; flex: 1; }
  .bar-wrap { display: flex; align-items: flex-end; height: 160px; }
  .bar-fill { width: 100%; border-radius: 6px 6px 0 0; position: relative; transition: height 0.5s; min-height: 4px; }
  .bar-val { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; font-weight: 800; color: #003366; white-space: nowrap; }
  .bar-label { font-size: 11px; color: #aaa; margin-top: 6px; font-weight: 600; }

  .college-list { display: flex; flex-direction: column; gap: 12px; }
  .college-row { display: flex; align-items: center; gap: 8px; }
  .col-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .col-name { font-size: 12px; color: #555; flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .col-bar-wrap { width: 80px; height: 6px; background: #f0f4f8; border-radius: 3px; flex-shrink: 0; }
  .col-bar { height: 100%; border-radius: 3px; }
  .col-pct { font-size: 11px; font-weight: 700; color: #777; width: 28px; text-align: right; }
  .col-count { font-size: 11px; color: #aaa; width: 42px; text-align: right; }

  .card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .events-table-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .top-ev-card { border: 1px solid #f0f4f8; border-radius: 12px; overflow: hidden; }
  .top-ev-img { width: 100%; height: 120px; object-fit: cover; }
  .top-ev-info { padding: 14px; }
  .top-ev-title { font-size: 13px; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
  .top-ev-stats { display: flex; gap: 10px; font-size: 12px; color: #666; flex-wrap: wrap; }
  .rev { color: #059669; font-weight: 700; }
  .rating { color: #d97706; font-weight: 700; }
</style>
