import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './HomePage_Files/Homepage';
import About from './HomePage_Files/About'
import Services from './HomePage_Files/Services'
import Contact from './HomePage_Files/Contact'

import UserDashboard from './User_Files/UserDashboard';
import UserAllCourses from './User_Files/UserAllCourses';
import UserProfile from './User_Files/UserProfile';
import UserContact from './User_Files/UserContact';

import Tutor from './Tutor_Files/Tutor';
import TutorPublish from './Tutor_Files/TutorPublish'
import TutorContact from './Tutor_Files/TutorContact';

import LoginForm from './Login_Files/LoginForm';
import RegisterForm from './Login_Files/RegisterForm'
import TutorRegister from './Login_Files/TutorRegister';
import LoginTutor from './Login_Files/LoginTutor';

import MachineLearning from './Course_Files/machineLearning';
import PythonProgramming from './Course_Files/pythonProgramming';

function App() {

  return (
    <Routes>
      {/* HomePage */}
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* <Route path="/user/dashboard/:id" element={<UserDashboard />} /> */}
      {/* User */}
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/contact" element={<UserContact />} />
      <Route path="/user/allcourses" element={<UserAllCourses />} />

      {/* Tutor */}
      <Route path="/tutor/dashboard" element={<Tutor />} />
      <Route path="/tutor/publish" element={<TutorPublish />} />
      <Route path="/tutor/contact" element={<TutorContact />} />

      {/* Login/Sign In */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/logintutor" element={<LoginTutor />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/regtutor" element={<TutorRegister />} />

      {/* Course */}
      <Route path="/machineLearning" element={<MachineLearning />} />
      <Route path="/pythonProgramming" element={<PythonProgramming />} />
    </Routes>
  )
}

export default App