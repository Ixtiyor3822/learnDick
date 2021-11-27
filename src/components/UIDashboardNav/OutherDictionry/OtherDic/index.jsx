import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../Loading';

const OtherDic = ({ displayName, photoUrl, }) => {
    return (
        <div className="shadow-sm my-3">
            <li className="list-group-item mx-2 rounded">
                <div className="row ">
                    <div className="col-12 col-sm-3">
                        <img src={photoUrl} className="img-fluid" alt="Rasm" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <h1>{displayName}</h1>
                        {/* <Loading /> */}
                    </div>
                    <div className="col-12 col-sm-3 d-flex align-items-center">
                        <span className="mx-1">
                            <FontAwesomeIcon icon={faDatabase} className="fs-1 mx-1 text-warning"></FontAwesomeIcon>
                            <b>45</b>
                        </span>
                        <button onClick={() => alert("Zayafka yuborildi")} className="btn btn-outline-primary  m-0">
                            <span className="mx-1">
                                <FontAwesomeIcon icon={faEnvelope} className="fs-1 mx-1"></FontAwesomeIcon>
                            </span>
                        </button>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default OtherDic;