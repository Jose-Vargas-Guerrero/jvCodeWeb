// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';


export default defineConfig({
  integrations: [react()],
  output: 'static' // Cambiado a 'static' si no se usa servidor
  // Eliminar la línea del adaptador
});