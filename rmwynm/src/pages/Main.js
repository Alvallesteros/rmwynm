import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 8000);
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div className=" flex items-center justify-center h-screen">
        <div className="typewriter">
            <h1 className="text-center text-white text-6xl">READ ME WHEN YOU NEED ME</h1>
        </div>
        <div className="border-animation"></div>
        </div>
    );
}

export default Main;