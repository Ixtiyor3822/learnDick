import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Inputlar from './Inputs';
import Radios from './Radios';
import { toast } from 'react-toastify';
import Loading from '../Loading';


const NewDick = () => {

    const [chaked, setChaked] = useState('')



    const [title, setTitle] = useState({
        name: '',
        placeholder: '',
        description: '',
        name1: '',
        placeholder1: '',
        description1: ''
    })

    const [data, setData] = useState({
        eng: '',
        rus: '',
        qr: '',
        uzb: ''
    })

    const [loading, setLoading] = useState(false);

    const changeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(data)

    const changeHandler = (e) => {
        setChaked(e.target.value)
    }

    useEffect(() => {
        if (chaked === '') {
            setTitle({
                name: '',
                placeholder: '',
                description: '',
                name1: '',
                placeholder1: '',
                description1: ''
            })
            toast.error('Bir yo`nalish tanlang')

        } else if (chaked === 'engqr') {
            setTitle({
                name: 'eng',
                placeholder: 'please write your english word',
                description: 'ingliz tilidagi so`zni kiriting.',
                name1: 'qr',
                placeholder1: 'qaraqalpaq tilindegi so`zdi kiriting',
                description1: 'qaraqalpaq tilibdegi so`zlik'
            })
            toast.success('Eng qr tanlandi')
        } else if (chaked === 'enguzb') {
            setTitle({
                name: 'eng',
                placeholder: 'please write your english word',
                description: 'ingliz tilidagi so`zni kiriting.',
                name1: 'uzb',
                placeholder1: 'uzbek tilidagi so`zni kiriting',
                description1: 'uzbek tilidagi so`zni '
            })
            toast.success('Eng uzb tanlandi')

        } else if (chaked === 'rusuzb') {
            setTitle({
                name: 'rus',
                placeholder: 'писать свой словар.',
                description: 'rus tilidagi so`zni kiriting.',
                name1: 'uzb',
                placeholder1: 'uzbek tilidagi so`zni kiriting',
                description1: 'uzbek tilidagi so`zni '
            })
            toast.success('Rus uzb tanlandi')

        } else if (chaked === 'rusqr') {
            setTitle({
                name: 'rus',
                placeholder: 'писать свой словар.',
                description: 'rus tilidagi so`zni kiriting.',
                name1: 'qr',
                placeholder1: 'qaraqalpaq tilindegi so`zdi kiriting',
                description1: 'qaraqalpaq tilibdegi so`zlik'
            })
            toast.success('Rus qr tanlandi')

        }


    }, [chaked])


    // 935782303
    const sendData = async () => {
        setLoading(true);
        await axios.post('https://learndickback.herokuapp.com/dick/create', { eng: data.eng, rus: data.rus, uzb: data.uzb, qr: data.qr, email: localStorage.getItem('email') })
            .then(res => {
                setLoading(false);
                console.log(res.data)
                toast.success(res.data.message)
                if (res.data.error) {
                    toast.error(res.data.error)
                }
                setTitle({
                    name: '',
                    placeholder: '',
                    description: '',
                    name1: '',
                    placeholder1: '',
                    description1: ''
                })
            })
            .catch(err => {
                setLoading(false);
                console.log(err.message)
                toast.error(err.message)
            })
    }




    return (
        <div className="container">
            <Radios setChaked={changeHandler} setTitle={setTitle} chaked={chaked} />
            <div className="row">
                <Inputlar title={title} change={changeData} />
            </div>
            <button className="btn btn-outline-primary" onClick={sendData} >Saqlash {loading && <Loading />}</button>
        </div>
    )
}
export default NewDick;