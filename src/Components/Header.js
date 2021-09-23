import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui fixed menu">
           <div className="ui center container">
             <h4 className="mt-1"><Link to="/" className="text-primary text-decoration-none">Blog</Link></h4>
            </div> 
        </div>
    )
}

export default Header
