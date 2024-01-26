import { createContext } from "react";
// import AppleiPhone14 from '../assets/Apple iPhone 14 PRODUCT RED,128 GB.webp';
import Vivo from '../../public/mobiles/vivo.webp';

const mobileDetails = {
    brand: 'Apple',
    image: Vivo,
    price: '20,000',
    color: 'White'
}

const ProductContext = createContext(mobileDetails);

export default ProductContext;