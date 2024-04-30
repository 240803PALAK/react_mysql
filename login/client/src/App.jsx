import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './login'
import RegistrationForm from './Register'
import Home from './home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegistrationForm />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
