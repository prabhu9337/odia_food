import React from 'react';

const Footer = () => {
    return (
        <footer className="w-screen min-h-[100%] p-3 mt-5 flex items-center justify-center sticky z-30 bg-gradient-to-br from-green-600 to-green-300">
            <p className="font-semibold text-base text-center">Copyright © 2022 Munico Innotech, Ltd. All Rights Reserved.
            Designed by <span className="text-orange-500 text-lg"> Munico Innotech </span></p>
        </footer>
    )
}

export default Footer;