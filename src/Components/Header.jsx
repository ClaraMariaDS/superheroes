import React from 'react';
import Banner from '../images/SUPERHEROES.png'
import '../css/header.css'
const Header = () => {
    return (
        <>
            <div className="container text-center">
                <img src={Banner} alt="banner" />
            </div>
        </>
    )
}
export default Header;