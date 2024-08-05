import React from 'react';
import { useState } from 'react';
import { NavBar2 } from '../../components/NavBar/NavBar2';
import { Banner } from '../../components/Banner/banner';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
    const [isOriginalText, setIsOriginalText] = useState(true);

    const handleChangeText = () => {
        setIsOriginalText(!isOriginalText);
      };

    return( 
       <>
        <div className="App">
            <NavBar2 isOriginalText={isOriginalText} handleChangeText={handleChangeText}></NavBar2>
            <Banner isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
            
            <Footer />
        </div>
       </>
    );
}
