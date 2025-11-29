<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SweetTreats & Events Hub

A modern web application for booking gelato catering, desserts, and event services.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (optional, for AI assistant feature):
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3010`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploy to Vercel

This project is configured for easy deployment on Vercel:

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration

3. **Environment Variables** (if using AI assistant):
   - In Vercel project settings, add `GEMINI_API_KEY` as an environment variable
   - Set it to your Gemini API key value

4. **Deploy**: Click "Deploy" and Vercel will build and deploy your site automatically

The `vercel.json` file is already configured with the correct build settings and routing for React Router.

## Features

- 🍦 Gelato catering services
- 🎉 Event planning and packages
- 📸 Photo booth rentals
- 🎂 Custom cakes and desserts
- 💬 AI-powered booking assistant
- 📱 Fully responsive design
