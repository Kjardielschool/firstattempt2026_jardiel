<script>
  import { navigate } from "svelte-routing";
  import AdminNav from "../../components/AdminNav.svelte";

  let activeEvent = null;

  const events = [
    {
      id: 1, title: "AdDU Annual Alumni Gala 2024", date: "Oct 24, 2024", time: "7:00 PM – 11:00 PM",
      venue: "Grand Hall, Main Campus", capacity: 300, registered: 142, revenue: "₱71,000",
      status: "open", img: "/images/Annual AdDU Gala Dashboard Image.png", tag: "Gala"
    },
    {
      id: 2, title: "Blue Knight Tech Mixer", date: "Nov 3, 2024", time: "5:30 PM",
      venue: "Innovation Hub", capacity: 80, registered: 58, revenue: "₱29,000",
      status: "open", img: "/images/Blue Knight Tech Mixer Dashboard Image.png", tag: "Networking"
    },
    {
      id: 3, title: "Homecoming Weekend 2024", date: "Dec 7, 2024", time: "8:00 AM – 10:00 PM",
      venue: "AdDU Main Campus", capacity: 500, registered: 212, revenue: "₱0",
      status: "open", img: "/images/All-in-One Event Manager Image bg.png", tag: "Reunion"
    },
    {
      id: 4, title: "Annual Tech Alumni Meetup 2024", date: "Jan 15, 2025", time: "2:00 PM",
      venue: "Online (Zoom)", capacity: 200, registered: 88, revenue: "₱44,000",
      status: "draft", img: "/images/Annual Tech Alumni Meetup 2024 Targeted Invitation Builder.png", tag: "Webinar"
    },
  ];

  function selectEvent(ev) {
    activeEvent = activeEvent?.id === ev.id ? null : ev;
  }

  function getPct(r, c) {
    return Math.round((r / c) * 100);
  }
</script>

<div class="layout">
  <AdminNav active="events" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="eyebrow">EVENT MANAGEMENT</p>
        <h1>All-in-One Event Manager</h1>
        <p class="sub">Create, manage, and track all alumni events from one central dashboard</p>
      </div>
      <button class="create-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Create New Event
      </button>
    </div>

    <div class="page-content">
      <div class="main-grid" class:has-detail={activeEvent}>
        <div class="events-list">
          {#each events as ev}
            <div class="event-row" class:selected={activeEvent?.id === ev.id} on:click={() => selectEvent(ev)} role="button" tabindex="0">
              <div class="ev-img-wrap">
                <img src={ev.img} alt={ev.title} class="ev-img" />
              </div>
              <div class="ev-info">
                <div class="ev-header">
                  <span class="ev-tag">{ev.tag}</span>
                  <span class="ev-status" class:draft={ev.status==='draft'}>{ev.status === 'open' ? '● Live' : '◌ Draft'}</span>
                </div>
                <p class="ev-title">{ev.title}</p>
                <p class="ev-meta">📅 {ev.date} · 📍 {ev.venue}</p>
                <div class="capacity-bar">
                  <div class="cap-fill" style="width:{getPct(ev.registered, ev.capacity)}%"></div>
                </div>
                <p class="cap-label">{ev.registered} / {ev.capacity} registered ({getPct(ev.registered, ev.capacity)}%)</p>
              </div>
              <div class="ev-revenue">
                <p class="rev-num">{ev.revenue}</p>
                <p class="rev-label">Revenue</p>
              </div>
            </div>
          {/each}
        </div>

        {#if activeEvent}
          <div class="detail-panel">
            <div class="detail-img-wrap">
              <img src={activeEvent.img} alt={activeEvent.title} class="detail-img" />
              <div class="detail-img-overlay"></div>
              <h2 class="detail-title">{activeEvent.title}</h2>
            </div>
            <div class="detail-body">
              <div class="detail-meta-grid">
                <div class="dm"><p class="dm-label">Date</p><p class="dm-val">{activeEvent.date}</p></div>
                <div class="dm"><p class="dm-label">Time</p><p class="dm-val">{activeEvent.time}</p></div>
                <div class="dm"><p class="dm-label">Venue</p><p class="dm-val">{activeEvent.venue}</p></div>
                <div class="dm"><p class="dm-label">Revenue</p><p class="dm-val green">{activeEvent.revenue}</p></div>
              </div>
              <div class="detail-cap">
                <div class="cap-hdr">
                  <span>Registration Progress</span>
                  <span class="cap-pct">{getPct(activeEvent.registered, activeEvent.capacity)}%</span>
                </div>
                <div class="cap-bar-lg">
                  <div class="cap-fill-lg" style="width:{getPct(activeEvent.registered, activeEvent.capacity)}%"></div>
                </div>
                <p class="cap-note">{activeEvent.registered} registered of {activeEvent.capacity} capacity</p>
              </div>
              <div class="detail-actions">
                <button class="da-btn primary">📧 Send Invitations</button>
                <button class="da-btn">✏️ Edit Event</button>
                <button class="da-btn">📊 View Analytics</button>
                <button class="da-btn danger">🗑️ Delete</button>
              </div>
            </div>
          </div>
        {/if}
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
  .create-btn { display: flex; align-items: center; gap: 8px; padding: 13px 24px; background: #FFD700; color: #1a1a2e; border: none; border-radius: 12px; font-size: 14px; font-weight: 800; cursor: pointer; font-family: inherit; }

  .page-content { padding: 32px 40px; }

  .main-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
  .main-grid.has-detail { grid-template-columns: 1fr 360px; }

  .events-list { display: flex; flex-direction: column; gap: 14px; }
  .event-row { background: white; border-radius: 16px; padding: 20px; display: flex; gap: 16px; align-items: center; box-shadow: 0 1px 4px rgba(0,0,0,0.05); cursor: pointer; transition: all 0.2s; border: 2px solid transparent; }
  .event-row:hover { border-color: #e8eaf6; }
  .event-row.selected { border-color: #003366; background: #f8fafc; }
  .ev-img-wrap { width: 100px; height: 70px; border-radius: 10px; overflow: hidden; flex-shrink: 0; }
  .ev-img { width: 100%; height: 100%; object-fit: cover; }
  .ev-info { flex: 1; min-width: 0; }
  .ev-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .ev-tag { background: #e8eaf6; color: #003366; font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px; }
  .ev-status { font-size: 12px; font-weight: 700; color: #22c55e; }
  .ev-status.draft { color: #d97706; }
  .ev-title { font-size: 15px; font-weight: 800; color: #1a1a2e; margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .ev-meta { font-size: 12px; color: #888; margin-bottom: 8px; }
  .capacity-bar { height: 4px; background: #f0f4f8; border-radius: 2px; margin-bottom: 4px; }
  .cap-fill { height: 100%; background: #003366; border-radius: 2px; }
  .cap-label { font-size: 11px; color: #aaa; }
  .ev-revenue { text-align: right; flex-shrink: 0; }
  .rev-num { font-size: 18px; font-weight: 900; color: #059669; }
  .rev-label { font-size: 11px; color: #aaa; margin-top: 2px; }

  .detail-panel { background: white; border-radius: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); overflow: hidden; align-self: flex-start; position: sticky; top: 32px; }
  .detail-img-wrap { position: relative; height: 180px; }
  .detail-img { width: 100%; height: 100%; object-fit: cover; }
  .detail-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); }
  .detail-title { position: absolute; bottom: 16px; left: 16px; right: 16px; color: white; font-size: 16px; font-weight: 800; z-index: 2; }
  .detail-body { padding: 20px; }
  .detail-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
  .dm { background: #f8fafc; border-radius: 10px; padding: 12px; }
  .dm-label { font-size: 11px; color: #aaa; font-weight: 600; margin-bottom: 4px; }
  .dm-val { font-size: 13px; font-weight: 700; color: #1a1a2e; }
  .dm-val.green { color: #059669; }
  .detail-cap { margin-bottom: 20px; }
  .cap-hdr { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: #555; margin-bottom: 8px; }
  .cap-pct { color: #003366; font-weight: 800; }
  .cap-bar-lg { height: 8px; background: #f0f4f8; border-radius: 4px; margin-bottom: 6px; }
  .cap-fill-lg { height: 100%; background: #003366; border-radius: 4px; }
  .cap-note { font-size: 11px; color: #aaa; }
  .detail-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .da-btn { padding: 10px; background: #f0f4f8; border: none; border-radius: 10px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; color: #333; }
  .da-btn.primary { background: #003366; color: white; grid-column: 1 / -1; }
  .da-btn.danger { background: #fef2f2; color: #dc2626; }
</style>
