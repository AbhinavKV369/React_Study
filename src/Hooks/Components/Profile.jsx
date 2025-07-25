import React, { useContext } from 'react'
import Contact from './Contact'
import { AppContext } from '../UseContext/AppContext'

const Profile = () => {
  const {name} = useContext(AppContext)
  return (
    <div>
        <h1>Profile</h1>
        <h2>{name}</h2>
        <Contact />
    </div>
  )
}

export default Profile