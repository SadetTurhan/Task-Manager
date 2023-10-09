import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { LoginForm } from "./components/LoginForm"
import { TasksPanel } from "./components/TasksPanel"
function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/taskspanel" element={<TasksPanel />} />
    </Routes>
  )
}

export default App
