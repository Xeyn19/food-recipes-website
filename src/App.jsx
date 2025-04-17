import React from 'react'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import RecipeesLayout from './layout/RecipeesLayout'
import RecipeesPage from './pages/RecipeesPage'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
          <Route index element ={<HomePage />}/>
          <Route path='Recipes' element={<RecipeesLayout />}>
            <Route index element={<RecipeesPage /> }/>
            <Route path='search/:cookKeyWord' element={<RecipeesPage />} />
          </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App