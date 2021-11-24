import React from 'react';
import UserNav from '..';

let rasm = localStorage.getItem("photoUrl").toString() || 'https://picsum.photos/50';

const PersonalAccount = () => {
    return (
        <>
            <div className="row">
                <div className="col-1">
                    <UserNav />
                </div>
                <div className="col-1 ">
                </div>
                <div className="col-9">
                    <div className="container m-5 p-5 border shadow-sm">
                        <div className="row">
                            <div className="col-12 col-sm-3">
                                <img src={rasm} alt="My rasm" />
                            </div>
                            <div className="col-12 col-sm-9">
                                <h1>{localStorage.getItem("displayName")}</h1>
                                <p>{localStorage.getItem("email")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalAccount;