<template>
  <div class="presentation" @keydown.right="next" @keydown.left="prev" tabindex="0" ref="root">
    <!-- Progress bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressWidth }"></div>
    </div>

    <!-- Game Demo Overlay -->
    <div v-if="showGameDemo" class="demo-overlay" @click="showGameDemo = false">
      <GameDemo @close="showGameDemo = false" @click.stop />
    </div>

    <!-- Slides -->
    <div class="slides-viewport">
      <!-- Slide 0: Title -->
      <div class="slide" :class="{ active: current === 0 }">
        <div class="slide-tag">Case Study Presentation · Mobile Health · Rwanda</div>
        <h1 class="hero-title">UbuzimaFun</h1>
        <p class="subtitle">A Fun Game That Teaches Everyone About Health<br />Mobile App · Ages 12+</p>
        <div class="hero-badges">
          <span class="badge badge-purple">🎮 Game-Based Learning</span>
          <span class="badge badge-cyan">🏥 Healthcare System</span>
          <span class="badge badge-amber">📱 Mobile App</span>
          <span class="badge badge-green">🎓 Education</span>
          <span class="badge badge-red">🔒 Privacy Protected</span>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><div class="val">89%</div><div class="lbl">People Remember</div></div>
          <div class="hero-stat"><div class="val">92%</div><div class="lbl">People Engaged</div></div>
          <div class="hero-stat"><div class="val">3</div><div class="lbl">Game Worlds</div></div>
          <div class="hero-stat"><div class="val">Ages 12+</div><div class="lbl">Teens to Adults</div></div>
        </div>
      </div>

      <!-- Slide 1: Problem -->
      <div class="slide" :class="{ active: current === 1 }">
        <div class="slide-tag">Slide 2 · Background</div>
        <h2 class="slide-title">The Problem</h2>
        <div class="grid-3">
          <div class="card card-red">
            <h3>🚫 Embarrassment</h3>
            <p>People feel shy to ask questions about private health topics. They stay quiet and don't learn.</p>
          </div>
          <div class="card card-amber">
            <h3>😴 Disengagement</h3>
            <p>Boring textbooks don't work. Only <strong style="color:#fcd34d">40%</strong> pay attention in regular health classes.</p>
          </div>
          <div class="card card-accent">
            <h3>🗄️ Data Silos</h3>
            <p>Health centers have no easy way to track what people learn or share info safely.</p>
          </div>
        </div>
        <div class="grid-3" style="margin-top:1.5rem">
          <div class="card card-cyan"><h3>💊 Sexual Health</h3><p>People don't know how to stay safe. Many get wrong information. Adults also need to learn.</p></div>
          <div class="card card-cyan"><h3>🧼 Hygiene</h3><p>People don't know proper cleaning habits. Everyone feels embarrassed to ask about body health.</p></div>
          <div class="card card-cyan"><h3>🥗 Nutrition</h3><p>Many people eat unhealthy food. They don't know what their body needs. This affects all ages.</p></div>
        </div>
      </div>

      <!-- Slide 2: Solution -->
      <div class="slide" :class="{ active: current === 2 }">
        <div class="slide-tag">Slide 3 · The Solution</div>
        <h2 class="slide-title">How It Works – The Game Map</h2>
        <div class="grid-2" style="gap:2rem;align-items:start">
          <div>
            <div class="grid-3" style="margin-bottom:1.2rem">
              <div class="card card-accent" style="text-align:center"><div style="font-size:2rem">🏰</div><h3>World 1</h3><p>Reproductive Realm<br /><em>Sexual Health</em></p></div>
              <div class="card card-cyan" style="text-align:center"><div style="font-size:2rem">🛡️</div><h3>World 2</h3><p>Cleanliness Crusade<br /><em>Hygiene</em></p></div>
              <div class="card card-amber" style="text-align:center"><div style="font-size:2rem">⚡</div><h3>World 3</h3><p>Nutrition Nexus<br /><em>Diet &amp; Fitness</em></p></div>
            </div>
            <div class="grid-2">
              <div class="card card-green"><h3>⚔️ Quests</h3><p>Short 5-10 minute games where you learn by playing. Match healthy foods, learn about staying safe.</p><button class="demo-btn" @click="showGameDemo = true">🎮 Play Demo</button></div>
              <div class="card card-green"><h3>👾 Boss Battles</h3><p>Big quizzes at the end of each world. Pass them to unlock the next adventure!</p></div>
              <div class="card card-green"><h3>🪙 Rewards</h3><p>Earn coins to dress up your character. The more you play, the cooler you look!</p></div>
              <div class="card card-green"><h3>🎯 Goals</h3><p>Set personal health goals like "eat more vegetables" and track your progress.</p></div>
            </div>
          </div>
          <div class="phone-wrap">
            <div class="phone">
              <div class="phone-notch"></div>
              <div class="phone-screen">
                <h4>🗺️ Adventure Map</h4>
                <div class="world-map">
                  <div class="world-node"><span class="icon">🏰</span><span class="label">Reproductive Realm</span><span class="status status-done">✔ Done</span></div>
                  <div class="world-node" style="border-color:#f59e0b"><span class="icon">🛡️</span><span class="label">Cleanliness Crusade</span><span class="status status-active">▶ Active</span></div>
                  <div class="world-node"><span class="icon">⚡</span><span class="label">Nutrition Nexus</span><span class="status status-lock">🔒 Locked</span></div>
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
      </div>

      <!-- Slide 3: FHIR -->
      <div class="slide" :class="{ active: current === 3 }">
        <div class="slide-tag">Slide 4 · FHIR Data Model</div>
        <h2 class="slide-title">How We Store Your Data Safely</h2>
        <div class="grid-2" style="gap:1.2rem">
          <div>
            <div class="grid-2" style="margin-bottom:1rem">
              <div class="card card-accent"><h3>👤 Person Info</h3><p>We keep your age and location private. No one can see your real name. Everything is secret and safe.</p></div>
              <div class="card card-cyan"><h3>📚 Lessons</h3><p>Each game teaches different health topics. We use lessons approved by health experts.</p></div>
              <div class="card card-amber"><h3>📊 Your Scores</h3><p>We track your quiz scores and how much you play. This helps health workers see what you learned.</p></div>
              <div class="card card-green"><h3>🎯 Your Goals</h3><p>Track goals like "brush teeth twice daily." Mark them complete when you do them!</p></div>
            </div>
          </div>
          <div>
            <div class="fhir-label">Example: How We Save Your Quiz Score</div>
            <div class="fhir-block">
              <span class="fhir-key">"resourceType"</span>: <span class="fhir-str">"Observation"</span>,<br />
              <span class="fhir-key">"status"</span>: <span class="fhir-str">"final"</span>,<br />
              <span class="fhir-key">"code"</span>: { <span class="fhir-key">"coding"</span>: [{ <span class="fhir-key">"system"</span>: <span class="fhir-str">"http://loinc.org"</span>, <span class="fhir-key">"code"</span>: <span class="fhir-str">"97509-2"</span> }] },<br />
              <span class="fhir-key">"subject"</span>: { <span class="fhir-key">"reference"</span>: <span class="fhir-str">"Patient/stu-042"</span> },<br />
              <span class="fhir-key">"valueQuantity"</span>: { <span class="fhir-key">"value"</span>: <span class="fhir-num">89</span>, <span class="fhir-key">"unit"</span>: <span class="fhir-str">"%"</span> },<br />
              <span class="fhir-key">"interpretation"</span>: [{ <span class="fhir-key">"text"</span>: <span class="fhir-str">"Pass"</span> }]
            </div>
            <div class="fhir-label" style="margin-top:0.8rem">Example: How We Save Your Goals</div>
            <div class="fhir-block">
              <span class="fhir-key">"resourceType"</span>: <span class="fhir-str">"Goal"</span>,<br />
              <span class="fhir-key">"lifecycleStatus"</span>: <span class="fhir-str">"active"</span>,<br />
              <span class="fhir-key">"description"</span>: { <span class="fhir-key">"text"</span>: <span class="fhir-str">"Eat 3 servings of vegetables, 5 days/week"</span> },<br />
              <span class="fhir-key">"subject"</span>: { <span class="fhir-key">"reference"</span>: <span class="fhir-str">"Patient/stu-042"</span> }
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 4: Workflow -->
      <div class="slide" :class="{ active: current === 4 }">
        <div class="slide-tag">Slide 5 · Implementation</div>
        <h2 class="slide-title">App Workflow</h2>
        <div class="grid-2" style="gap:2rem;align-items:start">
          <div class="steps">
            <div class="step" v-for="step in workflowSteps" :key="step.num">
              <div class="step-num">{{ step.num }}</div>
              <div class="step-body"><h4>{{ step.title }}</h4><p>{{ step.desc }}</p></div>
            </div>
          </div>
          <div class="phone" style="width:100%;max-width:320px;margin:0 auto">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <h4>🩺 Nurse Dashboard</h4>
              <div style="font-size:0.68rem;color:#94a3b8;margin-bottom:0.5rem">Class 9B · 28 students</div>
              <div style="display:flex;flex-direction:column;gap:0.4rem">
                <div v-for="m in nurseMetrics" :key="m.label" style="background:#1e2235;border-radius:6px;padding:0.4rem 0.6rem">
                  <div style="font-size:0.68rem;color:#c4b5fd">{{ m.label }}</div>
                  <div :style="{ fontSize: '1rem', color: m.color, fontWeight: 700 }">{{ m.val }}%</div>
                  <div style="height:4px;background:#2d3555;border-radius:999px;margin-top:3px">
                    <div :style="{ width: m.val + '%', height: '100%', background: m.color, borderRadius: '999px' }"></div>
                  </div>
                </div>
                <div style="background:#7f1d1d;border-radius:6px;padding:0.4rem 0.6rem;font-size:0.68rem;color:#fca5a5">
                  ⚠️ 6 students stuck on "Contraception" quest
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 5: Use Cases -->
      <div class="slide" :class="{ active: current === 5 }">
        <div class="slide-tag">Slide 6 · Use Cases</div>
        <h2 class="slide-title">Key Use Cases</h2>
        <div class="uc-diagram" style="margin-bottom:1.5rem">
          <div class="uc-actor"><div class="avatar" style="background:#1e1b4b">🧑‍🎓</div><span>Student</span></div>
          <div class="uc-connector">→</div>
          <div class="uc-cases">
            <div style="font-size:0.7rem;color:#94a3b8;margin-bottom:0.3rem">«system» BodyQuest App</div>
            <div class="uc-case">Play health games and learn</div>
            <div class="uc-case">Take big quizzes to level up</div>
            <div class="uc-case">Set personal health goals</div>
            <div class="uc-case">Track goals and earn coins</div>
            <div class="uc-case cyan">See what to learn next</div>
          </div>
          <div class="uc-connector">←</div>
          <div class="uc-actor"><div class="avatar" style="background:#064e3b">🩺</div><span>School Nurse</span></div>
        </div>
        <div class="uc-diagram">
          <div class="uc-actor"><div class="avatar" style="background:#1c1917">🏫</div><span>School Admin</span></div>
          <div class="uc-connector">→</div>
          <div class="uc-cases">
            <div style="font-size:0.7rem;color:#94a3b8;margin-bottom:0.3rem">«system» BodyQuest App</div>
            <div class="uc-case amber">Add new students to the system</div>
            <div class="uc-case amber">Choose lessons for each grade</div>
            <div class="uc-case cyan">See how all students are doing</div>
            <div class="uc-case cyan">Send reports to school records</div>
            <div class="uc-case">Find students who need extra help</div>
          </div>
        </div>
      </div>

      <!-- Slide 6: Outcomes -->
      <div class="slide" :class="{ active: current === 6 }">
        <div class="slide-tag">Slide 7 · Results</div>
        <h2 class="slide-title">Results After 6 Months</h2>
        <table class="stats-table" style="margin-bottom:1.5rem">
          <thead>
            <tr><th>Metric</th><th>Baseline</th><th>Post-Implementation</th><th>Δ Change</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in outcomes" :key="row.metric">
              <td>{{ row.metric }}</td>
              <td>{{ row.before }}</td>
              <td class="stat-up">{{ row.after }}</td>
              <td class="stat-up">{{ row.delta }}</td>
            </tr>
          </tbody>
        </table>
        <div class="card card-accent">
          <h3>🔍 Key Finding</h3>
          <p>We found that 9th grade boys didn't know much about hygiene. We made a special game about body odor and acne just for them. After 3 weeks, <strong style="color:#c4b5fd">40% more boys</strong> started taking care of their hygiene!</p>
        </div>
      </div>

      <!-- Slide 7: Challenges -->
      <div class="slide" :class="{ active: current === 7 }">
        <div class="slide-tag">Slide 8 · Challenges</div>
        <h2 class="slide-title">Challenges &amp; Mitigations</h2>
        <div class="grid-3">
          <div class="card card-red">
            <h3>🔒 Data Privacy &amp; Ethics</h3>
            <p><strong style="color:#fca5a5">Problem:</strong> Health information is very private. We must follow strict privacy laws.</p><br />
            <p><strong style="color:#6ee7b7">Solution:</strong> We hide your real name. Nurses can only see your data if you and your parents say yes.</p>
          </div>
          <div class="card card-amber">
            <h3>🔗 Interoperability</h3>
            <p><strong style="color:#fcd34d">Problem:</strong> Most schools don't have modern computer systems to connect with our app.</p><br />
            <p><strong style="color:#6ee7b7">Solution:</strong> We built a bridge that works with any school system. Easy to connect!</p>
          </div>
          <div class="card card-cyan">
            <h3>📱 Screen Time Fatigue</h3>
            <p><strong style="color:#67e8f9">Problem:</strong> Students might get bored and stop using the app.</p><br />
            <p><strong style="color:#6ee7b7">Solution:</strong> We limit play to 20 minutes per day. This keeps it fun and prevents students from getting tired of it.</p>
          </div>
        </div>
      </div>

      <!-- Slide 8: Conclusion -->
      <div class="slide" :class="{ active: current === 8 }">
        <div class="slide-tag">Slide 9 · Conclusion</div>
        <h2 class="slide-title">Conclusion</h2>
        <div class="grid-2" style="gap:1.5rem;align-items:start">
          <div>
            <div class="card card-accent" style="margin-bottom:1rem">
              <h3>🎮 Gamification is a Viable Methodology</h3>
              <p>UbuzimaFun proves that learning through games really works. Students learn more and remember better.</p>
            </div>
            <div class="card card-cyan" style="margin-bottom:1rem">
              <h3>🏥 FHIR Bridges Informal &amp; Formal Healthcare</h3>
              <p>Our app connects to real healthcare systems. Doctors and nurses can see what students learned.</p>
            </div>
            <div class="card card-green">
              <h3>📈 Scalable &amp; Interoperable</h3>
              <p>UbuzimaFun works with any school system. No special equipment needed. Easy to use anywhere.</p>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:1rem">
            <div class="card" style="text-align:center;padding:2rem">
              <div style="font-size:3rem;margin-bottom:0.5rem">🏆</div>
              <div style="font-family:'Orbitron',sans-serif;font-size:1.1rem;color:#7c3aed">UbuzimaFun</div>
              <div style="font-size:0.8rem;color:#94a3b8;margin-top:0.4rem">Where Health Education Meets Adventure</div>
              <div style="font-size:0.7rem;color:#6ee7b7;margin-top:0.3rem;font-style:italic">"Ubuzima" means "Health" in Kinyarwanda</div>
              <div style="margin-top:1.2rem;display:flex;flex-wrap:wrap;gap:0.4rem;justify-content:center">
                <span class="badge badge-purple">Patient</span>
                <span class="badge badge-cyan">Library</span>
                <span class="badge badge-amber">Observation</span>
                <span class="badge badge-green">Goal</span>
              </div>
            </div>
            <div class="card card-amber" style="font-size:0.82rem;color:#94a3b8;text-align:center">
              <strong style="color:#fcd34d">Works On:</strong> Android Phones &nbsp;|&nbsp;
              <strong style="color:#fcd34d">Safe:</strong> Healthcare Standard &nbsp;|&nbsp;
              <strong style="color:#fcd34d">For:</strong> Ages 12+
            </div>
            <div class="card" style="text-align:center;padding:1rem">
              <div style="font-size:0.9rem;color:#94a3b8;margin-bottom:0.5rem">📧 ubuzimafun@health.rw</div>
              <div style="font-size:0.9rem;color:#94a3b8">🌐 www.ubuzimafun.rw</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nav bar -->
    <div class="nav-bar">
      <button class="nav-btn" @click="prev" :disabled="current === 0">← Prev</button>
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem">
        <div class="nav-dots">
          <div
            v-for="(_, i) in total"
            :key="i"
            class="dot"
            :class="{ active: current === i }"
            @click="goTo(i)"
          ></div>
        </div>
        <span class="slide-counter">Slide {{ current + 1 }} of {{ total }}</span>
      </div>
      <button class="nav-btn" @click="next" :disabled="current === total - 1">Next →</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import GameDemo from './components/GameDemo.vue';

