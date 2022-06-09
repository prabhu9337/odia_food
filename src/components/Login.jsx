import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {UserContext} from '../App'

const Login = () => {
  const {state, dispatch} = useContext(UserContext);
  const [isMenu, setIsMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setIsMenu(false);
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log("login Data is here ", data);



      if(!email || !password) {
        window.alert('please fill all the field')
      }
      else {
        if(data.message === 'Login successful') {
          dispatch({type : "USER", payload : true})
          console.log(data)
          window.alert(data.message);
          nav('/')
        }
        else {
          window.alert(data.error);
        }
      }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-2xl text-center font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-10 before:h-1 before:-bottom-2 before:left-4 before:bg-gradient-to-tr from-green-500 to-green-100 transition-all ease-in-out duration-100">
        Login
      </p>
      <form method="POST">
        <div className="w-full flex flex-col items-center justify-center">
          <input
            className="text-lg mt-5 border-2 outline-none p-1 w-80 rounded-xl border-green-500"
            type="email"
            placeholder="Enter your email id"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="text-lg mt-5 border-2 outline-none p-1 w-80 rounded-xl border-green-500"
            type="password"
            placeholder="Enter your password"
            name="passwrod"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="p-2 mt-5 bg-green-500 rounded-xl w-20 text-base font-semibold"
            onClick={loginUser}
          >
            Login
          </button>
          <p className="mt-2">
            Don't have an account <Link to={"/register"}><span className="text-lg font-semibold cursor-pointer text-orange-600">Register</span></Link> here</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
