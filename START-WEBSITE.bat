@echo off
title Gauri Goswami Website
echo.
echo Installing website packages...
call npm install
if errorlevel 1 (
  echo.
  echo Installation failed. Please install Node.js 22 or newer from https://nodejs.org/
  pause
  exit /b 1
)
echo.
echo Starting the website...
echo Open the Local URL shown below in Chrome or Edge.
call npm run dev
pause
