
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
// import Header from './components/Header'
function App() {

  return (
    <>
      {/* <Header/> */}

     <Routes>
       <Route path='/' element={<Home/>} /> 
       <Route path='/login' element={<Auth/>}/>
       <Route path='/register' element={<Auth insideRegister/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/*' element={<Navigate to={'/'}/>} />




     </Routes>
      
    </>
  )
}

export default App
