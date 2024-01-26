import { createContext } from "react";
import AppleiPhone14 from '../assets/Apple iPhone 14 PRODUCT RED,128 GB.webp';

const mobileDetails = {
    brand: 'Apple',
    image: AppleiPhone14,
    price: '20,000',
    color: 'White'
}

const user = {
    name: 'Sanjoy Gorai',
    age: 23
}

const UserContext = createContext(user, mobileDetails);

export default UserContext;