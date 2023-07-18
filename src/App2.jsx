import React, { useState } from 'react'
import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import Login from './components/login/login';
// import Homepage from './components/homepage/homepage';
import Register from './components/register/register';
import "./App2.css"
import Homepage from './components/homepage/Homepages.jsx'
import Homepag from './components/homepage/homepage.jsx'




function App2() {
  const [user, setLoginUser] = useState('')
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    var element = document.getElementById('Cont');
    if (darkMode) {
      element.classList.add('dark-mode')
      console.log(element)
    }
    else {
      element.classList.remove('dark-mode');
      console.log(element)

    }

  }
  return (


    <div className="App">
      {/* <button className="Button1" id='Cont' onClick={toggleDarkMode}>{darkMode ? 'Enable Dark Mode' : 'Disable Dark Mode'}</button> */}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepag />} />
        <Route path="/captcha" element={<App />} />
        


        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />





      </Routes>
      
    </div>


  )
}

export default App2