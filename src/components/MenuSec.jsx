import React,{useState} from 'react'
import {categories} from '../utils/data'
import {motion} from 'framer-motion'
import {productData} from '../utils/data'

const MenuSec = () => {
  const [filter, setFilter] = useState("masala");

  return (
      <section className="w-full" id="menu">
        <div className="w-full flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-6 before:bg-gradient-to-tr from-green-500 to-green-100 transition-all ease-in-out duration-100">Our Odia Food</p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                {
                  categories && categories.map((category) => (
                    <motion.div whileTap={{scale: 0.75}} key={category.id} className={`group ${filter === category.urlParamName ? "bg-green-600" : "bg-green-200"} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-green-600`} onClick={() => setFilter(category.urlParamName)}>
                      <div className={`w-10 h-10 rounded-full ${filter === category.urlParamName ? "bg-green-200" : "bg-green-600"} group-hover:bg-green-200 flex items-center justify-center`}>
                        <img className="w-full h-full rounded-full object-cover" src={category.imgSrc} alt={category.name}/>
                      </div>
                      <p className={`text-xs font-semibold ${filter === category.urlParamName ? "text-white" : "text-textColor"} group-hover:text-white`}>{category.name}</p>
                    </motion.div>
                  ))
                }
            </div>

            <div className="w-full">
            <div className="w-full h-full flex items-center justify-center py-2 gap-2 flex-wrap rounded-xl">
        {
            productData && productData.map(product => (
                <div key={product.id} className="w-[160px] lg:w-225 p-2 ml-3 mb-2 mt-2 mr-3 lg:m-3 pb-0 pl-0 pr-0 bg-green-300 backdrop-blur-md rounded-xl flex flex-col items-center justify-center drop-shadow-md">
                    <img src={product.imgSrc} className="w-[100px] h-[110px] lg:w-[150px] lg:h-[170px] rounded-xl object-cover" alt="chicken_masala" />
                    <p className="text-base lg:text-xl pt-1 font-semibold text-textColor">{product.name}</p>
                    <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold text-center my-1 pl-2 pr-2">{product.desc.slice(0, 31)}</p>
                    <p className="text-md font-semibold text-headingColor bg-green-500 w-full p-1.5 text-center rounded-br-xl rounded-bl-xl"><span className="text-md text-green-700">₹</span> {product.price}</p>
                </div>
            ))
        }
    </div>
            </div>
        </div>
      </section>
  )
}

export default MenuSec;