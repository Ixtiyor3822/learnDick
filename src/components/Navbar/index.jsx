import React from 'react';
// import {useSpeechSynthesis} from 'react-speech-kit'



const Navbar = ({login}) => {
    
    // const {speak} = useSpeechSynthesis();
    // const gapir = () =>{
    //     speak({text: 'Assalomu aleykum'})
    // }

    

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">Learn Dictionries</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                                <a className="nav-link active" aria-current="page" href="/#home" >Home</a>
                                {/* <button className="btn btn-outline-primary " onClick={gapir}>eshit</button> */}
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link" href="/">Tillar</a>
                            </li>
                            <li className="nav-item text-center ">
                                <button type="button" className="btn btn-outline-danger" onClick={login}> Login with Google </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;