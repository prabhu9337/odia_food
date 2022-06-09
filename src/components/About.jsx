import React from 'react';
import SuperFood from '../img/odia_food_img/Superfoods Mix3.png';
import HealthyFood from '../img/odia_food_img/Healthy food for a strong body (1).png';
import Papad from '../img/odia_food_img/Munico Papad (6).png'
import Footer from './Footer';

const About = () => {
  return (
      <>
    <div className="w-full hidden md:flex flex-col items-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-52 before:h-1 before:-bottom-2 before:left-10 before:bg-gradient-to-tr from-green-100 to-green-500 transition-all ease-in-out duration-100">What we provide to you</p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        {/* left section */}
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
                <p className="text-[2rem] font-bold tracking-wide text-headingColor">100% <span className="text-green-600 text-[2.5rem] lg:text-[3.5rem]">Organic Food</span></p>
                <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-green-400 transition-all ease-in-out duration-100">Order Now</button>
            </div>
        {/* right section */}
            <div className="py-2 flex-1 flex items-center relative">
                <img src={SuperFood} className="ml-auto h-370 w-full lg:w-auto lg:h-420" alt="mainbanner" />
            </div>
        </section>
        <section className="grid grid-cols-1 my-3 md:grid-cols-2 gap-2 w-full">
        {/* left section */}
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
                <img src={HealthyFood} className="h-370 w-full lg:w-auto lg:h-420" alt="mainbanner" />
            </div>
        {/* right section */}
            <div className="py-2 flex-1 flex flex-col items-start justify-center relative">
                <p className="text-[2rem] ml-5 font-bold tracking-wide text-headingColor">100% <span className="text-green-600 text-[2.5rem] lg:text-[3.5rem]">Healthy Food</span></p>
                <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 ml-5 rounded-lg hover:shadow-lg hover:shadow-green-400 transition-all ease-in-out duration-100">Order Now</button>
            </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        {/* left section */}
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
                <p className="text-[2rem] font-bold tracking-wide text-headingColor">Healthy <span className="text-green-600 text-[2.5rem] lg:text-[3.5rem]">Traditional Snacks</span></p>
                <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-green-400 transition-all ease-in-out duration-100">Order Now</button>
            </div>
        {/* right section */}
            <div className="py-2 flex-1 flex items-center relative">
                <img src={Papad} className="ml-auto h-370 w-full lg:w-auto lg:h-420" alt="mainbanner" />
            </div>
        </section>
        <Footer/>
    </div>

    {/* for mobile screen */}

    <div className="flex flex-col items-center justify-between md:hidden w-full h-full">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        {/* left section */}
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
                <p className="text-[2rem] font-bold tracking-wide text-headingColor">100% <span className="text-green-600 text-[2.5rem] lg:text-[3.5rem]">Organic Food</span></p>
                <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-green-400 transition-all ease-in-out duration-100">Order Now</button>
            </div>
        {/* right section */}
            <div className="py-2 flex-1 flex items-center relative">
                <img src={SuperFood} className="ml-auto h-370 w-full lg:w-auto lg:h-420" alt="mainbanner" />
            </div>
        </section>
        <section className="grid grid-cols-1 my-3 md:grid-cols-2 gap-2 w-full">
        {/* left section */}
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
                <p className="text-[2rem] ml-5 font-bold tracking-wide text-headingColor">100% <span className="text-green-600 text-[2.5rem] lg:text-[3.5rem]">Healthy Food</span></p>
                <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-green-400 transition-all ease-in-out duration-100">Order Now</button>
            </div>
        {/* right section */}
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HealthyFood} className="h-370 w-full lg:w-auto lg:h-420" alt="mainbanner" />
            </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        {/* left section */}
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
                <p className="text-[1.7rem] font-bold tracking-wide text-headingColor">Healthy <span className="text-green-600 text-[2.2rem] lg:text-[3.5rem]">Traditional Snacks</span></p>
                <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-green-400 transition-all ease-in-out duration-100">Order Now</button>
            </div>
        {/* right section */}
            <div className="py-2 flex-1 flex items-center relative">
                <img src={Papad} className="ml-auto h-370 w-full lg:w-auto lg:h-420" alt="mainbanner" />
            </div>
        </section>
        <Footer/>
        </div>
    </>
  )
}

export default About