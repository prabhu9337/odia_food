import React, { useEffect } from 'react';
import {useStateValue} from '../context/StateProvider'
import CategorySec from './CategorySec';
import HomeContainer from './HomeContainer';
import MenuSec from './MenuSec';
import Footer from './Footer';
import CartSec from './CartSec';

const MainContainer = () => {
  const [{cartShow}, dispatch] = useStateValue();
  useEffect(() => {

  }, [cartShow])
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer/>
      <CategorySec/>
      <MenuSec/>
      {
        cartShow && (
           <CartSec/>
        )
      }
      <Footer/>
    </div>
  )
}

export default MainContainer
