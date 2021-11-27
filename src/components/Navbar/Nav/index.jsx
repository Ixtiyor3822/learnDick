import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (

        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand" to="/">Learn Dictionries</NavLink>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item text-center">
                                <NavLink className="nav-link active" aria-current="page" to="/home" >Home</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink className="nav-link" to="/mydictionry">My dick</NavLink>
                            </li>
                            <li className="nav-item text-center ">
                                <NavLink className="nav-link" to="/otherdictionry">Othet dick</NavLink>
                            </li>
                            <li className="nav-item text-center ">
                                <NavLink className="nav-link" to="/mychats">My Chat</NavLink>
                            </li>
                            <li className="nav-item text-center ">
                                <NavLink className="nav-link" to="/personal">
                                    <div className="dropdown border-top">
                                        <NavLink to="/" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={localStorage.getItem("photoUrl")} alt="mdo" width="24" height="24" className="rounded-circle" />
                                        </NavLink>
                                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                                            <li><NavLink className="dropdown-item" to="/new">New project...</NavLink></li>
                                            {/* <li><NavLink className="dropdown-item" to="/personal">Settings</NavLink></li> */}
                                            <li><NavLink className="dropdown-item" to="/personal">Profile</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><NavLink className="dropdown-item" to="/signOut">Sign out</NavLink></li>
                                        </ul>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;