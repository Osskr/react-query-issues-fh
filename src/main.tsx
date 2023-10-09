import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';

//! Remover enable css source maps
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

//react query
// queryClient maneja toda la informacion relacionada al cache y de las configuraciones por defecto que podemos establacer
// queryClienteProvider establece el contexto para tener acceso al cliente 
//<ReactQueryDevtools/> nos da las herramientas de desarrollo de react query  
const queryClient = new QueryClient() 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <QueryClientProvider  client = {queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>

)
