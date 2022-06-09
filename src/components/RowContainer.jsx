import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {categories} from '../utils/data'

const RowContainer = ({flag, scrollValue}) => {
    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])
  return (
    <div ref={rowContainer} className={`w-full flex items-center my-12 p-2 scroll-smooth bg-green-200 ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden"}`}>
        {
            categories && categories.map((category) => (
                <div className="w-200 min-w-[200px] md:w-220 md:min-w-[220px] h-auto my-12 mx-5 bg-green-300 rounded-tl-2xl rounded-tr-2xl shadow-lg rounded-bl-xl rounded-br-xl">
                    <div className="w-full flex flex-col items-center justify-between">
                        <motion.img whileHover={{scale: 1.05}} src={category.imgSrc} className="w-40 h-[200px] -mt-8 rounded-tl-3xl rounded-tr-3xl object-cover" alt="img" />
                        <div className="w-full flex items-center bg-white rounded-bl-xl rounded-br-xl">
                            <p className="text-sm lg:text-md p-2 ml-5 w-full text-orange-500 font-semibold uppercase">{category.name}</p>
                            <motion.p whileHover={{scale : 1.2}} whileTap={{scale : 0.6}} className="text-3xl mr-3 text-orange-500 cursor-pointer"><BsFillArrowRightCircleFill/></motion.p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RowContainer
