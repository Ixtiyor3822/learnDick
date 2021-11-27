import React from 'react';

const Radios = ({setChaked}) => {



    return (
        <div className="container">
            <div className="row">
                <div className="form-check col-6 col-sm-6 col-md-3">
                    <input className="form-check-input" type="radio" name="til" onChange={setChaked} id="enguz" value="enguzb" />
                    <label className="form-check-label" for="enguz">
                        Eng vs Uzb
                    </label>
                </div>
                <div className="form-check col-6 col-sm-6 col-md-3">
                    <input className="form-check-input" type="radio" name="til" onChange={setChaked} id="engqr" value="engqr" />
                    <label className="form-check-label" for="engqr">
                        Eng vs QR
                    </label>
                </div>
                <div className="form-check col-6 col-sm-6 col-md-3">
                    <input className="form-check-input" type="radio" name="til" onChange={setChaked} id="rusqr" value="rusqr" />
                    <label className="form-check-label" for="rusqr">
                        Rus vs QR
                    </label>
                </div>
                <div className="form-check col-6 col-sm-6 col-md-3">
                    <input className="form-check-input" type="radio" name="til" onChange={setChaked} id="rusuzb" value="rusuzb" />
                    <label className="form-check-label" for="rusuzb">
                        Rus vs Uzb
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Radios;