package com.ubuzimafun.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.Button
import android.widget.TextView
import android.widget.ProgressBar
import android.view.View

class MainActivity : AppCompatActivity() {
    
    private var currentWorld = 1
    private var xpPoints = 340
    private var coins = 120
    private var level = 4
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Initialize views
        val worldTitle = findViewById<TextView>(R.id.worldTitle)
        val xpText = findViewById<TextView>(R.id.xpText)
        val coinsText = findViewById<TextView>(R.id.coinsText)
        val levelText = findViewById<TextView>(R.id.levelText)
        val progressBar = findViewById<ProgressBar>(R.id.xpProgressBar)
        
        val btnWorld1 = findViewById<Button>(R.id.btnWorld1)
        val btnWorld2 = findViewById<Button>(R.id.btnWorld2)
        val btnWorld3 = findViewById<Button>(R.id.btnWorld3)
        val btnStartQuest = findViewById<Button>(R.id.btnStartQuest)
        
        // Update UI
        updateUI(worldTitle, xpText, coinsText, levelText, progressBar)
        
        // World 1 - Reproductive Realm (Completed)
        btnWorld1.setOnClickListener {
            currentWorld = 1
            worldTitle.text = "🏰 Reproductive Realm"
            btnStartQuest.text = "✔ Completed"
            btnStartQuest.isEnabled = false
        }
        
        // World 2 - Cleanliness Crusade (Active)
        btnWorld2.setOnClickListener {
            currentWorld = 2
            worldTitle.text = "🛡️ Cleanliness Crusade"
            btnStartQuest.text = "▶ Start Quest"
            btnStartQuest.isEnabled = true
        }
        
        // World 3 - Nutrition Nexus (Locked)
        btnWorld3.setOnClickListener {
            currentWorld = 3
            worldTitle.text = "⚡ Nutrition Nexus"
            btnStartQuest.text = "🔒 Locked"
            btnStartQuest.isEnabled = false
        }
        
        // Start Quest Button
        btnStartQuest.setOnClickListener {
            if (currentWorld == 2) {
                // Simulate completing a quest
                xpPoints += 50
                coins += 20
                
                if (xpPoints >= 500) {
                    level++
                    xpPoints = xpPoints - 500
                }
                
                updateUI(worldTitle, xpText, coinsText, levelText, progressBar)
            }
        }
    }
    
    private fun updateUI(
        worldTitle: TextView,
        xpText: TextView,
        coinsText: TextView,
        levelText: TextView,
        progressBar: ProgressBar
    ) {
        xpText.text = "XP: $xpPoints / 500"
        coinsText.text = "🪙 $coins coins"
        levelText.text = "Level $level"
        progressBar.progress = (xpPoints * 100) / 500
    }
}
