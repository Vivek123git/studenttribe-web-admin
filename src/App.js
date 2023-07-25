
import './App.css';
import SignIn from './Component/AccountPage/SignIn';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import SignUp from './Component/AccountPage/SignUp';
import MyProfile from './Component/Profile.jsx/MyProfile';
import CompanyProfile from './Component/Profile.jsx/CompanyProfile';
import Events from "./Component/Events/Events"
import CreateEvent from './Component/Events/CreateEvent';
import InternshipPost from './Component/Internship/InternshipPost';
import OpportunityPost from './Component/Internship/OpportunityPost';
import ForgotPassword from './Component/AccountPage/ForgotPassword';
import Dashboard from './Component/Dashboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './Action/AuthAction';
import Cookies from 'js-cookie';
import Analytics from './Component/Analytics';

function App() {
  const dispatch = useDispatch();

  const token = Cookies.get("token")

  useEffect(()=>{
    dispatch(getProfile(token))
  },[])

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/analytics" element={<Analytics/>} />
        <Route exact path="/sign-up" element={<SignUp/>} />
        <Route exact path="/forget-password" element={<ForgotPassword/>} />
        <Route exact path="/my-profile" element={<MyProfile/>} />
        <Route exact path="/company-profile" element={<CompanyProfile/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/create-event" element={<CreateEvent/>} />
        <Route exact path="/internship" element={<InternshipPost/>} />
        <Route exact path="/opportuinity-post" element={<OpportunityPost/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
