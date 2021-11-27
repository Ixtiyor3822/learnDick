import React from 'react';

const Inputlar = ({title, change}) =>{

    if(title.name === ''){
        return(
            <div className="container">
                <h1 className="text-center h1">
                    Please choose one
                </h1>
            </div>
        )
    }

    return(
        <>
            <div className="col-12 col-sm-12 col-md-6">
                <div className="mb-3">
                    <label htmlFor="input1" className="form-label">{title.name}</label>
                    <input type="text" className="form-control" placeholder={title.placeholder} name={title.name} onChange={change} id="input1" aria-describedby="textHelp"/>
                    <div id="textHelp" className="form-text">{title.description}</div>
                </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6">
                <div className="mb-3">
                    <label htmlFor="input2" className="form-label">{title.name1}</label>
                    <input type="text" className="form-control" placeholder={title.placeholder1} name={title.name1} onChange={change} id="input2" aria-describedby="textHelp"/>
                    <div id="textHelp" className="form-text">{title.description1}</div>
                </div>
            </div>
        </>
    )
}

export default Inputlar;