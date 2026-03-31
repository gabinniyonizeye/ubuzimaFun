# UbuzimaFun - Android Demo App

## 📱 About
**UbuzimaFun** (Health Fun) - A gamified health education Android app for ages 12+ in Rwanda.

## 🎮 Features

### 3 Game Worlds:
1. **🏰 Reproductive Realm** - Sexual Health Education
2. **🛡️ Cleanliness Crusade** - Hygiene & Personal Care
3. **⚡ Nutrition Nexus** - Diet & Fitness

### Game Mechanics:
- ⚔️ **Quests** - 5-10 minute mini-games
- 👾 **Boss Battles** - End-of-world quizzes
- 🪙 **Coins** - Earn rewards for completing tasks
- 📊 **XP System** - Level up as you learn
- 🎯 **Goals** - Set and track personal health goals

## 🛠️ Tech Stack
- **Language:** Kotlin
- **Min SDK:** 24 (Android 7.0)
- **Target SDK:** 34 (Android 14)
- **UI:** Material Design Components

## 📂 Project Structure
```
android-demo/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── MainActivity.kt
│   │       ├── res/
│   │       │   └── layout/
│   │       │       └── activity_main.xml
│   │       └── AndroidManifest.xml
│   └── build.gradle
```

## 🚀 How to Run

### Option 1: Android Studio
1. Open Android Studio
2. Click "Open an Existing Project"
3. Navigate to `android-demo` folder
4. Wait for Gradle sync
5. Click Run ▶️

### Option 2: Command Line
```bash
cd android-demo
./gradlew assembleDebug
```

## 📱 App Features Demo

### Main Screen:
- **Stats Display**: Shows XP, coins, and level
- **Progress Bar**: Visual XP progress (340/500)
- **World Selection**: 3 clickable world buttons
- **Quest Button**: Start quests in active worlds

### Interactions:
1. **Click World 1** → Shows "✔ Completed" (already done)
2. **Click World 2** → Shows "▶ Start Quest" (active)
3. **Click World 3** → Shows "🔒 Locked" (not available yet)
4. **Click Start Quest** → Earn +50 XP and +20 coins

## 🎨 UI Design
- **Dark Theme**: Modern dark background (#0d0f1a)
- **Purple Accent**: Primary color (#7c3aed)
- **Card Layout**: Material Design cards
- **Emoji Icons**: Fun and engaging visuals

## 📊 Data Tracking (Future)
- FHIR R4 integration for health data
- Patient, Library, Observation, Goal resources
- Secure data storage with encryption
- Connection to health center systems

## 🔒 Privacy & Security
- Ages 12+ appropriate content
- No personal data collection in demo
- HIPAA/GDPR compliant architecture (production)
- Parental consent required for minors

## 🌍 Language Support
- **Primary:** English
- **Local:** Kinyarwanda (Rwanda)
- "Ubuzima" = Health in Kinyarwanda

## 📞 Contact
- **Email:** ubuzimafun@health.rw
- **Website:** www.ubuzimafun.rw

## 🏆 Tagline
**"Making Health Education an Adventure for All Rwandans"**

---

## 📝 Notes for Presentation

### Demo Flow:
1. **Show App Launch** → UbuzimaFun title screen
2. **Show Stats** → XP: 340/500, 120 coins, Level 4
3. **Click World 2** → Active world (Cleanliness Crusade)
4. **Click Start Quest** → XP increases to 390, coins to 140
5. **Explain Worlds** → 3 themed health education areas
6. **Show Progression** → Locked worlds unlock as you learn

### Key Points to Mention:
- ✅ Simple, easy-to-use interface
- ✅ Gamification makes learning fun
- ✅ Progress tracking motivates users
- ✅ Suitable for ages 12 and above
- ✅ Works offline (no internet needed)
- ✅ Connects to healthcare systems (FHIR)

### What Makes It Special:
- 🎮 **Game-based learning** - Not boring textbooks
- 📱 **Mobile-first** - Learn anywhere, anytime
- 🏥 **Healthcare integrated** - Real health data tracking
- 🇷🇼 **Rwanda-focused** - Local language and context
- 🔒 **Privacy-protected** - Safe and secure

---

## 🎯 Future Enhancements
- [ ] Add quiz mini-games
- [ ] Implement boss battles
- [ ] Avatar customization
- [ ] Multiplayer challenges
- [ ] Health worker dashboard
- [ ] FHIR backend integration
- [ ] Offline data sync
- [ ] Push notifications for goals
- [ ] Leaderboards
- [ ] Achievement badges

## 📚 Resources
- Android Developer Docs: https://developer.android.com
- Kotlin Documentation: https://kotlinlang.org
- Material Design: https://material.io
- FHIR Standard: https://www.hl7.org/fhir

---

**Built with ❤️ for health education in Rwanda**
