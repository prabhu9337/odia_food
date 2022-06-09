import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const nav = useNavigate()
    const [user, setUser] = useState({
        name : "", phoneNo : "", email : "", password : "", confirmPassword : ""
    })

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name] : value})
    }

    const newUser = async (e) => {
        e.preventDefault()

        const {name, phoneNo, email, password, confirmPassword} = user;

        if(!name || !email || !phoneNo || !password || !confirmPassword) {
            window.alert('Please fill all the field')
        }

        const res = await fetch('/register', {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                name, email, phoneNo, password, confirmPassword
            })
        })

        const data = await res.json()
        
        if(data.message === 'user created successfully') {
            window.alert(data.message)
            nav('/login')
            setUser({name : "", phoneNo : "", email : "", password : "", confirmPassword : ""})
        }
        else {
            window.alert(data.error)
        }
    }
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl text-center font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-2 before:bg-gradient-to-tr from-green-500 to-green-100 transition-all ease-in-out duration-100">Register</p>
        <div className="w-80 flex items-center justify-between mt-7">
        </div>
        <div className="w-full flex flex-col items-center justify-center">
            <input className="text-lg mt-5 border-2 outline-none p-1 w-80 rounded-xl border-green-500" type="text" placeholder="Enter your name" name="name" value={user.name} onChange={handleInput} required/>
            <input className="text-lg mt-5 border-2 outline-none p-1 w-80 rounded-xl border-green-500" type="number" placeholder="Enter your phone no" name="phoneNo" value={user.phoneNo} onChange={handleInput} required/>
            <input className="text-lg mt-5 border-2 outline-none p-1 w-80 rounded-xl border-green-500" type="email" placeholder="Enter your email id" name="email" value={user.email} onChange={handleInput} required/>
            <input className="text-lg mt-5 border-2 outline-none p-1 w-80 rounded-xl border-green-500" type="password" placeholder="Enter your password" name="password" value={user.password} onChange={handleInput} required/>
            <input className="text-lg mt-5 border-2 outline-none p-1 w-80 rounded-xl border-green-500" type="password" placeholder="Confirm password" name="confirmPassword" value={user.confirmPassword} onChange={handleInput} required/>
            <motion.button whileTap={{scale: 0.7}} className="p-2 mt-5 bg-green-500 rounded-xl w-20 text-base font-semibold transition-all duration-100 ease-in-out" onClick={newUser}>Register</motion.button>
            <p className="mt-2">Already have an account <Link to={'/login'}><span className="text-lg font-semibold cursor-pointer text-orange-600"> Login </span></Link>here</p>
        </div>
    </div>
  )
}

export default Register
