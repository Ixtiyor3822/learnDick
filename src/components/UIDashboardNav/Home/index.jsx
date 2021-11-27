import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons';
import { faComments, faPlusCircle, faSpellCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Home = () =>{
    return(
        <div className="container">
            <div className="row container">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 border position-relative shadow-lg p-2 text-center m-2">
                    <FontAwesomeIcon icon={faPlusCircle} className="text-danger fs-1 " ></FontAwesomeIcon>
                    <h1>Lug`at qo`shish.</h1>
                    <NavLink to="/new" className="btn btn-outline-primary position-relative bottom-0">go to work</NavLink>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 border position-relative shadow-lg p-2 text-center m-2">
                    <FontAwesomeIcon icon={faSpellCheck} className="text-danger fs-1 " ></FontAwesomeIcon>
                    <h1>Lug`at.</h1>
                    <NavLink to="/mydictionry" className="btn btn-outline-primary position-relative bottom-0">go to work</NavLink>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 border position-relative shadow-lg p-2 text-center m-2">
                    <FontAwesomeIcon icon={faUsers} className="text-danger fs-1 " ></FontAwesomeIcon>
                    <h1>Boshqa lug`atlar</h1>
                    <NavLink to="/otherdictionry" className="btn btn-outline-primary position-relative bottom-0">go to work</NavLink>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 border position-relative shadow-lg p-2 text-center m-2">
                    <FontAwesomeIcon icon={faComments} className="text-danger fs-1 " ></FontAwesomeIcon>
                    <h1>Mening yozishmalarim</h1>
                    <NavLink to="/mychats" className="btn btn-outline-primary position-relative bottom-0">go to work</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Home;