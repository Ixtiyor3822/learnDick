import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
    return (
        <div className="shadow-sm my-3">
            <li className="list-group-item rounded">
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <img src={localStorage.getItem('photoUrl')} className="img-fluid" alt="Rasm" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <h1>{localStorage.getItem('displayName')}</h1>
                        <p>....</p>
                    </div>
                    <div className="col-12 col-sm-3">
                        <span className="mx-1">
                            <FontAwesomeIcon icon={faDatabase} className="fs-1 mx-1 text-warning"></FontAwesomeIcon>
                            <b>45</b>
                        </span>
                        <span className="mx-1">
                            <FontAwesomeIcon icon={faMoneyCheck} className="fs-1 mx-1 text-primary"></FontAwesomeIcon>
                            <b>45</b>
                        </span>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Chat;