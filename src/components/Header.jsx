import React, { useContext, useState } from "react";
import logo from "../img/odiafoods.gif";
import Avatar from '../img/avatar.png'
import {BsCart4} from 'react-icons/bs';
import {MdAdd, MdLogout} from 'react-icons/md';
import {motion} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

import {BiArrowBack} from 'react-icons/bi';
import {MdRefresh} from 'react-icons/md';
import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai';
import ChickenMasala from '../img/Masala/Chicken Masala 1.JPG';

import {UserContext} from '../App';
import CartSec from "./CartSec";

const Header = () => {
    const {state, dispatch} = useContext(UserContext)

    console.log("state is here ", state);

    // const [{user, cartShow}, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const nav = useNavigate()

    const showMenu = () => {
        setIsMenu(!isMenu)
    }

    // const logout = () => {
    //     setIsMenu(false);
    //     localStorage.clear()
    //     nav('/')
    // }

    // const showCart = () => {
    //     dispatch({
    //         type : actionType.SET_CART_SHOW,
    //         cartShow : !cartShow,
    //     })
    // }

    const showCart1 = () => {
        setIsCart(!isCart)
    }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-4 md:px-16 bg-gradient-to-br from-green-200 to-green-400 drop-shadow-md">
      {/* this is for desktop & tablet */}
      {/* this is logo */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={'/'} className="flex items-center gap-2">
          <img src={logo} className="w-20 object-cover bg-green-100" alt="logo" />
        </Link>
            {/* this is for header component */}
        <div className="flex items-center gap-8">
            <motion.ul initial={{opacity : 0, x : 200}} animate={{opacity : 1, x : 0}} exit={{opacity : 0, x : 200}} className="flex items-center gap-8 font-semibold">
                <Link to={'/'}>
                <li className="text-base text-textColor hover:overline hover:underline-offset-2 hover:decoration-2 hover:decoration-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
                    Home
                </li>
                </Link>
                <li className="text-base text-textColor hover:overline hover:decoration-2 hover:decoration-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
                    Category
                </li>
                <Link to={'/about'}>
                    <li className="text-base text-textColor hover:overline hover:decoration-2 hover:decoration-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
                        About Us
                    </li>
                </Link>
                <Link to={'/contact'}>
                <li className="text-base text-textColor hover:overline hover:decoration-2 hover:decoration-orange-500 duration-100 transition-all ease-in-out cursor-pointer">
                    Contact
                </li>
                </Link>
            </motion.ul>

            {/* this is for cart */}
            <div className="relative flex items-center justify-center" >
                <BsCart4 className="text-textColor text-2xl cursor-pointer" onClick={showCart1}/>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center" >
                    <p className="text-sm text-white font-semibold">2</p>
                </div>

                {/* cart section */}
                {
                    isCart && (
                        <>
                        <motion.div initial={{opacity : 0, x : 200}} animate={{opacity : 1, x : 0}} exit={{opacity : 0, x : 200}} className="fixed top-0 right-0 z-[101] w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col">
                                <div className="w-full flex items-center justify-between p-4 cursor-pointer">
                                    <motion.div whileTap={{scale: 0.7}} onClick={showCart1}>
                                        <BiArrowBack className="text-textColor text-3xl"/>
                                    </motion.div>
                                        <p className="text-textColor text-lg font-semibold">Cart</p>
                                        <motion.p whileTap={{scale: 0.7}} className="flex items-center gap-2 p-1 px-2 my-2 bg-rose-300 rounded-md hover:shadow-md cursor-pointer text-textColor text-base font-semibold">Clear <MdRefresh/></motion.p>
                                </div>

                                {/* bottom section */}
                                <div className="w-full h-full bg-green-300 rounded-t-[2rem] flex flex-col">
                                    <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                                    {/* cart items */}
                                        <div className="w-full p-1 px-2 rounded-lg bg-orange-400 flex items-center gap-2">
                                            <img src={ChickenMasala} className="w-20 h-20 max-w-[60px] rounded-md object-cover" alt="chickenMasala" />

                                            {/* name section */}
                                            <div className="flex flex-col gap-2">
                                                <p className="text-base text-gray-50">Chicken Masala</p>
                                                <p className="text-sm block text-gray-300 font-semibold">₹ 150</p>
                                            </div>

                                            {/* button section */}
                                            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                                                <motion.div whileTap={{scale: 0.75}}>
                                                    <AiOutlineMinusSquare className="text-lg text-gray-50"/>
                                                </motion.div>
                                                    <p className="w-5 h-5 rounded-sm text-gray-50 flex items-center justify-center">
                                                        1
                                                    </p>
                                                <motion.div whileTap={{scale: 0.75}}>
                                                    <AiOutlinePlusSquare className="text-lg text-gray-50"/>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* cart total section */}
                                    <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-gray-400 text-lg">Sub Total</p>
                                            <p className="text-gray-400 text-lg">₹ 500</p>
                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-gray-400 text-lg">Delivery Charge</p>
                                            <p className="text-gray-400 text-lg">₹ 50</p>
                                        </div>

                                        <div className="w-full border-b border-gray-600 my-5"></div>

                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-gray-200 text-xl font-semibold">Total</p>
                                            <p className="text-gray-200 text-xl font-semibold">₹ 550</p>
                                        </div>

                                        <motion.button whileTap={{scale: 0.8}} className="w-full p-2 rounded-lg bg-green-600 text-gray-50 text-lg my-2 hover:shadow-lg" type="button">
                                            Check Out
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )
                }
            </div>

            {/* this is for user profile */}
            <div className="relative">
            <motion.img whileTap={{scale : 0.6}} initial={{opacity : 0, scale : 0.6}} animate={{opacity : 1, scale : 1}} exit={{opacity : 0, scale : 0.6}} src={Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt="userprofile" onClick={showMenu}/>
            {
                isMenu && (
                    <div>
                    <motion.div initial={{opacity : 0, scale : 0.6}} animate={{opacity : 1, scale : 1}} exit={{opacity : 0, scale : 0.6}} className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                        {
                            !state ? (
                                <>
                        <Link to="/login">
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>Login</p>
                        </Link>
                        <Link to="/register">
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>Register</p>
                        </Link>
                                </>
                            ) :

                            (
                                <>
                        <Link to="/profile">
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>Profile</p>
                        </Link>

                        {/* {
                            user && user.email === "prabhupada121@gmail.com" && (
                                <Link to={'/createItem'}>
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>New Item<MdAdd/></p>
                                </Link>
                            )
                        } */}
                        <Link to='/logout'>
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>Logout<MdLogout/></p>
                        </Link>
                                </>
                            )
                        }
                       
                    </motion.div>
                        </div>
                    )
                }
                
                {/* <motion.img whileTap={{scale : 0.6}} src={user ? user.photoURL : Avatar} className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt="userprofile" onClick={login} /> */}
                {/* {
                    isMenu && (
                    <motion.div initial={{opacity : 0, scale : 0.6}} animate={{opacity : 1, scale : 1}} exit={{opacity : 0, scale : 0.6}} className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                        {
                            user && user.email === "prabhupada121@gmail.com" && (
                                <Link to={'/createItem'}>
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>New Item<MdAdd/></p>
                                </Link>
                            )
                        }
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={logout}>Logout<MdLogout/></p>
                    </motion.div>
                    )
                } */}
            </div>
        </div>
      </div>

      {/* this is for mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to={'/'} className="flex items-center gap-2">
          <img src={logo} className="w-20 object-cover" alt="logo" />
        </Link>

        <div className="relative flex items-center justify-center" onClick={showCart1}>
                <BsCart4 className="text-textColor text-2xl cursor-pointer"/>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-sm text-white font-semibold">2</p>
                </div>
                {
                    isCart && (
                        <>
                        <motion.div initial={{opacity : 0, x : 200}} animate={{opacity : 1, x : 0}} exit={{opacity : 0, x : 200}} className="fixed top-0 right-0 z-[101] w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col">
                                <div className="w-full flex items-center justify-between p-4 cursor-pointer">
                                    <motion.div whileTap={{scale: 0.7}} onClick={showCart1}>
                                        <BiArrowBack className="text-textColor text-3xl"/>
                                    </motion.div>
                                        <p className="text-textColor text-lg font-semibold">Cart</p>
                                        <motion.p whileTap={{scale: 0.7}} className="flex items-center gap-2 p-1 px-2 my-2 bg-rose-300 rounded-md hover:shadow-md cursor-pointer text-textColor text-base font-semibold">Clear <MdRefresh/></motion.p>
                                </div>

                                {/* bottom section */}
                                <div className="w-full h-full bg-green-300 rounded-t-[2rem] flex flex-col">
                                    <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                                    {/* cart items */}
                                        <div className="w-full p-1 px-2 rounded-lg bg-orange-400 flex items-center gap-2">
                                            <img src={ChickenMasala} className="w-20 h-20 max-w-[60px] rounded-md object-cover" alt="chickenMasala" />

                                            {/* name section */}
                                            <div className="flex flex-col gap-2">
                                                <p className="text-base text-gray-50">Chicken Masala</p>
                                                <p className="text-sm block text-gray-300 font-semibold">₹ 150</p>
                                            </div>

                                            {/* button section */}
                                            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                                                <motion.div whileTap={{scale: 0.75}}>
                                                    <AiOutlineMinusSquare className="text-lg text-gray-50"/>
                                                </motion.div>
                                                    <p className="w-5 h-5 rounded-sm text-gray-50 flex items-center justify-center">
                                                        1
                                                    </p>
                                                <motion.div whileTap={{scale: 0.75}}>
                                                    <AiOutlinePlusSquare className="text-lg text-gray-50"/>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* cart total section */}
                                    <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-gray-400 text-lg">Sub Total</p>
                                            <p className="text-gray-400 text-lg">₹ 500</p>
                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-gray-400 text-lg">Delivery Charge</p>
                                            <p className="text-gray-400 text-lg">₹ 50</p>
                                        </div>

                                        <div className="w-full border-b border-gray-600 my-5"></div>

                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-gray-200 text-xl font-semibold">Total</p>
                                            <p className="text-gray-200 text-xl font-semibold">₹ 550</p>
                                        </div>

                                        <motion.button whileTap={{scale: 0.8}} className="w-full p-2 rounded-lg bg-green-600 text-gray-50 text-lg my-2 hover:shadow-lg" type="button">
                                            Check Out
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )
                }
        </div>

        <div className="relative">
                <motion.img whileTap={{scale : 0.6}} src="https://cdn.pixabay.com/photo/2022/05/14/13/56/bear-7195751_960_720.jpg" className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt="userprofile"/>
                    <motion.div initial={{opacity : 0, scale : 0.6}} animate={{opacity : 1, scale : 1}} exit={{opacity : 0, scale : 0.6}} className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                        {/* {
                            user && user.email === "prabhupada121@gmail.com" && (
                                <Link to={'/createItem'}>
                                    <p className="m-2 p-2 shadow-md flex items-center justify-center rounded-md gap-3 cursor-pointer hover:bg-green-200 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>New Item<MdAdd/></p>
                                </Link>
                            )
                        } */}
                <ul className="flex flex-col">
                    <Link to={'/'}>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-green-200 hover:p-2 hover:shadow-md px-4 py-2" onClick={() => setIsMenu(false)}>
                        Home
                    </li>
                    </Link>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-green-200 hover:p-2 hover:shadow-md px-4 py-2" onClick={() => setIsMenu(false)}>
                        Category
                    </li>
                    <Link to={'/about'}>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-green-200 hover:p-2 hover:shadow-md px-4 py-2" onClick={() => setIsMenu(false)}>
                        About Us
                    </li>
                    </Link>
                    {/* <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-green-200 hover:p-2 hover:shadow-md px-4 py-2" onClick={() => setIsMenu(false)}>
                        Service
                    </li> */}
                    <Link to={'/contact'}>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-green-200 hover:p-2 hover:shadow-md px-4 py-2" onClick={() => setIsMenu(false)}>
                        Contact
                    </li>
                    </Link>
                </ul>
                    <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-red-300 transition-all duration-100 ease-in-out text-textColor text-base">Logout<MdLogout/></p>
                    </motion.div>
            </div>
      </div>
    </header>
  );
};

export default Header;
