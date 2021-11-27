import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import {useSpeechSynthesis} from 'react-speech-kit';

const Dicks = ({word}) =>{

    const speak = useSpeechSynthesis();

    const clickhandler = async(text)=>{
        speak({text: text})
    }

    return(
        <li className="list-group-item">
            <div className="row ">
                <div className="col-sm-12 col-md-6 border col-lg-3 p-3 text-center">
                <h1 className="h1 text-center p-0">Eng</h1>
                    <p>{word.eng}</p>
                    <FontAwesomeIcon onClick={clickhandler} className="fs-1 text-primary" icon={faVolumeDown}></FontAwesomeIcon>
                </div>
                <div className="col-sm-12 col-md-6 border col-lg-3 p-3 text-center">
                <h1 className="h1 text-center p-0">Rus</h1>

                    <p>{word.rus}</p>
                    <FontAwesomeIcon onClick={clickhandler} className="fs-1 text-primary" icon={faVolumeDown}></FontAwesomeIcon>
                </div>

                <div className="col-sm-12 col-md-6 border col-lg-3 p-3 text-center">
                <h1 className="h1 text-center p-0">Uzb</h1>

                    <p>{word.uzb}</p>
                </div>
                <div className="col-sm-12 col-md-6 border col-lg-3 p-3 text-center">
                <h1 className="h1 text-center p-0">Qr</h1>

                    <p>{word.qr}</p>
                </div>
            </div>
        </li>
    )
}
export default Dicks;