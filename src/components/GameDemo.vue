<template>
  <div class="game-demo">
    <div class="game-header">
      <h2>🎮 Live Game Demo - Hygiene Quest</h2>
      <button class="close-btn" @click="$emit('close')">✕</button>
    </div>

    <!-- Game Stats -->
    <div class="game-stats">
      <div class="stat-item">
        <span class="stat-label">Score:</span>
        <span class="stat-value">{{ score }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Time:</span>
        <span class="stat-value">{{ timeLeft }}s</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Correct:</span>
        <span class="stat-value">{{ correctAnswers }}/{{ totalQuestions }}</span>
      </div>
    </div>

    <!-- Game Area -->
    <div v-if="!gameOver" class="game-area">
      <div class="question-card">
        <h3>{{ currentQuestion.question }}</h3>
        <div class="options-grid">
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            class="option-btn"
            :class="{ 
              correct: showAnswer && option.correct,
              wrong: showAnswer && selectedOption === index && !option.correct
            }"
            @click="selectAnswer(index, option.correct)"
            :disabled="showAnswer"
          >
            {{ option.text }}
          </button>
        </div>
        <div v-if="showAnswer" class="feedback">
          <p v-if="isCorrect" class="correct-feedback">✅ Correct! {{ currentQuestion.explanation }}</p>
          <p v-else class="wrong-feedback">❌ Wrong! {{ currentQuestion.explanation }}</p>
        </div>
      </div>
    </div>

    <!-- Game Over Screen -->
    <div v-else class="game-over">
      <div class="trophy">🏆</div>
      <h2>Quest Complete!</h2>
      <div class="final-stats">
        <p class="final-score">Final Score: <strong>{{ score }}</strong></p>
        <p class="accuracy">Accuracy: <strong>{{ accuracy }}%</strong></p>
        <p class="reward">Rewards Earned:</p>
        <div class="rewards">
          <span class="reward-item">+{{ score }} XP</span>
          <span class="reward-item">+{{ Math.floor(score / 10) }} 🪙 Coins</span>
        </div>
      </div>
      <button class="play-again-btn" @click="restartGame">Play Again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const score = ref(0);
const timeLeft = ref(60);
const correctAnswers = ref(0);
const totalQuestions = ref(5);
const currentQuestionIndex = ref(0);
const showAnswer = ref(false);
const selectedOption = ref(-1);
const isCorrect = ref(false);
const gameOver = ref(false);
let timer: number | null = null;

const questions = [
  {
    question: "How often should you wash your hands?",
    options: [
      { text: "Once a day", correct: false },
      { text: "Before eating and after using toilet", correct: true },
      { text: "Only when they look dirty", correct: false },
      { text: "Once a week", correct: false }
    ],
    explanation: "Wash hands before eating and after using the toilet to prevent diseases!"
  },
  {
    question: "How long should you brush your teeth?",
    options: [
      { text: "30 seconds", correct: false },
      { text: "1 minute", correct: false },
      { text: "2 minutes", correct: true },
      { text: "5 minutes", correct: false }
    ],
    explanation: "Brush for 2 minutes, twice a day for healthy teeth!"
  },
  {
    question: "How often should you shower or bathe?",
    options: [
      { text: "Once a month", correct: false },
      { text: "Once a week", correct: false },
      { text: "Every day or every other day", correct: true },
      { text: "Only when you smell bad", correct: false }
    ],
    explanation: "Regular bathing keeps your body clean and prevents body odor!"
  },
  {
    question: "What should you do when you cough or sneeze?",
    options: [
      { text: "Cover with your hands", correct: false },
      { text: "Cover with your elbow", correct: true },
      { text: "Don't cover at all", correct: false },
      { text: "Turn away only", correct: false }
    ],
    explanation: "Cover with your elbow to prevent spreading germs to others!"
  },
  {
    question: "How often should you change your underwear?",
    options: [
      { text: "Once a week", correct: false },
      { text: "Every day", correct: true },
      { text: "When it smells", correct: false },
      { text: "Twice a week", correct: false }
    ],
    explanation: "Change underwear daily to maintain good hygiene and prevent infections!"
  }
];

