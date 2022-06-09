import React from 'react'
import Delivery from '../img/delivery.png'
import SuperFood from '../img/odia_food_img/Superfoods Mix3.png';
import { productData } from '../utils/data';

const HomeContainer = () => {
  return (
      <>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
        <div className="flex items-center gap-2 justify-center bg-green-100 px-4 py-1 rounded-full">
          <p className="text-base text-green-500 font-semibold">Home Delivery</p>
          <div className="w-10 h-10 rounded-full overflow-hidden drop-shadow-xl bg-green-300">
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">Delivery <span className="text-green-600 text-[3.5rem]">Natural Food</span> in your City</p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet nihil iure doloribus cupiditate voluptatibus dolorum, ullam animi facilis illum rem iste et unde qui modi laboriosam est tempora inventore repellat dignissimos deleniti, sint neque! Quia necessitatibus fuga minus. Temporibus?</p>
        <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-green-400 transition-all ease-in-out duration-100">Order Now</button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={SuperFood} className="ml-auto h-370 w-full lg:w-auto lg:h-420" alt="mainbanner" />
      </div>
    </section>
    <p className="text-3xl bg-green-200 p-2 mt-2 rounded-tl-2xl rounded-tr-2xl text-orange-400 font-semibold">Just Dropped</p>
    <div className="w-full h-full flex items-center justify-center py-2 gap-2 flex-wrap bg-green-200 rounded-xl">
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
    </>
  )
}

export default HomeContainer