import {Route, Routes } from "react-router-dom"
import { LandingHome } from "./pages/Landing/LandingHome"
import { LandingAboutUs } from "./pages/Landing/LandingAboutUs"
import { LandingLayout } from "./layout/LandingLayout"
import LoginPage from "./pages/Landing/LoginPage"
import SignupPage from "./pages/Landing/SignupPage"
import {ProfileDetails} from "./pages/firstTime/ProfileDetails"
import { Platforms } from "./pages/firstTime/Platforms"
import { SelectThemes } from "./pages/firstTime/SelectThemes"
import { Dashboard } from "./pages/dashboard/Dashboard"
import { DashboardLayout } from "./layout/DashboardLayout"
import { Header } from "./pages/dashboard/Header"
import { Wallpaper } from "./components/dashboard/Wallpaper"


function App() {

  
  
  return (
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/register" />
        <Route path="/firsttime">
          <Route index element={<ProfileDetails />}  />
          <Route element={<Platforms />} path="two" />
          <Route element={<SelectThemes />} path="three" />
        </Route>
        <Route element={<DashboardLayout/>} path="/dashboard">
          <Route index element={<Dashboard />}  />
          <Route element={<Header />} path="header" />
          <Route element={<Wallpaper />} path="wallpaper" />
        </Route>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingHome />} />
          <Route path="/about" element={<LandingAboutUs />} />
        </Route>
    </Routes>
    
  )
}

export default App
