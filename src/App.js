import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Patients from "./components/Patients";
import ProfileEditInfo from "./components/ProfileEditInfo";
import ProfileCourses from "./components/ProfileCourses";
import ProfileSettings from "./components/ProfileSettings";
import SendPassword from "./components/SendPassword";
import ForgotPassword from "./components/ForgotPassword";
import DoctorCourse from "./components/DoctorCourse";
import AddCourse from "./components/AddCourse";
import UpdateCourse from "./components/UpdateCourse copy";
import LoginFailed from "./components/LoginFailed";

import Header from './components/Header';
import Footer from './components/Footer';
import Patient from "./components/Patient";
import PatientsLogin from "./components/PatientsLogin";
import SubjectBookSuccessfully from "./components/SubjectBookSuccessfully";
import DoctorLogin from "./components/DoctorLogin";
import DoctorTreat from "./components/DoctorTreat";
import AddSubject from "./components/AddSubject";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/patients" element={<Patients/>} />
        <Route exact path="/profile" element={<ProfileEditInfo />} />
        <Route exact path="/profile/courses" element={<ProfileCourses />} />
        <Route exact path="/profile/settings" element={<ProfileSettings />} />
        
        <Route exact path="/sendPassword" element={<SendPassword />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/Doctorcourse" element={<DoctorCourse />} />
        <Route exact path="/addCourse" element={<AddCourse />} />
        <Route exact path="/updateCourse" element={<UpdateCourse />} />
        <Route exact path="/loginFailed" element={<LoginFailed />} />
        <Route exact path="/Patientslogin" element={<PatientsLogin />} />
        
        <Route exact path="/patient" element={<Patient />} />
        
        <Route exact path="/subjectbooksuccessfully" element={<SubjectBookSuccessfully />} />
        <Route exact path="/doctorlogin" element={<DoctorLogin />} />
        <Route exact path="/doctortreat" element={<DoctorTreat />} />
        <Route exact path="/addsubject" element={<AddSubject />} />
        


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;