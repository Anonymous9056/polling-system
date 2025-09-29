# Live Polling System

A modern, real-time live polling system built with React, Redux Toolkit, and Vite. This application supports both teacher and student interfaces for interactive classroom polling with comprehensive features including poll history, participant management, and kick-out functionality.

## 🚀 Complete Feature Set

### Teacher Features
- **Role Selection**: Choose teacher role from landing page
- **Poll Creation**: Create questions with multiple choice options
- **Real-time Management**: View live poll results and manage participants
- **Timer Control**: Set custom duration for polls (30-180 seconds)
- **Participant Management**: View active participants and manage classroom

### Student Features
- **Easy Registration**: Simple name entry to join polls
- **Real-time Polling**: Answer questions in real-time with intuitive interface
- **Live Results**: See poll results as they come in
- **Responsive Design**: Works seamlessly on mobile and desktop

### Technical Features
- **Redux State Management**: Centralized state with proper separation of concerns
- **Component Architecture**: Modular, reusable UI components
- **Responsive Design**: Mobile-first design that works on all devices
- **Development Tools**: Built-in dev navigation for easy testing
- **Future-Ready**: Structured for easy API integration

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1
- **State Management**: Redux Toolkit
- **Build Tool**: Vite
- **Styling**: CSS Custom Properties with modern CSS features
- **Icons**: Emoji-based icons for cross-platform compatibility
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173` (or next available port).

## 🏗️ Architecture

### State Management (Redux)

The application uses Redux Toolkit with three main slices:

#### 1. Auth Slice (`/src/store/authSlice.js`)
```javascript
{
  userRole: 'teacher' | 'student' | null,
  userName: string,
  isAuthenticated: boolean,
  userId: string | null
}
```

#### 2. Poll Slice (`/src/store/pollSlice.js`)
```javascript
{
  currentPoll: {
    id: string,
    question: string,
    options: string[],
    duration: number,
    isActive: boolean,
    responses: object
  },
  participants: array,
  chatMessages: array,
  liveResults: object
}
```

#### 3. UI Slice (`/src/store/uiSlice.js`)
```javascript
{
  currentView: 'landing' | 'teacher-setup' | 'student-setup' | 'waiting' | 'poll-active' | 'poll-results',
  timer: object,
  notifications: array,
  loading: object
}
```

## 🔄 API Integration Guide

The application is structured for easy backend integration. Here's how to add API functionality:

### 1. Create API Service Layer

```javascript
// src/services/api.js
export const pollAPI = {
  // Poll management
  createPoll: (pollData) => fetch('/api/polls', { method: 'POST', body: JSON.stringify(pollData) }),
  getPoll: (pollId) => fetch(`/api/polls/${pollId}`),
  startPoll: (pollId) => fetch(`/api/polls/${pollId}/start`, { method: 'POST' }),
  
  // Response handling
  submitResponse: (pollId, response) => fetch(`/api/polls/${pollId}/responses`, { method: 'POST', body: JSON.stringify(response) }),
  getResults: (pollId) => fetch(`/api/polls/${pollId}/results`),
  
  // Real-time features with WebSocket
  connectToRoom: (pollId) => new WebSocket(`ws://localhost:3001/poll/${pollId}`)
}
```

### 2. Add Redux Async Actions

```javascript
// src/store/pollSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit'
import { pollAPI } from '../services/api'

export const createPollAsync = createAsyncThunk(
  'poll/createPoll',
  async (pollData) => {
    const response = await pollAPI.createPoll(pollData)
    return response.json()
  }
)
```

Visit http://localhost:5174/ to see the live polling system in action!

## 📝 Development

Use the dev navigation panel (bottom-right) to test different views:
- Landing page with role selection
- Teacher poll creation interface  
- Student registration and polling
- Live results with chat and participant management

---

**Built with ❤️ for interactive classroom learning**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
