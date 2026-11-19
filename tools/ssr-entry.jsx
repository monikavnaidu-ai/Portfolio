import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { App } from '../src/App';
export function renderApp() { return renderToStaticMarkup(<App />); }
