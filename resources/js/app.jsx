import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import AreasIndex from './Pages/Areas/Index.jsx';
import EmpleadosIndex from './Pages/Empleados/Index.jsx';
import Edit from './Pages/Empleados/Edit.jsx';

import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const token = document
  .querySelector('meta[name="csrf-token"]')
  ?.getAttribute("content");

if (token) {
  axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
}


const pages = {
  'Areas/Index': AreasIndex,
  'Empleados/Index': EmpleadosIndex,
  'Empleados/Edit': Edit,
};


createInertiaApp({
  resolve: (name) => pages[name],
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
});
