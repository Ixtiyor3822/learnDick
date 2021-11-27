import React from 'react';

const SignOut = () => {

    const chiqish = () => {
        localStorage.removeItem('user')
        // History.call()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 alert alert-danger" role="alert">
                    <p>Siz rostdan ham chiqishni xoxlaysizmi ?</p>
                    <a className="btn btn-outline-danger mx-4" onClick={chiqish} href="/">Ha</a>
                    <a href="/home" className="btn btn-outline-primary">Yo`q</a>
                </div>
            </div>
        </div>
    )
}

export default SignOut;