const total = 9;
const current = ref(0);
const root = ref<HTMLElement | null>(null);
const showGameDemo = ref(false);

const progressWidth = computed(() => `${((current.value + 1) / total) * 100}%`);

function goTo(n: number) { current.value = n; }
function next() { if (current.value < total - 1) current.value++; }
function prev() { if (current.value > 0) current.value--; }

onMounted(() => root.value?.focus());

const workflowSteps = [
  { num: 1, title: 'Sign Up', desc: 'Health worker or teacher helps you create an account. You agree to let us track your learning.' },
  { num: 2, title: 'Start Playing', desc: 'The app shows you games that match your age and level. Pick a world and start learning!' },
  { num: 3, title: 'Take Quizzes', desc: 'After playing games, take quizzes. Your scores are saved automatically.' },
  { num: 4, title: 'Set Goals', desc: 'If you score low, the app suggests reviewing. If you do great, help other people!' },
  { num: 5, title: 'Health Worker Checks', desc: 'Health workers see how everyone is doing. They can help people who are stuck.' },
];

const nurseMetrics = [
  { label: 'Hygiene Module Avg', val: 74, color: '#10b981' },
  { label: 'Nutrition Module Avg', val: 61, color: '#f59e0b' },
  { label: 'SRH Module Avg', val: 89, color: '#06b6d4' },
];

const outcomes = [
  { metric: 'How Much People Remember', before: '68%', after: '89%', delta: '+21%' },
  { metric: 'People Who Actually Learn', before: '40% paid attention', after: '92% use the app', delta: '+52%' },
  { metric: 'People Not Shy Anymore', before: '25% asked questions', after: '78% set health goals', delta: '+53%' },
  { metric: 'People Eating Healthy', before: '30%', after: '55%', delta: '+25%' },
];
</script>
