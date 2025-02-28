import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/admin">Admin</Link>
                <Link to="/user">User</Link>
            </div>
        </nav>
    );
};

export default Navbar;