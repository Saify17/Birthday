/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * React entry point placeholder. The active experience is in `index.html`.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
