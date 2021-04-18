import React from 'react';
import './error.css'
import logo from '../../images/logo192.png';


const Error404 = () => {
    return (
        <div className="error">
              <img src={logo} alt="logo"/>
            <h1>ERROR 404</h1>
        </div>
    );
};

export default Error404;