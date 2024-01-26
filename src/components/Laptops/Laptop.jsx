import React,{useContext} from 'react'
import ProductContext from '../../context/ProductContext'


const Laptop = () => {

  const laptop = useContext(ProductContext)
  console.log(laptop);

  return (
    <div>
      <h2>Laptops (Macbooks) </h2>
      <img src={laptop.image} alt="" />
      <h3>{laptop?.brand} </h3>
    </div>
  )
}

export default Laptop