
//import {useCart } from '../context/cart-context';

export const checkProductInCart = (pid, cart) => {

    try {
        //console.log(`ID - ${pid}`);
        const productAvailable = cart.some(product => product.id === pid) ? true : false;
        return productAvailable;
    } catch (error) {
        return error;
    }

}

export default checkProductInCart;