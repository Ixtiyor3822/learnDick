import React from 'react';
import Eshitish from './../../images/eshitish.jpg';
import Yaratish from './../../images/yaratish2.jpg';
import Dustlar from './../../images/dustlik1.jpg';
const Header = () =>{
    return(
        <header className="text-center" id="home">
            {/* <h1>Bizning saytimizga xush kelibsiz.</h1> */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active text-dark">
                        <img src={Eshitish} className="d-block w-100 carusel_rasm " alt="..."/>
                        <div className="carousel-caption text-dark  d-md-block">
                            <h5>So`zlarni eshitish orqali o`rganish.</h5>
                            <p>Berilgan lug`atlar asosida so`zlarni eslab qolish va to`g`ri talaffuz qilinishini o`rganish.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Yaratish} className="d-block w-100 carusel_rasm " alt="..."/>
                        <div className="carousel-caption  text-dark d-md-block">
                            <h5>O`z so`zlaringizni yaratish.</h5>
                            <p>O`z so`zlaringizni yaratgan holda so`z boyligingizni oshirish.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Dustlar} className="d-block w-100 carusel_rasm " alt="..."/>
                        <div className="carousel-caption  d-md-block">
                            <h5>Boshqa foydalanuvchilar bilan o`rtoqlashish.</h5>
                            <p>Yaratgan so`zlaringizni boshqalar bilan ulashgan holda so`z boyligingizni o`rganishni tezlashtirish.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </header>
    )
}

export default Header;