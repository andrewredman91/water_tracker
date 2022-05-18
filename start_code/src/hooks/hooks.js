import { useState } from 'react';

export const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleDarkMode = () =>{
        setIsDarkMode(!isDarkMode);

    }

    return { isDarkMode, toggleDarkMode}
}

export const useModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const toggleModal = () =>{
        setIsModalOpen(!isModalOpen);

    }

    return { isModalOpen, toggleModal}
}