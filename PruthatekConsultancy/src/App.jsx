import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recruitment from './components/Recruitment/Recruitment'
import HRservices from './components/HRservices/HRservices'
import SearchJob from './components/SearchJob/SearchJob'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Dashboard from './components/Dashboard/Dashboard'
import UploadJob from './components/UploadJob/UploadJob'
import { useState } from 'react'

function App() {
  const [active,setActive] = useState("")

  return (
    <>
    
    <BrowserRouter>
    <Navbar  />
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/recruitment' element={<Recruitment />}/>
         <Route path='/hrservice' element={<HRservices />}/>
         <Route path='/searchjobs' element={<SearchJob />}/>
         <Route path='/getintouch' element={<GetInTouch />}/>
         <Route path='/dashboard' element={<Dashboard />}/>
         <Route path='/uploadjob' element={<UploadJob/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter> 
    
    </>
  )
}

export default App
