import { createContext } from "react"
import Vivo from '../../public/mobiles/vivo.webp';
import Apple14 from '../../public/mobiles/Apple iPhone 14 Purple, 128 GB.webp';
import Aser from '../../public/laptops/Acer Nitro 5 AN515-58 NH.QFSSI.001 Gaming Laptop.webp';
import AppleMacBook from '../../public/laptops/Apple MacBook Air 2020 MGND3HN Laptop.webp'


const mobiles = [
    {
        brand: 'Samsung',
        image: Vivo,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    },
    {
        brand: 'Samsung',
        image: Vivo,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    },
    {
        brand: 'Samsung',
        image: Apple14,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    },
    {
        brand: 'Samsung',
        image: Vivo,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    },
    {
        brand: 'Samsung',
        image: Apple14,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    },
    {
        brand: 'Samsung',
        image: Vivo,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    }
]

const laptops = [
    {
        brand: 'Samsung',
        image: Aser,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    },
    {
        brand: 'Apple Macbook',
        image: AppleMacBook,
        price: '20,000',
        color: 'Black',
        os: 'Android',
        weight: '2.4 kg',
        dimns: '10 inch x 15 inch'
    },
];

const mobileDetails = {
    
    brand: 'Apple',
    image: Apple14,
    price: '20,000',
    color: 'White'
}

const MobileContext = createContext(mobiles);
export const LaptopContextMob = createContext(laptops);

export default MobileContext;