import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// Add initial loading state
var rootElement = document.getElementById('root');
// Show loading screen while React loads
rootElement.innerHTML = "\n  <div style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 9999;\n  \">\n    <div style=\"text-align: center; color: white;\">\n      <div style=\"\n        width: 48px;\n        height: 48px;\n        border: 4px solid #3b82f6;\n        border-top-color: transparent;\n        border-radius: 50%;\n        animation: spin 1s linear infinite;\n        margin: 0 auto 16px;\n      \"></div>\n      <p style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; margin: 0;\">\n        Loading Portfolio...\n      </p>\n    </div>\n    <style>\n      @keyframes spin {\n        to { transform: rotate(360deg); }\n      }\n    </style>\n  </div>\n";
createRoot(rootElement).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
