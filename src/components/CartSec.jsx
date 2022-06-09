import React, { useState } from 'react';
import {BiArrowBack} from 'react-icons/bi';
import {MdRefresh} from 'react-icons/md';
import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai';
import {motion} from 'framer-motion';
import ChickenMasala from '../img/Masala/Chicken Masala 1.JPG';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const CartSec = () => {
    const [{cartShow}, dispatch] = useStateValue();
    const [isCart, setIsCart] = useState(false);

    const showCart = () => {
        dispatch({
            type : actionType.SET_CART_SHOW,
            cartShow : !cartShow,
        })
    }
    const showCart1 = () => {
        setIsCart(!isCart)
    }

  return (
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
  )
}

export default CartSec