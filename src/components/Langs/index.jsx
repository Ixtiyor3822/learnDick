import React from 'react';
import Lang from './Lang';
import Languages from './../../images/friends.jpg';
import English from './../../images/english.jpg';
import Russion from './../../images/russia.jpg';
const Langs = ()=>{
    return (
        <main className="container">
            <Lang chap={true} desc="Til tanlash imkoniyati" text="So`zlarni o`zbek , qoraqolpoq, rus va ingliz tillarida o`rganish." img={Languages}/>
            <Lang chap={false} desc="Hohishga ko`ra o`rganish." text="Qaysi tilda o`rganishni tanlash." img={English} />
            <Lang chap={true} desc="Qaysi tildagi so`zlar lug`atini tanlash imkoniyati" text="Tanlash umkin bo`lgan tillar {russion, english, uzbekish, qoroqolpoqish}" img={Russion} />

        </main>
    )
}

export default Langs;