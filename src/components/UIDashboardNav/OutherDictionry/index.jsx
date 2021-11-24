import React, { useEffect, useState } from 'react';
import UserNav from '..';
import OtherDic from './OtherDic';
import axios from 'axios';


const OutherDictionry = ()=>{

    const [student, setStudent] = useState([])

    const getData = async() =>{
        await axios.get("https://learndickback.herokuapp.com/student/get")
        .then(res => setStudent(res.data) )
        .catch(err => alert(err.message))
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(student)
    return (
        <>
            <div className="row">
            <div className="col-1">
            <UserNav />
            </div>
            <div className="col-1 ">
            </div>
            <div className="col-9">
                <ul className="list-group my-3">
                    {
                        student.map(student =>{
                            return <OtherDic photoUrl={student.photoUrl} displayName={student.displayName} key={student.email} />
                        })
                    }

                    {/* <OtherDic /> */}
                </ul>
            </div>
        </div>
        </>
    )
}

export default OutherDictionry;