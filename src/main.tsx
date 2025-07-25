import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

createRoot(document.getElementById("root")!).render(<App />);