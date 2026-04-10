
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from '../../context/cart-context';
import IconButton from '../iconbutton/iconbutton'
import Header from '../header/header';
import Footer from '../footer/footer';
import checkProductInCart from '../../utility/checkProductInCart';
import checkProductInWishList from '../../utility/checkProductInWishList';

function SingleProduct() {
    const { id } = useParams();
    const navigate = useNavigate(); 
    // Access the product array from the Redux store
    const productInStore = useSelector((state) => state.products?.products);

    // Find the product that matches the ID from the URL
    const activeProduct = productInStore.find((item) => item.id.toString() === id);

    const { cart, wishList, cartDispatch } = useCart();

    const handleClick_Cart = () => {
        const inCart = productInCart(product.id) ? 'REMOVE_FROM_CART' : 'ADD_TO_CART';
        cartDispatch({
            type: inCart,
            payload: activeProduct
        })

    }
    const handleClick_WishList = () => {
        const inWishList = productInWishList(product.id) ? 'REMOVE_FROM_WISHLIST' : 'ADD_TO_WISHLIST';
        cartDispatch({
            type: inWishList,
            payload: activeProduct
        })

    }

    const productInCart = (pid) => {
        //console.log(`pppp -- ${pid}`)
        return checkProductInCart(pid, cart)
    }
    const productInWishList = (pid) => {
        //console.log(`pppp -- ${pid}`)
        return checkProductInWishList(pid, wishList)
    }

    const BackToHome = () => {
        navigate('/home');
    }    

    if (!activeProduct) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Header />
            <div key={activeProduct.id} className="flex flex-col border-4 m-4" >
                <div className='flex'>
                    <div className='flex'>
                        <img src={activeProduct.images[0]} alt={activeProduct.title} className="h-200 w-200" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-center'>
                            <IconButton buttonName={ productInWishList(activeProduct.id) ? 'WishListed' : 'WishList'}  iconStyle='favorite' clickFunc={handleClick_WishList} />
                            <IconButton buttonName={productInCart(activeProduct.id) ? 'In Cart' : 'Add To Cart'} iconStyle='shopping_cart' clickFunc={handleClick_Cart} />
                        </div>
                        <div className='flex flex-col text-center'>
                            <h2 className="text-lg font-bold">{activeProduct.title}</h2>
                            <p className='text-3xl font-bold'>${activeProduct.price}</p>
                            <p>${activeProduct.description}</p>
                            <p>{`Category - ${activeProduct.category?.name}`}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col' >
                    <div className='flex gap-8 m-4'>
                        {
                            activeProduct?.images.length > 1 &&
                            activeProduct?.images.map(img =>
                                <img src={img} alt={activeProduct.title} className="h-52 w-52" />
                            )
                        }

                    </div>
                </div>
                <div className='flex justify-center align-center'>
                    <IconButton buttonName='Back To Home' iconStyle='home' clickFunc={BackToHome} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleProduct;


