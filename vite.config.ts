import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    /*
    alias: {
      "@appRoot": "/",
      "@src": "/src",
      "@components'": "/src/components",
    },
    */    

    ///*
    alias: [
      { find: '@src', replacement: '/src' },
      { find: '@app', replacement: '/src/app' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@widgets', replacement: '/src/widgets' },
      { find: '@features', replacement: '/src/features' },
      { find: '@entities', replacement: '/src/entities' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@InputText', replacement: '/src/shared/ui/InputText' }, 
      { find: '@RenderingError', replacement: '/src/shared/ui/RenderingError' }, 
      { find: '@context', replacement: '/src/app/Context' },
      { find: '@routerPaths', replacement: '/src/shared/const/routerPaths.ts' }, 
      { find: '@fetchPaths', replacement: '/src/shared/const/fetchPaths.ts' }, 
      { find: '@jsonUtilities', replacement: '/src/shared/lib/jsonUtilities.ts' }, 
      { find: '@validation', replacement: '/src/shared/lib/validation.ts' }, 
    ],
    //*/
  },  
})
