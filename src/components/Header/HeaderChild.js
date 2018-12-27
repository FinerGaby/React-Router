import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const HeaderChild = props => {
    return (
        <div className='headerCSS'>
         <Logo logo={'logo'}/>
         <NavMenu />
        </div>
    );
};


export default HeaderChild;