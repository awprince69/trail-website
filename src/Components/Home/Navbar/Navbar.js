import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='d-flex'>
            <div>
                <div className="navbar-brand">
                    <div className="logo-symbol">L</div>
                </div>
            </div>
            <div className='ms-auto mt-3'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav" style={{fontSize:'18px'}}>
                                <a className="nav-link active mr-5 " aria-current="page" href="#">Home</a>
                                <a className="nav-link active mr-5 " href="#">Service</a>
                                <a className="nav-link active mr-5 " href="#">Careers </a>
                                <a className="nav-link active mr-5 " href="#">About</a>
                                <a className="nav-link active mr-5 " href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;