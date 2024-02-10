import React from 'react'
import { useNavigate,Router } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { database } from './Firebase'
import{initFirebase} from './Firebase'
import {getAuth} from 'firebase/auth';


const Subscription = () => {
    const app = initFirebase();
    const auth = getAuth(app);
    
    const email = auth.currentUser?.email
    const [isPremium,setIsPremium] = useState(false)

    const upgradeToPremium = async() =>{
        // do something

    }
    const manageSubscription = async() =>{

    }
    const signOut = async() =>{
        useNavigate('/')
    }


  return (
    <div>Subscription</div>
  )
}

export default Subscription