import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {UserContext} from '../App'

const Logout = () => {
    const {state, dispatch} = useContext(UserContext);
    const nav = useNavigate()
    useEffect(() => {
        fetch('/logout', {
            method : "GET",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            credentials : "include"
        }).then((res) => {
            dispatch({type : "USER", payload : false})
            nav('/')
            if(res.status !== 200) {
                console.log('error happening...')
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])
  return (
    <div>
      logout
    </div>
  )
}

export default Logout
