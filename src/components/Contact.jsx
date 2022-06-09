import React from 'react'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
import {FaHome} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-7 before:bg-gradient-to-tr from-green-100 to-green-500 transition-all ease-in-out duration-100">Contact Us</p>
        <div className="w-full h-full flex lg:flex items-center justify-center my-10 py-2 gap-2 flex-wrap rounded-xl">
            <motion.div whileHover={{scale : '1.05'}} className="w-full lg:w-80 lg:h-60 p-2 ml-3 mb-2 mt-2 mr-3 lg:m-3 pb-0 pl-0 pr-0 bg-green-300 backdrop-blur-md rounded-xl flex flex-col items-center justify-center drop-shadow-md transition-all duration-200 ease-in-out">
                <MdEmail className="text-5xl m-2"/>
                <p className="text-lg lg:text-xl p-2 font-semibold text-textColor">Email</p>
                <p className="text-xl lg:text-xl font-semibold text-orange-500 p-2 text-center">municoinnotech@gmail.com</p>
            </motion.div>
            <motion.div whileHover={{scale : '1.05'}} className="w-full lg:w-80 lg:h-60 p-2 ml-3 mb-2 mt-2 mr-3 lg:m-3 pb-0 pl-0 pr-0 bg-green-300 backdrop-blur-md rounded-xl flex flex-col items-center justify-center drop-shadow-md transition-all duration-200 ease-in-out">
                <BsFillTelephoneOutboundFill className="text-5xl m-2"/>
                <p className="text-lg lg:text-xl p-2 font-semibold text-textColor">Phone No</p>
                <p className="text-xl lg:text-2xl font-semibold text-orange-500 p-2 text-center">0123456789</p>
            </motion.div>
            <motion.div whileHover={{scale : '1.05'}} className="w-full lg:w-80 lg:h-60 p-2 ml-3 mb-2 mt-2 mr-3 lg:m-3 pb-0 pl-0 pr-0 bg-green-300 backdrop-blur-md rounded-xl flex flex-col items-center justify-center drop-shadow-md transition-all duration-200 ease-in-out">
                <FaHome className="text-5xl m-2"/>
                <p className="text-lg lg:text-xl p-2 font-semibold text-textColor">Address</p>
                <p className="text-xl lg:text-2xl font-semibold text-orange-500 p-2 text-center text-wrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, facilis.</p>
            </motion.div>
        </div>
      <div className="">

      </div>
      <Footer/>
    </div>
  )
}

export default Contact
