import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { useModal } from './context/modal-context'
import Modal from './components/SignUpModal'
import SignInModal from './components/SignInModal'
import { Routes,Route } from 'react-router-dom'
import Courses from './pages/Courses'
import User from './pages/User'
import Purchases from './pages/Purchases'
import Admin from './pages/Admin'
function App() {
  const [count, setCount] = useState(0)
  
  const {isSignUpModalOpen,isSignInModalOpen} = useModal()


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>} />
        <Route path='/user' element = {<User/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      
      {
        isSignUpModalOpen &&
        <Modal/>
      }

      {
        isSignInModalOpen &&
        <SignInModal/>
      }
      
      
    </>
  )
}

export default App
