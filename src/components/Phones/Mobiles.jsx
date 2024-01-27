import React, { useContext, useState } from 'react'
import MobileContext, { MobileContextProvider } from '../../context/MobileContext'
import ProductContext from '../../context/ProductContext';

const Mobiles = () => {

  const mobiles = useContext(MobileContext);
  console.log(mobiles.title);

  const laptop = useContext(ProductContext);

  // const mobileContextProvider = useContext(MobileContextProvider);
  // console.log(mobileContextProvider);

  function handleClick() {
  }

  return (
    <div>
      <h1>Mobiles</h1>

      <div className='flex gap-3'>
        {
          mobiles.mobiles?.map((item, index) =>
            <div className='w-52 h-56 rounded ' key={index}>
              <img src={item.image} alt="" className='' />
              <h3> {item.brand ? item.brand : "Null"} </h3>
              <h3>{item.price} </h3>
              <h3>{item.color} </h3>

            </div>
          )
        }
      </div>
      <img src={laptop.image} alt="" />
      <h3>{laptop.brand} </h3>
      <h3>{laptop.price} </h3>
      <h3>{laptop.color} </h3>

      <button onClick={handleClick} className='bg-orange-600'>Change Titles</button>


      {/* <h2 className='font-bold text-2xl'>Mobiles</h2>
      <img src={mobiles.image} alt="" />
      <h3> {mobiles.brand} </h3>
      <h3> {mobiles.price} </h3>
      <h3> {mobiles.color} </h3> */}
    </div>
  )
}

export default Mobiles