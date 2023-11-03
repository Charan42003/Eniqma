import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/home/home'
import RoutLayout from './components/router/RoutLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <RoutLayout />}>
      <Route path='/' element={ <Home />}></Route>
      {/* NEW PAGE  */}
      <Route path="/about" element={ <newcomponent />}></Route>
      
    </Route>
  ));
  return (
    <>
      <RouterProvider router= { router } />
    </>
  )
}

export default App