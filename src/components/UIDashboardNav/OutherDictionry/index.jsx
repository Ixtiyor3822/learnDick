import React, { useEffect, useState } from 'react';
import OtherDic from './OtherDic';
import axios from 'axios';
import Loading from '../Loading';


const OutherDictionry = () => {

    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        setLoading(true);
        await axios.get("https://learndickback.herokuapp.com/student/get")
            .then(res => {
                setStudent(res.data);
                setLoading(false); 
            })
            .catch(err => {
                alert(err.message);
                setLoading(false)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(student)
    return (
        <>
            {
                loading && <Loading />
            }
            <div className="row">
                <div className="col">
                    <ul className="list-group my-3">
                        {
                            student.map(student => {
                                return <OtherDic photoUrl={student.photoUrl} displayName={student.displayName} key={student.email} />
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default OutherDictionry;