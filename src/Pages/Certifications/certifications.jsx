import React, { useState } from 'react';
import { NavBar2 } from '../../components/NavBar/NavBar2';
import { Footer } from '../../components/Footer/Footer';
import { Certificados } from '../../components/Certifications/Certifications';

export const Certifications = () => {
    const [isOriginalText, setIsOriginalText] = useState(true);

    const handleChangeText = () => {
        setIsOriginalText(!isOriginalText);
    };

    return (
        <>
            <div className="App">
                <NavBar2 isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
                <Certificados isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
                <Footer />
            </div>
        </>
    );
}
