import React from 'react';
import { useState } from 'react';
import { NavBar2 } from '../../components/NavBar/NavBar2';
import { AbouteMe } from '../../components/Aboutme/Aboutme';
import { Footer } from '../../components/Footer/Footer';

export const Aboutme = () => {
    const [isOriginalText, setIsOriginalText] = useState(true);

    const handleChangeText = () => {
        setIsOriginalText(!isOriginalText);
      };

    return( 
       <>
        <div className="App">
            <NavBar2 isOriginalText={isOriginalText} handleChangeText={handleChangeText}></NavBar2>
            <AbouteMe isOriginalText={isOriginalText}></AbouteMe>
            <Footer />
        </div>
       </>
    );
}
