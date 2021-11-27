import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react/cjs/react.development';
import Loading from '../Loading/index'
import Dicks from './Dicks';


const MyDictionry = () => {


    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const getData = async (email) => {
        setLoading(true);
        await axios.post('https://dashboard.heroku.com/dick/get', { email: email })
            .then(res => {
                toast.success(res.data.message)
                setData(res.data.dicks)
                setLoading(false);
                toast.error(res.data.error)
            })
            .catch(err => {
                setLoading(false);
                toast.error(err.message)
            })
    }

    useEffect(() => {
        getData(localStorage.getItem('email'))
    }, [])


    return (
        <>
            {loading && <Loading />}
            
            <ul className="list-group">
                {data.map(word => {
                    return <Dicks word={word} key={word._id} />
                })}
            </ul>
        </>
    )
}

export default MyDictionry;