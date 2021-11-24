import React from 'react';
import UserNav from '..';
import Chat from './Chat';

const MyChats = () =>{
    return (
        <>
           <div className="row">
            <div className="col-1">
            <UserNav />
            </div>
            <div className="col-1 ">
            </div>
            <div className="col-9">
                <ul className="list-group mt-3">
                   Hozircha chat mavjud emas.
        
                </ul>
            </div>
        </div> 
        </>
    )
}

export default MyChats;