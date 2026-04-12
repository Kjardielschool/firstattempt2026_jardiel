<script>
  import { navigate } from "svelte-routing";
  import AlumniNav from "../../components/AlumniNav.svelte";

  let search = "";
  let activeFilter = "All";
  const filters = ["All", "Workshops", "Reunions", "Webinars", "Galas"];

  const featured = {
    title: "AdDU Annual Alumni Gala 2024",
    date: "OCT 12",
    time: "7:00 PM – 11:00 PM",
    venue: "Grand Hall, Main Campus, Ateneo de Davao University",
    seats: "Only 5 seats left",
    attendees: 142,
    img: "/images/AdDU Annual Alumni Gala 2024 Events Image BG.png"
  };

  const upcoming = [
    { month: "NOV", day: "05", title: "AdDU Alumni Gala 2024", venue: "Online (Zoom)", time: "2:00 PM EST", seats: "45 seats available", tag: "available", img: "/images/Annual AdDU Gala Dashboard Image.png" },
    { month: "NOV", day: "18", title: "Blue Knight Tech Summit", venue: "The Shard, London", time: "6:30 PM GMT", seats: "Waitlist only", tag: "waitlist", img: "/images/Blue Knight Tech Mixer Dashboard Image.png" },
    { month: "DEC", day: "07", title: "Homecoming Weekend 2024", venue: "AdDU Main Campus", time: "8:00 AM – 10:00 PM", seats: "12 seats available", tag: "available", img: "/images/All-in-One Event Manager Image bg.png" },
    { month: "DEC", day: "15", title: "Alumni Christmas Reunion", venue: "Grand Ballroom, Abreeza", time: "6:00 PM PST", seats: "30 seats available", tag: "available", img: "/images/Networking event with people talking.png" },
  ];

  $: filteredEvents = upcoming.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.venue.toLowerCase().includes(search.toLowerCase())
  );
</script>

