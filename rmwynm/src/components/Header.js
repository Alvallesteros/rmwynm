import react from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="w-full bg-white py-6 px-6 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-none">
                    <Navbar />
                </div>
                <div className="flex-1 text-center">
                    <h1 className="text-4xl font-bold">
                        <span className="text-orange-500">READ ME</span> <span className="text-green-600">WHEN YOU...</span>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;