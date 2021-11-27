import React, { useEffect, useState } from 'react';
import axios from 'axios';

// let rasm = 'https://picsum.photos/50';




const PersonalAccount = () => {
    
    const [rasm , setRasm] = useState()


    const getPicture = async () =>{
        await axios.get('http://localhost:5000/student/getOne/'+localStorage.getItem('email'))
            .then(res => {
                console.log(res.data)
                setRasm(res.data.photoUrl)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    useEffect(()=>{

        getPicture()

    },[])
    return (
        <>
            <div className="row">
                <div className="col-9">
                    <div className="container m-5 p-5 border shadow-sm">
                        <div className="row">
                            <div className="col-12 col-sm-3">
                                <img src={rasm} alt="My rasm" />
                            </div>
                            <div className="col-12 col-sm-9">
                                <h1>{localStorage.getItem("displayName")}</h1>
                                <p>{localStorage.getItem("email")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalAccount;