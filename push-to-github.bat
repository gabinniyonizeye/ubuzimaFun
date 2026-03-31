@echo off
echo ========================================
echo  UbuzimaFun - Push to GitHub
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init
echo.

echo Step 2: Adding all files...
git add .
echo.

echo Step 3: Creating initial commit...
git commit -m "Initial commit: UbuzimaFun - Health Education Game for Rwanda"
echo.

echo Step 4: Adding remote repository...
git remote add origin https://github.com/gabinniyonizeye/ubuzimaFun.git
echo.

echo Step 5: Pushing to GitHub...
git branch -M main
git push -u origin main
echo.

echo ========================================
echo  Done! Check your GitHub repository:
echo  https://github.com/gabinniyonizeye/ubuzimaFun
echo ========================================
pause
