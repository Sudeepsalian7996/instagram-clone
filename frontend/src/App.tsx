import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/users/SignUp'
import SignIn from './components/users/SignIn'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
    )
}

export default App
