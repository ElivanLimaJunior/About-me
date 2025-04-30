import React, { useState } from 'react';
import { NavBar2 } from '../../../components/NavBar/NavBar2';
import { Footer } from '../../../components/Footer/Footer';
import { ProjectPowerBi01 } from '../../../components/Projetos_Descrição/ProjectPowerBi01';

export const ProjectPowerBi01Page = () => {
    const [isOriginalText, setIsOriginalText] = useState(true);

    const handleChangeText = () => {
        setIsOriginalText(!isOriginalText);
    };

    return (
        <>
            <NavBar2 isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
            <ProjectPowerBi01 isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
            <Footer />
        </>
    );
};
