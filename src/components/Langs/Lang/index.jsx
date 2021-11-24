import React from 'react';

const Lang = ({ chap , text, img, desc}) => {

    if (chap) {
        return (
            <>
                <section className="section_image my-3">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center align-items-center my-auto">
                            <h1>{text} </h1>
                            <p>{desc}</p>
                        </div>
                        <div className="col-12 text-center col-sm-6">
                            <img className="shadow-lg img-fluid" src={img} alt="rasm" />
                        </div>
                    </div>
                </section>
            </>
        )
    }
    else {
        return (
            <>
                <section className="section_image my-3">
                    <div className="row">
                        <div className="col-12 text-center col-sm-6">
                            <img className="shadow-lg img-fluid" src={img} alt="rasm" />
                        </div>
                        <div className="col-12 col-sm-6 text-center my-auto">
                            <h1>{text} </h1>
                            <p>{desc}</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Lang;