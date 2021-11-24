import React from 'react';
import UserNav from './components/UIDashboardNav';
import Home from './components/UIDashboardNav/Home';
const Dashboard = ({error, message}) => {
    return (
        <>
        <div className="row">
            <div className="col-1">
            <UserNav />
            </div>
            <div className="col-1 ">
            </div>
            <div className="col-9">
                {/* {
                    error===''?'':(
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )
                }
                {
                    message===''?'':(
                        <div className="alert alert-primary" role="alert">
                            {message}
                        </div>
                    )
                } */}
                <Home /> 
                {/* <MyDictionry /> */}
                {/* <OutherDictionry /> */}
                {/* <MyChats /> */}
                {/* <PersonalAccount /> */}
            </div>
        </div>
        </>
    )
}

export default Dashboard;