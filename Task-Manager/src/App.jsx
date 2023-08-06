import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { LoginForm } from "./components/LoginForm"
import { ProfilePage } from "../src/components/ProfilePage"
function App() {

  return (
   <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/profile" element={<ProfilePage />} />
   </Routes>
  )
}

export default App
