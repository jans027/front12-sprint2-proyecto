import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from '../components/Pagina1';
import Pagina2 from '../components/Pagina2';
import Pagina3 from '../components/Pagina3';
import Pagina4 from '../components/Pagina4';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import HomePage from '../components/HomePage';
import Usuario from '../components/Usuario';
import  Test  from '../components/Test';
import TestId from '../components/TestId';
import TestIncorrect from '../components/TestIncorrect';
import TestCorrect from '../components/TestCorrect';
import Profile from '../components/Profile';
import Footer2 from '../components/Footer2';
import { Course } from '../components/Course';






export default class App extends Component {


  render() {


    return (
      <Router>
        <div>
          <NavBar/>
            <Routes>
                <Route path="/Course" element={<Course/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/TestCorrect" element={<TestCorrect/>}/>
                <Route path="/TestIncorrect" element={<TestIncorrect/>}/>
                <Route path="/Test/:id" element={<TestId/>}/>
                <Route path="/Test" element={<Test/>}/> 
                <Route path="/Usuario" element={<Usuario/>}/>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/Footer2" element={<Footer2/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/pagina4" element={<Pagina4/>}/>
                <Route path="/pagina3" element={<Pagina3/>}/>
                <Route path="/pagina2" element={<Pagina2/>}/>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </div>
      </Router>

    )
  }
}