const currentQuestion = computed(() => questions[currentQuestionIndex.value]);
const accuracy = computed(() => Math.round((correctAnswers.value / totalQuestions.value) * 100));

function startTimer() {
  timer = window.setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      endGame();
    }
  }, 1000);
}

function selectAnswer(index: number, correct: boolean) {
  if (showAnswer.value) return;
  
  selectedOption.value = index;
  isCorrect.value = correct;
  showAnswer.value = true;

  if (correct) {
    correctAnswers.value++;
    score.value += 20;
  }

  setTimeout(() => {
    if (currentQuestionIndex.value < totalQuestions.value - 1) {
      currentQuestionIndex.value++;
      showAnswer.value = false;
      selectedOption.value = -1;
    } else {
      endGame();
    }
  }, 2000);
}

function endGame() {
  gameOver.value = true;
  if (timer) clearInterval(timer);
}

function restartGame() {
  score.value = 0;
  timeLeft.value = 60;
  correctAnswers.value = 0;
  currentQuestionIndex.value = 0;
  showAnswer.value = false;
  selectedOption.value = -1;
  gameOver.value = false;
  startTimer();
}

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.game-demo {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  background: #1e2235;
  border: 2px solid #7c3aed;
  border-radius: 16px;
  padding: 2rem;
  z-index: 1000;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.5);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translate(-50%, -45%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.game-header h2 {
  color: #7c3aed;
  font-size: 1.5rem;
  margin: 0;
}

.close-btn {
  background: #ef4444;
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #dc2626;
  transform: scale(1.1);
}

.game-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  background: #0d0f1a;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  flex: 1;
  min-width: 120px;
  text-align: center;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.3rem;
}

.stat-value {
  color: #06b6d4;
  font-size: 1.5rem;
  font-weight: 700;
}

.game-area {
  min-height: 400px;
}

.question-card {
  background: #0d0f1a;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #2d3555;
}

.question-card h3 {
  color: #e2e8f0;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.option-btn {
  background: #1e2235;
  border: 2px solid #2d3555;
  color: #e2e8f0;
  padding: 1.2rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.option-btn:hover:not(:disabled) {
  background: #7c3aed;
  border-color: #7c3aed;
  transform: translateY(-2px);
}

.option-btn:disabled {
  cursor: not-allowed;
}

.option-btn.correct {
  background: #10b981;
  border-color: #10b981;
  animation: pulse 0.5s;
}

.option-btn.wrong {
  background: #ef4444;
  border-color: #ef4444;
  animation: shake 0.5s;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.feedback {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.correct-feedback {
  background: rgba(16, 185, 129, 0.2);
  color: #6ee7b7;
  margin: 0;
}

.wrong-feedback {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  margin: 0;
}

.game-over {
  text-align: center;
  padding: 2rem;
}

.trophy {
  font-size: 5rem;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.game-over h2 {
  color: #7c3aed;
  font-size: 2rem;
  margin: 1rem 0;
}

.final-stats {
  background: #0d0f1a;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.final-stats p {
  color: #e2e8f0;
  font-size: 1.2rem;
  margin: 0.8rem 0;
}

.final-score strong,
.accuracy strong {
  color: #06b6d4;
  font-size: 1.5rem;
}

.rewards {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.reward-item {
  background: #7c3aed;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
}

.play-again-btn {
  background: #10b981;
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;
}

.play-again-btn:hover {
  background: #059669;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .game-demo {
    width: 95%;
    padding: 1rem;
  }

  .options-grid {
    grid-template-columns: 1fr;
  }

  .game-header h2 {
    font-size: 1.2rem;
  }
}
</style>
