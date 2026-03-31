export function App() {
  const slides = [
    // 0 – Title
    `<div class="slide active" id="slide-0">
      <div class="slide-tag">Case Study Presentation · Mobile Health</div>
      <h1 class="hero-title">BodyQuest</h1>
      <p class="subtitle">Gamified Health Education for Adolescents<br/>Android · HL7 FHIR R4 · Ages 13–19</p>
      <div class="hero-badges">
        <span class="badge badge-purple">🎮 Gamification</span>
        <span class="badge badge-cyan">🏥 FHIR R4</span>
        <span class="badge badge-amber">📱 Android</span>
        <span class="badge badge-green">🎓 mHealth</span>
        <span class="badge badge-red">🔒 HIPAA / GDPR</span>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><div class="val">89%</div><div class="lbl">Knowledge Retention</div></div>
        <div class="hero-stat"><div class="val">92%</div><div class="lbl">Engagement Rate</div></div>
        <div class="hero-stat"><div class="val">3</div><div class="lbl">Themed Worlds</div></div>
        <div class="hero-stat"><div class="val">4</div><div class="lbl">FHIR Resources</div></div>
      </div>
    </div>`,

    // 1 – Problem
    `<div class="slide" id="slide-1">
      <div class="slide-tag">Slide 2 · Background</div>
      <h2 class="slide-title">The Problem</h2>
      <div class="grid-3">
        <div class="card card-red">
          <h3>🚫 Embarrassment</h3>
          <p>Students avoid asking sensitive questions in classrooms. Stigma around reproductive &amp; menstrual health silences learning.</p>
        </div>
        <div class="card card-amber">
          <h3>😴 Disengagement</h3>
          <p>Static textbooks fail digital natives. Only <strong style="color:#fcd34d">40%</strong> attended traditional health classes actively.</p>
        </div>
        <div class="card card-accent">
          <h3>🗄️ Data Silos</h3>
          <p>Schools lack a standardized way to track health education outcomes or connect them to school nurses securely.</p>
        </div>
      </div>
      <div style="margin-top:1.5rem" class="grid-3">
        <div class="card card-cyan">
          <h3>💊 Sexual &amp; Reproductive Health</h3>
          <p>Unplanned pregnancies, STIs, widespread misinformation among teens.</p>
        </div>
        <div class="card card-cyan">
          <h3>🧼 Hygiene</h3>
          <p>Menstrual health stigma, dental neglect, body odor misconceptions.</p>
        </div>
        <div class="card card-cyan">
          <h3>🥗 Nutrition</h3>
          <p>Obesity, eating disorders, micronutrient deficiencies in adolescents.</p>
        </div>
      </div>
    </div>`,

    // 2 – Solution / Worlds
    `<div class="slide" id="slide-2">
      <div class="slide-tag">Slide 3 · The Solution</div>
      <h2 class="slide-title">Gamified Architecture – The Adventure Map</h2>
      <div class="grid-2" style="gap:2rem;align-items:start">
        <div>
          <div class="grid-3" style="margin-bottom:1.2rem">
            <div class="card card-accent" style="text-align:center">
              <div style="font-size:2rem">🏰</div>
              <h3>World 1</h3>
              <p>Reproductive Realm<br/><em>Sexual Health</em></p>
            </div>
            <div class="card card-cyan" style="text-align:center">
              <div style="font-size:2rem">🛡️</div>
              <h3>World 2</h3>
              <p>Cleanliness Crusade<br/><em>Hygiene</em></p>
            </div>
            <div class="card card-amber" style="text-align:center">
              <div style="font-size:2rem">⚡</div>
              <h3>World 3</h3>
              <p>Nutrition Nexus<br/><em>Diet &amp; Fitness</em></p>
            </div>
          </div>
          <div class="grid-2">
            <div class="card card-green">
              <h3>⚔️ Quests</h3>
              <p>5–10 min mini-games: match STI prevention methods, build a balanced plate.</p>
            </div>
            <div class="card card-green">
              <h3>👾 Boss Battles</h3>
              <p>Cumulative quizzes that must be passed to unlock the next content tier.</p>
            </div>
            <div class="card card-green">
              <h3>🪙 Rewards</h3>
              <p>In-app currency to customize avatars, driving continued engagement.</p>
            </div>
            <div class="card card-green">
              <h3>🎯 Goals</h3>
              <p>Behavioral contracts set after each module — tracked via FHIR Goal resources.</p>
            </div>
          </div>
        </div>
        <!-- Phone simulation -->
        <div class="phone-wrap">
          <div class="phone">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <h4>🗺️ Adventure Map</h4>
              <div class="world-map">
                <div class="world-node">
                  <span class="icon">🏰</span>
                  <span class="label">Reproductive Realm</span>
                  <span class="status status-done">✔ Done</span>
                </div>
                <div class="world-node" style="border-color:#f59e0b">
                  <span class="icon">🛡️</span>
                  <span class="label">Cleanliness Crusade</span>
                  <span class="status status-active">▶ Active</span>
                </div>
                <div class="world-node">
                  <span class="icon">⚡</span>
                  <span class="label">Nutrition Nexus</span>
                  <span class="status status-lock">🔒 Locked</span>
                </div>
              </div>
              <div class="xp-bar-wrap">
                <div class="xp-label">XP: 340 / 500</div>
                <div class="xp-bar"><div class="xp-fill" style="width:68%"></div></div>
              </div>
              <div style="margin-top:0.6rem;font-size:0.65rem;color:#94a3b8">🪙 120 coins · Level 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>`,

    // 3 – FHIR Data Model
    `<div class="slide" id="slide-3">
      <div class="slide-tag">Slide 4 · FHIR Data Model</div>
      <h2 class="slide-title">FHIR-Enabled Backend</h2>
      <div class="grid-2" style="gap:1.2rem">
        <div>
          <div class="grid-2" style="margin-bottom:1rem">
            <div class="card card-accent">
              <h3>👤 Patient</h3>
              <p>Anonymized demographics (age, grade, language). Patient.id links all health education data. No unencrypted PII.</p>
            </div>
            <div class="card card-cyan">
              <h3>📚 Library</h3>
              <p>Each game module = one Library resource. Versioned (CDC 2024 / WHO 2024). Tagged by topic, difficulty, language.</p>
            </div>
            <div class="card card-amber">
              <h3>📊 Observation</h3>
              <p>Quiz scores (LOINC 97509-2), engagement metrics, self-reported behaviors (valueCodeableConcept Yes/No).</p>
            </div>
            <div class="card card-green">
              <h3>🎯 Goal</h3>
              <p>Behavioral contracts: "Change sanitary product every 4 hrs." Lifecycle: active → achieved / cancelled.</p>
            </div>
          </div>
        </div>
        <!-- FHIR JSON simulation -->
        <div>
          <div class="fhir-label">Sample Observation Resource (Quiz Score)</div>
          <div class="fhir-block">
{<br/>
&nbsp;&nbsp;<span class="fhir-key">"resourceType"</span>: <span class="fhir-str">"Observation"</span>,<br/>
&nbsp;&nbsp;<span class="fhir-key">"status"</span>: <span class="fhir-str">"final"</span>,<br/>
&nbsp;&nbsp;<span class="fhir-key">"code"</span>: {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fhir-key">"coding"</span>: [{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="fhir-key">"system"</span>: <span class="fhir-str">"http://loinc.org"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="fhir-key">"code"</span>: <span class="fhir-str">"97509-2"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;}]<br/>
&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;<span class="fhir-key">"subject"</span>: { <span class="fhir-key">"reference"</span>: <span class="fhir-str">"Patient/stu-042"</span> },<br/>
&nbsp;&nbsp;<span class="fhir-key">"valueQuantity"</span>: {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fhir-key">"value"</span>: <span class="fhir-num">89</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fhir-key">"unit"</span>: <span class="fhir-str">"%"</span><br/>
&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;<span class="fhir-key">"interpretation"</span>: [{ <span class="fhir-key">"text"</span>: <span class="fhir-str">"Pass"</span> }]<br/>
}
          </div>
          <div class="fhir-label" style="margin-top:0.8rem">Sample Goal Resource</div>
          <div class="fhir-block">
{<br/>
&nbsp;&nbsp;<span class="fhir-key">"resourceType"</span>: <span class="fhir-str">"Goal"</span>,<br/>
&nbsp;&nbsp;<span class="fhir-key">"lifecycleStatus"</span>: <span class="fhir-str">"active"</span>,<br/>
&nbsp;&nbsp;<span class="fhir-key">"description"</span>: { <span class="fhir-key">"text"</span>: <span class="fhir-str">"Eat 3 servings of vegetables, 5 days/week"</span> },<br/>
&nbsp;&nbsp;<span class="fhir-key">"subject"</span>: { <span class="fhir-key">"reference"</span>: <span class="fhir-str">"Patient/stu-042"</span> }<br/>
}
          </div>
        </div>
      </div>
    </div>`,

    // 4 – Workflow
    `<div class="slide" id="slide-4">
      <div class="slide-tag">Slide 5 · Implementation</div>
      <h2 class="slide-title">App Workflow</h2>
      <div class="grid-2" style="gap:2rem;align-items:start">
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <h4>Onboarding</h4>
              <p>School nurse creates Patient resources. Students log in and consent to data tracking.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <h4>Education – Library Consumption</h4>
              <p>App queries FHIR server for Library resources filtered by student age/grade. Student navigates the gamified map.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <h4>Assessment – Observation Generation</h4>
              <p>Completing a quiz or simulation (e.g., virtual teeth brushing) auto-generates an Observation bundle posted to FHIR server.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <div class="step-body">
              <h4>Goal Setting</h4>
              <p>Low score (≤60%) → app suggests "Review module" Goal. High engagement → "Mentor a peer" Goal.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">5</div>
            <div class="step-body">
              <h4>Analytics &amp; Review</h4>
              <p>School nurse dashboard visualizes aggregated Observations: stuck concepts, hygiene trends, Goal progress.</p>
            </div>
          </div>
        </div>
        <!-- Nurse dashboard simulation -->
        <div class="phone" style="width:100%;max-width:320px;margin:0 auto">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <h4>🩺 Nurse Dashboard</h4>
            <div style="font-size:0.68rem;color:#94a3b8;margin-bottom:0.5rem">Class 9B · 28 students</div>
            <div style="display:flex;flex-direction:column;gap:0.4rem">
              <div style="background:#1e2235;border-radius:6px;padding:0.4rem 0.6rem">
                <div style="font-size:0.68rem;color:#c4b5fd">Hygiene Module Avg</div>
                <div style="font-size:1rem;color:#10b981;font-weight:700">74%</div>
                <div style="height:4px;background:#2d3555;border-radius:999px;margin-top:3px"><div style="width:74%;height:100%;background:#10b981;border-radius:999px"></div></div>
              </div>
              <div style="background:#1e2235;border-radius:6px;padding:0.4rem 0.6rem">
                <div style="font-size:0.68rem;color:#c4b5fd">Nutrition Module Avg</div>
                <div style="font-size:1rem;color:#f59e0b;font-weight:700">61%</div>
                <div style="height:4px;background:#2d3555;border-radius:999px;margin-top:3px"><div style="width:61%;height:100%;background:#f59e0b;border-radius:999px"></div></div>
              </div>
              <div style="background:#1e2235;border-radius:6px;padding:0.4rem 0.6rem">
                <div style="font-size:0.68rem;color:#c4b5fd">SRH Module Avg</div>
                <div style="font-size:1rem;color:#06b6d4;font-weight:700">89%</div>
                <div style="height:4px;background:#2d3555;border-radius:999px;margin-top:3px"><div style="width:89%;height:100%;background:#06b6d4;border-radius:999px"></div></div>
              </div>
              <div style="background:#7f1d1d;border-radius:6px;padding:0.4rem 0.6rem;font-size:0.68rem;color:#fca5a5">
                ⚠️ 6 students stuck on "Contraception" quest
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,

    // 5 – Use Cases
    `<div class="slide" id="slide-5">
      <div class="slide-tag">Slide 6 · Use Cases</div>
      <h2 class="slide-title">Key Use Cases</h2>
      <div class="uc-diagram" style="margin-bottom:1.5rem">
        <div class="uc-actor">
          <div class="avatar" style="background:#1e1b4b">🧑‍🎓</div>
          <span>Student</span>
        </div>
        <div class="uc-connector">→</div>
        <div class="uc-cases">
          <div style="font-size:0.7rem;color:#94a3b8;margin-bottom:0.3rem">«system» BodyQuest App</div>
          <div class="uc-case">UC-1: Complete a health quest / mini-game</div>
          <div class="uc-case">UC-2: Take a Boss Battle quiz</div>
          <div class="uc-case">UC-3: Set a personal health Goal</div>
          <div class="uc-case">UC-4: Track Goal progress &amp; earn rewards</div>
          <div class="uc-case cyan">UC-5: View personalized learning path</div>
        </div>
        <div class="uc-connector">←</div>
        <div class="uc-actor">
          <div class="avatar" style="background:#064e3b">🩺</div>
          <span>School Nurse</span>
        </div>
      </div>
      <div class="uc-diagram">
        <div class="uc-actor">
          <div class="avatar" style="background:#1c1917">🏫</div>
          <span>School Admin</span>
        </div>
        <div class="uc-connector">→</div>
        <div class="uc-cases">
          <div style="font-size:0.7rem;color:#94a3b8;margin-bottom:0.3rem">«system» BodyQuest App</div>
          <div class="uc-case amber">UC-6: Onboard students (create Patient resources)</div>
          <div class="uc-case amber">UC-7: Assign curriculum Library by grade</div>
          <div class="uc-case cyan">UC-8: View aggregated Observation analytics</div>
          <div class="uc-case cyan">UC-9: Export FHIR data to school EHR / SIS</div>
          <div class="uc-case">UC-10: Flag at-risk students for follow-up</div>
        </div>
      </div>
    </div>`,

    // 6 – Outcomes
    `<div class="slide" id="slide-6">
      <div class="slide-tag">Slide 7 · Results</div>
      <h2 class="slide-title">Outcomes &amp; Results (6-Month Study)</h2>
      <table class="stats-table" style="margin-bottom:1.5rem">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Baseline</th>
            <th>Post-Implementation</th>
            <th>Δ Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Knowledge Retention (Quiz Avg)</td>
            <td>68%</td>
            <td class="stat-up">89%</td>
            <td class="stat-up">+21%</td>
          </tr>
          <tr>
            <td>Student Engagement Rate</td>
            <td>40% (attended class)</td>
            <td class="stat-up">92% (active app users)</td>
            <td class="stat-up">+52%</td>
          </tr>
          <tr>
            <td>Stigma Reduction (SRH Goals set)</td>
            <td>25% asked questions</td>
            <td class="stat-up">78% set SRH Goals</td>
            <td class="stat-up">+53%</td>
          </tr>
          <tr>
            <td>Nutrition Adherence (daily veggies)</td>
            <td>30%</td>
            <td class="stat-up">55%</td>
            <td class="stat-up">+25%</td>
          </tr>
        </tbody>
      </table>
      <div class="card card-accent">
        <h3>🔍 Key Finding</h3>
        <p>FHIR Observation data identified a <strong style="color:#c4b5fd">Hygiene knowledge gap</strong> specifically among 9th-grade males. A targeted Library update (interactive game on body odor &amp; acne) delivered to this cohort produced a <strong style="color:#c4b5fd">+40% increase</strong> in hygiene-related Goal completion within 3 weeks.</p>
      </div>
    </div>`,

    // 7 – Challenges
    `<div class="slide" id="slide-7">
      <div class="slide-tag">Slide 8 · Challenges</div>
      <h2 class="slide-title">Challenges &amp; Mitigations</h2>
      <div class="grid-3">
        <div class="card card-red">
          <h3>🔒 Data Privacy &amp; Ethics</h3>
          <p><strong style="color:#fca5a5">Challenge:</strong> Sexual health Observations are highly sensitive — HIPAA/GDPR compliance required.</p>
          <br/>
          <p><strong style="color:#6ee7b7">Mitigation:</strong> FHIR Consent resources implemented. Data de-identified by default; nurse access requires explicit student/parent consent.</p>
        </div>
        <div class="card card-amber">
          <h3>🔗 Interoperability</h3>
          <p><strong style="color:#fcd34d">Challenge:</strong> School IT infrastructure often lacks a native FHIR server.</p>
          <br/>
          <p><strong style="color:#6ee7b7">Mitigation:</strong> Lightweight FHIR Gateway translates app data to standard FHIR JSON, enabling export to existing SIS or state immunization registries.</p>
        </div>
        <div class="card card-cyan">
          <h3>📱 Screen Time Fatigue</h3>
          <p><strong style="color:#67e8f9">Challenge:</strong> Students may treat this as "just another app" and disengage.</p>
          <br/>
          <p><strong style="color:#6ee7b7">Mitigation:</strong> Boss Battle timed mechanics + configurable 20-min/day session cap via Goal constraints prevent burnout and encourage focused learning.</p>
        </div>
      </div>
    </div>`,

    // 8 – Conclusion
    `<div class="slide" id="slide-8">
      <div class="slide-tag">Slide 9 · Conclusion</div>
      <h2 class="slide-title">Conclusion</h2>
      <div class="grid-2" style="gap:1.5rem;align-items:start">
        <div>
          <div class="card card-accent" style="margin-bottom:1rem">
            <h3>🎮 Gamification is a Viable Methodology</h3>
            <p>BodyQuest proves that game mechanics are not a gimmick — they measurably improve adolescent health literacy and behavioral outcomes.</p>
          </div>
          <div class="card card-cyan" style="margin-bottom:1rem">
            <h3>🏥 FHIR Bridges Informal &amp; Formal Healthcare</h3>
            <p>Mapping Library (content), Observation (outcomes), and Goal (behavior) to FHIR R4 connects mobile learning to real healthcare and education records.</p>
          </div>
          <div class="card card-green">
            <h3>📈 Scalable &amp; Interoperable</h3>
            <p>The FHIR Gateway architecture allows BodyQuest to integrate with any school EHR, SIS, or state health registry without vendor lock-in.</p>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:1rem">
          <div class="card" style="text-align:center;padding:2rem">
            <div style="font-size:3rem;margin-bottom:0.5rem">🏆</div>
            <div style="font-family:'Orbitron',sans-serif;font-size:1.1rem;color:#7c3aed">BodyQuest</div>
            <div style="font-size:0.8rem;color:#94a3b8;margin-top:0.4rem">Where Health Education Meets Adventure</div>
            <div style="margin-top:1.2rem;display:flex;flex-wrap:wrap;gap:0.4rem;justify-content:center">
              <span class="badge badge-purple">Patient</span>
              <span class="badge badge-cyan">Library</span>
              <span class="badge badge-amber">Observation</span>
              <span class="badge badge-green">Goal</span>
            </div>
          </div>
          <div class="card card-amber" style="font-size:0.82rem;color:#94a3b8;text-align:center">
            <strong style="color:#fcd34d">Platform:</strong> Android &nbsp;|&nbsp;
            <strong style="color:#fcd34d">Standard:</strong> HL7 FHIR R4 &nbsp;|&nbsp;
            <strong style="color:#fcd34d">Audience:</strong> Ages 13–19
          </div>
        </div>
      </div>
    </div>`,
  ];

  const dotsHtml = slides
    .map((_, i) => `<div class="dot${i === 0 ? ' active' : ''}" onclick="bqGoTo(${i})"></div>`)
    .join('');

  return (
    <div
      class="presentation"
      x-data={`{
        current: 0,
        total: ${slides.length},
        goTo(n) { this.current = n; this.sync(); },
        next() { if (this.current < this.total - 1) { this.current++; this.sync(); } },
        prev() { if (this.current > 0) { this.current--; this.sync(); } },
        sync() {
          document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === this.current));
          document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === this.current));
          document.querySelector('.progress-fill').style.width = ((this.current + 1) / this.total * 100) + '%';
          document.getElementById('slide-counter').textContent = 'Slide ' + (this.current + 1) + ' of ' + this.total;
          document.getElementById('btn-prev').disabled = this.current === 0;
          document.getElementById('btn-next').disabled = this.current === this.total - 1;
        }
      }`}
      x-init="window.bqGoTo = (n) => { $data.goTo(n); }; window.bqNext = () => $data.next(); window.bqPrev = () => $data.prev(); document.addEventListener('keydown', e => { if(e.key==='ArrowRight') $data.next(); if(e.key==='ArrowLeft') $data.prev(); }); $nextTick(() => { document.getElementById('btn-prev').disabled = true; })"
    >
      <div class="progress-bar">
        <div class="progress-fill" style={`width:${(1 / slides.length) * 100}%`}></div>
      </div>

      <div class="slides-viewport" innerHTML={slides.join('')}></div>

      <div class="nav-bar">
        <button class="nav-btn" id="btn-prev" onclick="window.bqPrev()">← Prev</button>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem">
          <div class="nav-dots" innerHTML={dotsHtml}></div>
          <span class="slide-counter" id="slide-counter">Slide 1 of {slides.length}</span>
        </div>
        <button class="nav-btn" id="btn-next" onclick="window.bqNext()">Next →</button>
      </div>
    </div>
  );
}
