import React, { useContext } from 'react'
import MobileContext from '../../context/MobileContext'

const Mobiles = () => {

  const mobiles = useContext(MobileContext);
  console.log(mobiles);

  function handleClick(params) {
    
  }

  return (
    <div>
        <h1>Mobiles</h1>

      <div className='flex gap-3'>
        {
          mobiles?.map((item, index) =>
            <div className='w-52 h-56 rounded ' key={index}>
              <img src={item.image} alt="" className='' />
              <h3>{item.brand} </h3>
              <h3>{item.price} </h3>
              <h3>{item.color} </h3>

            </div>
          )
        }
      </div>
      <button onClick={handleClick}>Change Titles</button>

      {

      }

      {/* <h2 className='font-bold text-2xl'>Mobiles</h2>
      <img src={mobiles.image} alt="" />
      <h3> {mobiles.brand} </h3>
      <h3> {mobiles.price} </h3>
      <h3> {mobiles.color} </h3> */}
    </div>
  )
}

export default Mobiles