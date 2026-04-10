

import Header from '../header/header'
import ListAndCart from '../listandcart/listandcart'
import { useCart } from '../../context/cart-context'

const WishList = () => {

    const { wishList } = useCart();

    return (
        <>
            <Header />
            <h1 className='text-3xl font-bold font-sans bg-amber-500 text-slate-100 p-2 rounded-lg mx-4'>
                <span className="material-symbols-outlined px-2">favorite</span>
                WISH LIST
            </h1>
            {
                wishList.length > 0
                    ?
                    <>
                        {wishList.map(product => (
                            <ListAndCart product={product} tag='CART' />
                        ))}
                    </>
                    :
                    <>
                        <div className='text-5xl p-4 font-bold text-red-500'>
                            <p>Empty WishList</p>
                            <span class="material-symbols-outlined text-5xl p-4">
                                heart_broken
                            </span>
                        </div>
                    </>
            }
        </>
    )
}

export default WishList;
