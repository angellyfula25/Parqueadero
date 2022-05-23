import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

/* Rutar publicas*/
import {Login} from '../componentsc/login/Login';
import { Register } from '../componentsc/register/Register';

/*Rutar privadas*/
import { MaincarRoutes } from './MaincarRoutes';


export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={ <Login /> } />
            <Route path="/" element={ <Login /> } />

            {/* Rutas privadas */}
            <Route path="/Maincar/*" element={ <MaincarRoutes /> } />
           
        </Routes>
      </BrowserRouter>
  )
}
