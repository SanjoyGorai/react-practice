import { createContext } from "react"
import Vivo from '../../public/mobiles/vivo.webp';
import Apple14 from '../../public/mobiles/Apple iPhone 14 Purple, 128 GB.webp';


const mobileDetails = {
    brand: 'Apple',
    image: Apple14,
    price: '20,000',
    color: 'White'
}

const MobileContext = createContext(mobileDetails);

export default MobileContext;