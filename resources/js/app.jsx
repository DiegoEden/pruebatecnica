import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import AreasIndex from './Pages/Areas/Index.jsx';
import EmpleadosIndex from './Pages/Empleados/Index.jsx';
//import './bootstrap';
//import '../css/app.css';

const pages = {
  'Areas/Index': AreasIndex,
  'Empleados/Index': EmpleadosIndex,
};


createInertiaApp({
  resolve: (name) => pages[name],
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
});
