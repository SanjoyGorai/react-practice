import React, { useContext } from 'react'
import MobileContext from '../../context/MobileContext'

const Mobiles = () => {

  const mobiles = useContext(MobileContext)

  return (
    <div>
      <h2 className='font-bold text-2xl'>Mobiles</h2>
      <img src={mobiles.image} alt="" />
      <h3> {mobiles.brand} </h3>
      <h3> {mobiles.price} </h3>
      <h3> {mobiles.color} </h3>
    </div>
  )
}

export default Mobiles