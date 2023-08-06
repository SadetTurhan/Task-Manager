import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { AuthProvider } from "./utils/auth"
import LoginForm  from "./components/LoginForm"
import { RequireAuth} from "./utils/RequireAuth"
import { ProfilePage } from "../src/components/ProfilePage"
function App() {

  return (
    <AuthProvider>
   <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/profile" element={<ProfilePage />} />
   </Routes>
   </AuthProvider>
  )
}

export default App
