import './App.css';
import UI from './ui';
import { Route, Routes } from 'react-router-dom';
// import {useSpeechSynthesis} from 'react-speech-kit'
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Dashboard from './uiUser';
import MyDictionry from './components/UIDashboardNav/MyDictionry';
import OutherDictionry from './components/UIDashboardNav/OutherDictionry';
import MyChats from './components/UIDashboardNav/MyChats';
import PersonalAccount from './components/UIDashboardNav/PersonalAccount';
import SignOut from './components/UIDashboardNav/SignOut';
import axios from 'axios';

function App() {
  // const {speak} = useSpeechSynthesis();
  // let text = 'Hello my friend'
  // const gapir = ()=>{
  //   speak({text: text})
  // }


  const { auth } = useContext(Context);
  const [user, setUser] = useState(false);
  const [uset, setUset] = useState(null);
  // const [message, setMessage] = useState('')
  // const [error, setError] = useState('')


  const sendEmail = async (res) => {
    await axios.post("https://learndickback.herokuapp.com//student/create", {
      email: res.user.email,
      photoUrl: res.user.photoURL,
      displayName: res.user.displayName,
      phoneNumber: res.user.phoneNumber
    }).then(doc => {
      console.log(doc)
    }).catch(err => {
      console.log(err)
    })
  }

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user.displayName)
        localStorage.setItem('photoUrl', res.user.photoURL)
        localStorage.setItem('displayName', res.user.displayName)
        localStorage.setItem('email', res.user.email)
        sendEmail(res)
        setUser(true)
        localStorage.setItem('user', true)
        setUset(true)
      })
      .catch(e => {
        alert(e.message)
      })
    console.log(data)
  }

  useEffect(() => {
    setUset(localStorage.getItem('user'))
  }, [])

  let data = uset || user;

  // error={error} message={message} 
  if (data) {
    return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='/mydictionry' element={<MyDictionry />} />
        <Route path='/otherdictionry' element={<OutherDictionry />} />
        <Route path='/mychats' element={<MyChats />} />
        <Route path='/personal' element={<PersonalAccount />} />
        <Route path='/signOut' element={<SignOut />} />
        <Route path='*' element={<main>
          Bunday sahifa mavjud emas.
        </main>} />


      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path='/' element={<UI login={login} />} />
      </Routes>
    )
  }

}

export default App;
