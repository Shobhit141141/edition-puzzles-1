import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import CrossWords from './pages/crosswords.tsx';
import { Connections } from './pages/connections.tsx';

const router= createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'/crosswords',element:<CrossWords/>},
  {path:'/connections',element:<Connections/>}
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
)
