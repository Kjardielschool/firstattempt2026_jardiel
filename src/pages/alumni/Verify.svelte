<script>
  import { navigate } from "svelte-routing";
  let step = 1;
  let firstName = "", lastName = "", email = "", phone = "";
  let course = "", gradYear = "", studentId = "";

  function nextStep() { if (step < 3) step++; }
  function prevStep() { if (step > 1) step--; else navigate("/login"); }
  function submit() { navigate("/dashboard"); }
</script>

<div class="page">
  <div class="left-panel">
    <div class="left-inner">
      <div class="logo-wrap" on:click={() => navigate("/login")} role="button" tabindex="0">
        <img src="/images/AdDu Alumni Logo.png" alt="AdDU Logo" class="logo" />
        <div>
          <p class="brand-name">AdDU Alumni</p>
          <p class="brand-sub">Portal</p>
        </div>
      </div>

      <div class="steps-nav">
        {#each [
          { num: 1, label: "Personal Info", desc: "Your basic details" },
          { num: 2, label: "Academic Details", desc: "Degree & student ID" },
          { num: 3, label: "Review & Submit", desc: "Confirm your application" }
        ] as s}
          <div class="step-item" class:done={step > s.num} class:current={step === s.num}>
            <div class="step-num">{step > s.num ? '✓' : s.num}</div>
            <div class="step-info">
              <p class="step-label">{s.label}</p>
              <p class="step-desc">{s.desc}</p>
            </div>
            {#if s.num < 3}<div class="step-connector"></div>{/if}
          </div>
        {/each}
      </div>

      <div class="left-footer">
        <p class="already">Already have an account?</p>
        <button class="signin-link" on:click={() => navigate("/login")}>Sign in →</button>
      </div>
    </div>
  </div>

  <div class="right-panel">
    <div class="form-container">
      <div class="progress-bar-wrap">
        <div class="progress-fill" style="width:{(step/3)*100}%"></div>
      </div>

      {#if step === 1}
        <div class="form-section">
          <p class="step-eyebrow">STEP 1 OF 3</p>
          <h2>Personal Information</h2>
          <p class="form-desc">Tell us about yourself so we can locate your records in the AdDU alumni database.</p>
          <div class="field-row">
            <div class="field">
              <label>First Name</label>
              <input type="text" placeholder="Juan" bind:value={firstName} />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input type="text" placeholder="Dela Cruz" bind:value={lastName} />
            </div>
          </div>
          <div class="field">
            <label>Email Address</label>
            <input type="email" placeholder="juan@addu.edu.ph" bind:value={email} />
          </div>
          <div class="field">
            <label>Phone Number</label>
            <input type="tel" placeholder="+63 912 345 6789" bind:value={phone} />
          </div>
        </div>

      {:else if step === 2}
        <div class="form-section">
          <p class="step-eyebrow">STEP 2 OF 3</p>
          <h2>Academic Details</h2>
          <p class="form-desc">Provide your academic information to help us verify your enrollment and graduation records.</p>
          <div class="field-row">
            <div class="field">
              <label>Course / Degree Program</label>
              <input type="text" placeholder="B.S. Computer Science" bind:value={course} />
            </div>
            <div class="field">
              <label>Graduation Year</label>
              <input type="text" placeholder="2022" bind:value={gradYear} />
            </div>
          </div>
          <div class="field">
            <label>Student ID Number</label>
            <input type="text" placeholder="e.g. 2018-00234" bind:value={studentId} />
          </div>
          <div class="field">
            <label>Upload School ID or Diploma</label>
            <div class="upload-zone">
              <div class="upload-icon">📎</div>
              <p class="upload-title">Drag & drop your file here</p>
              <p class="upload-sub">or click to browse — JPG, PNG, or PDF · max 5MB</p>
              <button class="upload-btn">Browse Files</button>
            </div>
          </div>
        </div>

      {:else}
        <div class="form-section">
          <p class="step-eyebrow">STEP 3 OF 3</p>
          <h2>Review & Submit</h2>
          <p class="form-desc">Please review your details carefully before submitting your verification application.</p>
          <div class="review-grid">
            <div class="review-group">
              <p class="rg-title">Personal Information</p>
              <div class="review-row"><span class="rk">Full Name</span><strong class="rv">{firstName || "—"} {lastName || ""}</strong></div>
              <div class="review-row"><span class="rk">Email</span><strong class="rv">{email || "—"}</strong></div>
              <div class="review-row"><span class="rk">Phone</span><strong class="rv">{phone || "—"}</strong></div>
            </div>
            <div class="review-group">
              <p class="rg-title">Academic Details</p>
              <div class="review-row"><span class="rk">Course</span><strong class="rv">{course || "—"}</strong></div>
              <div class="review-row"><span class="rk">Grad Year</span><strong class="rv">{gradYear || "—"}</strong></div>
              <div class="review-row"><span class="rk">Student ID</span><strong class="rv">{studentId || "—"}</strong></div>
            </div>
          </div>
          <div class="notice">
            <span class="notice-icon">✅</span>
            <p>Your application will be reviewed by the Alumni Office within <strong>2–3 business days</strong>. You will receive a confirmation email once your account is verified.</p>
          </div>
        </div>
      {/if}

      <div class="form-footer">
        <button class="btn-back" on:click={prevStep}>
          ← {step === 1 ? 'Back to Login' : 'Previous Step'}
        </button>
        <button class="btn-next" on:click={step < 3 ? nextStep : submit}>
          {step < 3 ? 'Continue →' : 'Submit Application ✓'}
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .page {
    display: flex;
    min-height: 100vh;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .left-panel {
    width: 360px;
    background: #003366;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    flex-shrink: 0;
  }

  .left-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 36px 32px;
  }

  .logo-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 48px;
    cursor: pointer;
  }

  .logo {
    width: 44px;
    height: 44px;
    background: white;
    padding: 4px;
    border-radius: 10px;
    object-fit: contain;
  }

  .brand-name { color: #FFD700; font-size: 16px; font-weight: 800; line-height: 1.1; }
  .brand-sub { color: rgba(255,255,255,0.5); font-size: 11px; }

  .steps-nav { flex: 1; display: flex; flex-direction: column; gap: 0; }

  .step-item { display: flex; gap: 16px; position: relative; padding-bottom: 32px; }
  .step-item.current .step-num { background: #FFD700; color: #003366; }
  .step-item.done .step-num { background: #22c55e; color: white; }
  .step-num {
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.5);
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-weight: 800; flex-shrink: 0; z-index: 1;
  }
  .step-connector {
    position: absolute;
    left: 17px;
    top: 36px;
    width: 2px;
    bottom: 0;
    background: rgba(255,255,255,0.15);
  }
  .step-item.done .step-connector { background: rgba(34,197,94,0.4); }
  .step-item.current .step-connector { background: rgba(255,215,0,0.3); }

  .step-label { color: white; font-size: 14px; font-weight: 700; }
  .step-desc { color: rgba(255,255,255,0.5); font-size: 12px; margin-top: 2px; }

  .left-footer { margin-top: auto; }
  .already { color: rgba(255,255,255,0.5); font-size: 13px; margin-bottom: 8px; }
  .signin-link { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 10px; padding: 11px 20px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; width: 100%; }

  .right-panel { flex: 1; background: #f8fafc; display: flex; align-items: flex-start; justify-content: center; padding: 48px 60px; }
  .form-container { width: 100%; max-width: 560px; }

  .progress-bar-wrap { height: 4px; background: #e5e7eb; border-radius: 2px; margin-bottom: 36px; }
  .progress-fill { height: 100%; background: #FFD700; border-radius: 2px; transition: width 0.4s ease; }

  .step-eyebrow { color: #003366; font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-bottom: 8px; }
  h2 { font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700; color: #1a1a2e; margin-bottom: 8px; }
  .form-desc { color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 28px; }

  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .field { margin-bottom: 18px; }
  label { display: block; font-size: 13px; font-weight: 600; color: #444; margin-bottom: 7px; }
  input {
    width: 100%; padding: 13px 16px; border: 1.5px solid #e5e7eb; border-radius: 10px;
    font-size: 14px; font-family: inherit; outline: none; background: white; color: #1a1a2e;
    transition: border-color 0.2s;
  }
  input:focus { border-color: #003366; box-shadow: 0 0 0 3px rgba(0,51,102,0.08); }

  .upload-zone {
    border: 2px dashed #c5cae9; border-radius: 14px; padding: 36px 24px;
    text-align: center; background: white; cursor: pointer;
  }
  .upload-icon { font-size: 36px; margin-bottom: 10px; }
  .upload-title { font-size: 15px; font-weight: 700; color: #333; margin-bottom: 6px; }
  .upload-sub { font-size: 12px; color: #aaa; margin-bottom: 16px; }
  .upload-btn { background: #003366; color: white; border: none; border-radius: 8px; padding: 10px 22px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; }

  .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
  .review-group { background: white; border-radius: 12px; padding: 18px; border: 1px solid #f0f4f8; }
  .rg-title { font-size: 12px; font-weight: 700; color: #003366; letter-spacing: 0.5px; margin-bottom: 12px; text-transform: uppercase; }
  .review-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f8fafc; font-size: 13px; gap: 10px; }
  .review-row:last-child { border-bottom: none; }
  .rk { color: #aaa; flex-shrink: 0; }
  .rv { color: #1a1a2e; text-align: right; word-break: break-word; }

  .notice { display: flex; gap: 12px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 16px 18px; font-size: 13px; color: #065f46; line-height: 1.6; margin-bottom: 20px; }
  .notice-icon { font-size: 20px; flex-shrink: 0; }

  .form-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
  .btn-back { background: none; border: 1.5px solid #e5e7eb; color: #666; border-radius: 10px; padding: 13px 22px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }
  .btn-back:hover { border-color: #003366; color: #003366; }
  .btn-next { background: #003366; color: white; border: none; border-radius: 10px; padding: 13px 32px; font-size: 15px; font-weight: 800; cursor: pointer; font-family: inherit; transition: all 0.2s; }
  .btn-next:hover { background: #004080; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,51,102,0.3); }
</style>
