import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Add initial loading state
const rootElement = document.getElementById('root')!;

// Show loading screen while React loads
rootElement.innerHTML = `
  <div style="
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  ">
    <div style="text-align: center; color: white;">
      <div style="
        width: 48px;
        height: 48px;
        border: 4px solid #3b82f6;
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 16px;
      "></div>
      <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; margin: 0;">
        Loading Portfolio...
      </p>
    </div>
    <style>
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  </div>
`;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
