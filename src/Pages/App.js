import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Login from "./LoginPage/login"
import './Styles/BaseStyle.css';




function App(){
    return (
    <BrowserRouter>
        <Routes path='/' element={<Login/>}>
            <Route index element={<Login/>}></Route>
            <Route path="/login" index element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App;