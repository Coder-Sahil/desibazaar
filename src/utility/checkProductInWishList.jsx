
//import { useCart } from '../context/cart-context';

export const checkProductInWishList = (pid, wishList) => {

    try {
        //console.log(`ID - ${pid}`);
        //console.log(wishList);
        const productAvailable = wishList.find(product => product.id === pid) ? true : false;
        //console.log(productAvailable);
        //console.log(wishList);
        return productAvailable;
    } catch (error) {
        return error;
    }

}

export default checkProductInWishList;