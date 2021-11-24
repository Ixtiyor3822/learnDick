import React from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDashcube, faFirstOrder, faProductHunt } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import DashboardImg from './../../images/dashboard.png';


const UserNav = () =>{
    return (
        <>
        <div className="d-flex flex-column dashboard flex-shrink-0 bg-light" style={{width:'4.5rem'}}>
                <a href="/home" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
         
                    <img src={DashboardImg} className="img-fluid" alt="Rasmcha" />
                    <span className="visually-hidden">Icon-only</span>
                </a>
                <ul className="nav nav-pills nav-flush dashboard2 flex-column mb-auto text-center">
                    <li className="nav-item">
                        <a href="/home" className="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            {/* <svg className="bi" width="24" height="24" role="img" aria-label="Home"><use xlink:href="#home"></use></svg> */}
                    <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon>


                        </a>
                    </li>
                    <li className="nav-item ">
                        <a href="/mydictionry" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            {/* <svg className="bi" width="24" height="24" role="img" aria-label="Dashboard"><use xlink:href="#speedometer2"></use></svg> */}
                    <FontAwesomeIcon icon={faDashcube} ></FontAwesomeIcon>

                        </a>
                    </li>
                    <li className="nav-item ">
                        <a href="/otherdictionry" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            {/* <svg className="bi" width="24" height="24" role="img" aria-label="Orders"><use xlink:href="#table"></use></svg> */}
                    <FontAwesomeIcon icon={faFirstOrder} ></FontAwesomeIcon>

                        </a>
                    </li>
                    <li className="nav-item ">
                        <a href="/mychats" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                            {/* <svg className="bi" width="24" height="24" role="img" aria-label="Products"><use xlink:href="#grid"></use></svg> */}
                    <FontAwesomeIcon icon={faProductHunt} ></FontAwesomeIcon>

                        </a>
                    </li>
                    <li>
                        <a href="/personal" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            {/* <svg className="bi" width="24" height="24" role="img" aria-label="Customers"><use xlink:href="#people-circle"></use></svg> */}
                    <FontAwesomeIcon icon={faUserCircle} ></FontAwesomeIcon>

                        </a>
                    </li>
                </ul>
                <div className="dropdown border-top">
                    <a href="/" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={localStorage.getItem("photoUrl")} alt="mdo" width="24" height="24" className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><a className="dropdown-item" href="/new">New project...</a></li>
                        {/* <li><a className="dropdown-item" href="/personal">Settings</a></li> */}
                        <li><a className="dropdown-item" href="/personal">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/signOut">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default UserNav;