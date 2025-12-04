
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { InstagramIcon, FacebookIcon, PinterestIcon } from './Icons';
import { FaPinterestP } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} TPEC Flowers. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><InstagramIcon className="w-5 h-5" /></a>
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FacebookIcon className="w-5 h-5" /></a>
                        <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaPinterestP  className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
