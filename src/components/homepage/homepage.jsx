import React from 'react';
import './homepage.css';
import Header from './Header';
import Header2 from './Header2';
import Home from './Home';
import { useLocation } from 'react-router-dom';




function Homepag() {
    const location=useLocation();
    console.log(location.state.name);
    return <div className="app">
    <Header2 props={location.state.name}/>
    <Home />

    </div>;
}

export default Homepag;
