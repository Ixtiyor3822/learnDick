import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Langs from './components/Langs';
import Navbar from './components/Navbar';

const UI = ({login}) =>{
    React.useEffect(() =>{
        document.title="Ingliz tilini o`rgan"
    },[])
    return(
        <div>
            <Navbar login={login} />
            {/* Dictionray */}
            {/* Header */}
            <Header />
            {/* Langs */}
            <Langs />
            {/* Footer */}
            <Footer />
        </div>
    )
};


export default UI;