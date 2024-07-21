import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OTP from './Signup-process/OTPcomponent'
import Forgotpswd from './Signup-process/Forgotpswd'
import Home from './Home'
import Login from './Signup-process/Login'
import Register from './Signup-process/Register'
import Course from './Course'
import Timetable from './Timetable'
import Forum from './Forum'
// import Assignment from './Assignment' Give path Correctly !

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
        {/* <Route path="/assignment" element={<Assignment />} /> Enable it when Assignment component is Active */}
        <Route path="timetable" element={<Timetable />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgotpswd />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>/
    </BrowserRouter>
  )
}

export default App


