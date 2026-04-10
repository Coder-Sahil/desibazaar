
import Header from '../header/header'
import ListAndCart from '../listandcart/listandcart'
import { useCart } from '../../context/cart-context'
import ProductTotal from '../producttotal/producttotal';

const Cart = () => {

    const { cart } = useCart();
    return (
        <>
            <Header />
            <div className='flex border-4'>
                <div className='flex flex-col border-r-4 '>
                    <h1 className='text-3xl font-bold font-sans bg-amber-500 text-slate-100 p-2 rounded-lg mx-4'>
                        <span className="material-symbols-outlined px-2">shopping_cart</span>
                        CART
                    </h1>
                    {
                        cart.length > 0
                            ?
                            <>
                                {cart.map(product => (
                                    <ListAndCart product={product} tag='CART' />
                                ))}
                            </>
                            :
                            <>
                                <div className='text-5xl p-4 font-bold text-red-500'>
                                    <p>Empty Cart</p>
                                    <span class="material-symbols-outlined text-5xl p-4">
                                        shopping_cart_off
                                    </span>
                                </div>
                            </>
                    }
                </div>
                {
                    cart.length > 0 &&
                        <div className='flex flex-col'>
                            <ProductTotal />
                        </div>
                }
            </div>
        </>
    )
}

export default Cart;