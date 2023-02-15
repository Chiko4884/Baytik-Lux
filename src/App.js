import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import {Routes, Route} from 'react-router-dom'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import JkBaytik from "./JkBaytik";
import ChooseHouse from "./ChooseHouse";
import HouseView from "./HouseView";

function App(){
    return(

        <div className="app">
            <Header/>
            <Routes> 
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/more" element={<HouseView/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="baytik" element={<JkBaytik/>}/>
                    <Route path="choose" element={<ChooseHouse/>}/>
            </Routes>
            <Footer/>
        </div>
        
    );
}

export default App;