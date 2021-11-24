import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faTelegram, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () =>{
    return (
        <footer className="bg-success p-5 text-center">
            <h1>Bog`lanish uchun ijtimoiy tarmoqlarimiz.</h1>
            <a href="https://t.me/sadullayevixtiyor"><FontAwesomeIcon className="m-3 fs-1" icon={faTelegram}></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/ixtiyor.sadullayev.79"><FontAwesomeIcon className="m-3 fs-1" icon={faFacebook}></FontAwesomeIcon></a>
            <a href="https://www.youtube.com/channel/UCL5UJ8P-ZYL6J3udkO0S5Ww"><FontAwesomeIcon className="m-3 fs-1" icon={faYoutube}></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/sadullayev_ixtiyor/"><FontAwesomeIcon className="m-3 fs-1" icon={faInstagram}></FontAwesomeIcon></a>
            <a href="/+998937123822" className="text-none align-items-center" ><FontAwesomeIcon className="m-3 fs-1  "  icon={faPhone}></FontAwesomeIcon></a>

        </footer>
    )
}

export default Footer;