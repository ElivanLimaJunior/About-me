import React, { useState } from 'react';
import { NavBar2 } from '../../components/NavBar/NavBar2';
import { Footer } from '../../components/Footer/Footer';
import { Projects } from '../../components/Projects/projects';

export const Projeto01 = () => {
    const [isOriginalText, setIsOriginalText] = useState(true);

    const handleChangeText = () => {
        setIsOriginalText(!isOriginalText);
    };

    return (
        <>
            <div className="App">
                <NavBar2 isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
                <Projects isOriginalText={isOriginalText} />
                <Footer />
            </div>
        </>
    );
}