<div class="layout">
  <AlumniNav active="events" />
  <main class="main">
    <div class="topbar">
      <div>
        <p class="eyebrow">ALUMNI EVENTS</p>
        <h1>Events & Gatherings</h1>
        <p class="sub">Discover and join events organized for the Blue Knight community worldwide</p>
      </div>
      <div class="search-area">
        <div class="search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search events, venues..." bind:value={search} />
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="filters-bar">
        {#each filters as f}
          <button class="chip" class:active={activeFilter === f} on:click={() => activeFilter = f}>{f}</button>
        {/each}
      </div>

      <!-- Featured Event Hero -->
      <div class="featured-hero" style="background-image:url('{featured.img}')">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <span class="hero-badge">🔴 {featured.seats}</span>
          <h2>{featured.title}</h2>
          <div class="hero-meta">
            <span>🕐 {featured.time}</span>
            <span>📍 {featured.venue}</span>
          </div>
          <div class="hero-footer">
            <div class="att-row">
              <div class="att-pics">
                <img src="/images/Alex Rivera Profile Picture.png" alt="" />
                <img src="/images/Maria Santos.png" alt="" />
                <img src="/images/Michael Chen.png" alt="" />
              </div>
              <span class="att-text">+{featured.attendees} attending</span>
            </div>
            <button class="book-btn" on:click={() => navigate("/dashboard")}>Book Now →</button>
          </div>
        </div>
        <div class="hero-date-badge">
          <span>{featured.date.split(' ')[0]}</span>
          <strong>{featured.date.split(' ')[1]}</strong>
        </div>
      </div>

      <!-- Upcoming Events Grid -->
      <div class="section-header">
        <h3>Upcoming Events</h3>
        <span class="count">{filteredEvents.length} events found</span>
      </div>

      <div class="events-grid">
        {#each filteredEvents as event}
          <div class="event-card">
            <div class="card-img-wrap">
              <img src={event.img} alt={event.title} class="card-img" />
              <div class="card-overlay"></div>
              <div class="card-date-badge">
                <p class="c-month">{event.month}</p>
                <p class="c-day">{event.day}</p>
              </div>
              <span class="card-seats" class:waitlist={event.tag === 'waitlist'}>
                ● {event.seats}
              </span>
            </div>
            <div class="card-body">
              <h4>{event.title}</h4>
              <p>📍 {event.venue}</p>
              <p>🕐 {event.time}</p>
              <button class="register-btn" class:waitlist-btn={event.tag === 'waitlist'}>
                {event.tag === 'waitlist' ? 'Join Waitlist' : 'Register Now'}
              </button>
            </div>
          </div>
        {/each}
        {#if filteredEvents.length === 0}
          <p class="no-results">No events found matching your search.</p>
        {/if}
      </div>
    </div>
  </main>
</div>

<style>
  .layout { display: flex; min-height: 100vh; font-family: 'Plus Jakarta Sans', sans-serif; }
  .main { margin-left: 260px; flex: 1; background: #f0f4f8; }

  .topbar {
    background: #003366; padding: 28px 40px;
    display: flex; justify-content: space-between; align-items: flex-start; gap: 24px;
  }
  .eyebrow { color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
  h1 { color: white; font-size: 28px; font-weight: 800; margin-bottom: 6px; }
  .sub { color: rgba(255,255,255,0.6); font-size: 14px; }

  .search-area { display: flex; align-items: flex-end; }
  .search-wrap { position: relative; }
  .search-wrap input {
    width: 320px; padding: 12px 16px 12px 42px;
    border: none; border-radius: 12px; font-size: 14px;
    background: rgba(255,255,255,0.15); color: white;
    font-family: 'Plus Jakarta Sans', sans-serif; outline: none;
  }
  .search-wrap input::placeholder { color: rgba(255,255,255,0.5); }
  .search-wrap input:focus { background: rgba(255,255,255,0.2); }
  .search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: rgba(255,255,255,0.6); }

  .page-content { padding: 32px 40px; }

  .filters-bar { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
  .chip { padding: 8px 20px; border-radius: 20px; border: 1.5px solid #d1d5db; background: white; font-size: 13px; cursor: pointer; font-weight: 600; font-family: inherit; transition: all 0.18s; }
  .chip.active { background: #003366; color: white; border-color: #003366; }
  .chip:hover:not(.active) { border-color: #003366; color: #003366; }

  .featured-hero {
    border-radius: 20px; height: 360px; position: relative; overflow: hidden;
    background-size: cover; background-position: center; margin-bottom: 32px;
    display: flex; align-items: flex-end;
  }
  .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,10,30,0.9) 0%, rgba(0,30,80,0.4) 60%, transparent 100%); }
  .hero-content { position: relative; z-index: 2; padding: 32px 40px; flex: 1; }
  .hero-badge { background: rgba(255,255,255,0.18); color: white; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(4px); font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 20px; display: inline-block; margin-bottom: 12px; }
  .hero-content h2 { color: white; font-size: 28px; font-weight: 800; margin-bottom: 12px; }
  .hero-meta { display: flex; gap: 24px; margin-bottom: 20px; }
  .hero-meta span { color: rgba(255,255,255,0.85); font-size: 14px; }
  .hero-footer { display: flex; justify-content: space-between; align-items: center; }
  .att-row { display: flex; align-items: center; gap: 10px; }
  .att-pics { display: flex; }
  .att-pics img { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 2px solid white; margin-left: -8px; }
  .att-pics img:first-child { margin-left: 0; }
  .att-text { color: rgba(255,255,255,0.85); font-size: 13px; font-weight: 600; }
  .book-btn { background: #FFD700; color: #003366; border: none; border-radius: 12px; padding: 13px 28px; font-size: 15px; font-weight: 800; cursor: pointer; font-family: inherit; transition: all 0.2s; }
  .book-btn:hover { background: white; transform: translateY(-1px); }
  .hero-date-badge { position: absolute; top: 24px; right: 24px; background: white; border-radius: 12px; padding: 10px 16px; text-align: center; z-index: 3; }
  .hero-date-badge span { display: block; font-size: 11px; font-weight: 800; color: #003366; letter-spacing: 1px; }
  .hero-date-badge strong { display: block; font-size: 28px; font-weight: 900; color: #003366; line-height: 1; }

  .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .section-header h3 { font-size: 20px; font-weight: 800; color: #1a1a2e; }
  .count { color: #888; font-size: 14px; }

  .events-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .event-card { background: white; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: transform 0.2s, box-shadow 0.2s; }
  .event-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.12); }
  .card-img-wrap { position: relative; height: 140px; overflow: hidden; }
  .card-img { width: 100%; height: 100%; object-fit: cover; }
  .card-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4)); }
  .card-date-badge { position: absolute; top: 10px; left: 10px; background: white; border-radius: 8px; padding: 5px 9px; text-align: center; }
  .c-month { font-size: 9px; font-weight: 800; color: #003366; letter-spacing: 0.5px; }
  .c-day { font-size: 18px; font-weight: 900; color: #003366; line-height: 1; }
  .card-seats { position: absolute; bottom: 10px; right: 10px; background: rgba(255,255,255,0.9); font-size: 11px; font-weight: 700; color: #27ae60; padding: 3px 8px; border-radius: 10px; }
  .card-seats.waitlist { color: #e67e22; }
  .card-body { padding: 14px; }
  .card-body h4 { font-size: 13px; font-weight: 800; color: #1a1a2e; margin-bottom: 6px; }
  .card-body p { font-size: 11px; color: #777; margin-bottom: 3px; }
  .register-btn { width: 100%; margin-top: 10px; padding: 9px; background: #003366; color: white; border: none; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; }
  .register-btn.waitlist-btn { background: #e67e22; }
  .no-results { color: #888; grid-column: 1/-1; padding: 40px; text-align: center; }
</style>
