# AI Test Agent

An AI-powered web testing agent built with Next.js, Playwright, and OpenAI.

This project automatically explores a website, performs actions, captures screenshots, logs steps, and generates a simple test report.



## Project Goal

Build an AI testing agent that can:

- take a website URL  
- open it in a real browser using Playwright  
- let AI decide the next action  
- perform actions automatically  
- capture screenshots  
- save step logs  
- continue for multiple steps  
- generate a final report  


## How It Works

1. User enters a website URL
2. Backend starts a test run
3. Playwright opens the browser
4. AI decides next action
5. Action is executed
6. Screenshot + log is saved
7. Repeat for multiple steps
8. Generate final report


## Run Project

Install dependencies and run the project:

```bash
npm install
npm run dev