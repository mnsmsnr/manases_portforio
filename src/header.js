import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='home'>Home</Link>
            <Link to='about'>About</Link> 
            <Link to='skill'>Skill</Link> 
            <Link to='product'>Product</Link> 
            <Link to='contact'>Contact</Link> 

        </div>
    );
};

export default Header;