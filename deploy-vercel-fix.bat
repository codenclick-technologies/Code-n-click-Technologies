@echo off
echo ========================================
echo FIXING VERCEL DEPLOYMENT
echo ========================================
echo.

echo Step 1: Installing Vercel CLI...
call npm install -g vercel

echo.
echo Step 2: Logging into Vercel...
echo (A browser window will open - please login)
call vercel login

echo.
echo Step 3: Linking to your project...
cd client
call vercel link --yes

echo.
echo Step 4: Deploying with correct settings...
call vercel --prod

echo.
echo ========================================
echo DEPLOYMENT COMPLETE!
echo ========================================
echo Your website should be live at: https://code-n-click.vercel.app
echo.
pause
