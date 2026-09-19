import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import  { GuestLayout, AuthLayout } from './pages/Layout'
import AuthPage from './pages/AuthPage'
import PreviewPage from './pages/PreviewPage'
import HomePage from './pages/HomePage'
import BuilderPage from './pages/BuilderPage'
import { Toaster } from 'react-hot-toast'
import PublishPage from './pages/PublishPage'

const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
      {/* Login Routes */}
      <Route element={<GuestLayout/>}>
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
      </Route>


{/* Protected Routes */}
      <Route element={<AuthLayout/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/builder/:id" element={<BuilderPage/>} />
        <Route path="/Preview/:id" element={<PreviewPage/>} /> 
      </Route>

      {/* Publish Routes */}
      <Route path='/publish/:id' element={<PublishPage/>}/>

{/* {catch-all} */}
<Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
    </>
  )
}

export default App