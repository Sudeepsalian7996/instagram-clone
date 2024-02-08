import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/users/SignUp'
import SignIn from './components/users/SignIn'
import Messenger from './components/pages/message/Messenger'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/chat' element={<Messenger />} />
      </Routes>
    </>
    )
}

export default App
