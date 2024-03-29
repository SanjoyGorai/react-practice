import React, { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import MobileContext, { LaptopContextMob } from '../../context/MobileContext';


const Laptop = () => {

  const laptop = useContext(MobileContext)
  console.log('Laptops', laptop);
  // const mobiles = useContext(LaptopContextMob);

  return (
    <div>
      <h1>Laptops-Mobiles</h1>
      <h2>Laptops (Macbooks) </h2>
      <img src={laptop.mobiles.image} alt="" />
      <h3>{laptop?.brand} </h3>

      <div className='flex gap-3'>
        {
          laptop.mobiles?.map((item, index) =>
            <div className='w-52 h-56 rounded ' key={index}>
              <img src={item.image} alt="" className='' />
              <h3>{item.brand} </h3>
              <h3>{item.price} </h3>
              <h3>{item.color} </h3>
              <h3 className='font-bold text-red-600'>Title: {laptop.title} </h3>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Laptop