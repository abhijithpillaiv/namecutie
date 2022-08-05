import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './scss/style.scss'
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

export default function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  // Containers
  const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

  // Pages
  const Login = React.lazy(() => import('./views/pages/login/Login'))

  const [cookies, setCookie] = useCookies(['status']);

  return (
    <BrowserRouter>
      <CookiesProvider>
        <Suspense fallback={loading}>
          <Routes>
            {cookies.status ?
              <Route path="*" name="Home" element={<DefaultLayout />} /> :
              <Route exact path="*" name="Login Page" element={<Login />} />}
          </Routes>
        </Suspense>
      </CookiesProvider>
    </BrowserRouter>
  )
}