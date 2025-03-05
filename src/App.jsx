import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Layout from './layout/Layout'
import UserContextProvider from './context/UserContextProvider'
import Dashboard from './components/Dashboard'
import VerifyOtp from './components/VerifyOtp'
import Page404 from './components/Page404'
import Authrequired from './utils/Authrequired'
import ForgotPass from './components/ForgotPass'
import ResetPassword from './components/ResetPassword'
import Register from './components/Register'
import About from './components/About'

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route path="/register" element={<Register/>} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route element={<Authrequired />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}
export default App