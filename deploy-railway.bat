@echo off
echo Installing Railway CLI...
call npm install -g @railway/cli

echo.
echo Logging into Railway...
call railway login

echo.
echo Linking to your project...
call railway link 06be7d1c-f2c7-4636-bda3-4e687660bb0d

echo.
echo Adding environment variables...
call railway variables set DATABASE_URL="${{Postgres.DATABASE_URL}}"
call railway variables set JWT_SECRET="HPzxCc6U9gSKnmrOefN3V28IhQosLq1d"
call railway variables set JWT_REFRESH_SECRET="k5cD1vyIGPe0ftpYBNhS3ZLxgVT2zHbA"
call railway variables set NODE_ENV="production"
call railway variables set PORT="3000"
call railway variables set CORS_ORIGIN="https://code-n-click.vercel.app"

echo.
echo Triggering deployment...
call railway up

echo.
echo Done! Backend should be deploying now.
echo Check Railway dashboard to get your backend URL.
pause
