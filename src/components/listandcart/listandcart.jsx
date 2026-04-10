
import desiBazaarLogo from '../../assets/desiBazaarLogo.svg'
import IconButton from '../iconbutton/iconbutton'
import { useCart } from '../../context/cart-context'
import { checkProductInCart } from '../../utility/checkProductInCart'
import { checkProductInWishList } from '../../utility/checkProductInWishList'
import { useNavigate } from 'react-router-dom';

const ListAndCart = ({ product, tag }) => {

    const keywords = ["placeimg", "somelink"];
    const { cart, wishList, cartDispatch } = useCart();
    const navigate = useNavigate(); 

    const handleTitleClick = () => {
        navigate(`/product/${product.id}`);
    }
    const productInCart = (pid) => {
        // const pid = product.id;
        //console.log(`pppp -- ${pid}`)
        return checkProductInCart(pid, cart)
    }
    const productInWishList = (pid) => {
        // const pid = product.id;
        //console.log(`pppp -- ${pid}`);
        //console.log(checkProductInWishList(pid));
        return checkProductInWishList(pid, wishList)
    }

    const handleClick_Cart = () => {
        const inCart = productInCart(product.id) ? 'REMOVE_FROM_CART' : 'ADD_TO_CART';
        cartDispatch({
            type: inCart,
            payload: product
        })

    }
    const handleClick_WishList = () => {
        const inWishList = productInWishList(product.id) ? 'REMOVE_FROM_WISHLIST' : 'ADD_TO_WISHLIST';
        cartDispatch({
            type: inWishList,
            payload: product
        })

    }

    return (
        <>
            <div key={product.id} className="flex gap-8 m-4 justify-between items-center product-card h-40 w-[90%] border-4 rounded-md items-center">
                <div>
                    <img src={product.images[0]} alt={product.title} className="h-40 w-40" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className="text-lg font-bold cursor-pointer hover:underline hover:text-blue-600" onClick={handleTitleClick}>{product.title}</h2>
                    {/* <p>${product.description}</p> */}
                    <p>{`Category - ${product.category?.name}`}</p>
                    <p className='font-bold text-3xl'>${product.price}</p>
                </div>
                <div className='flex'>
                    <IconButton buttonName={productInWishList(product.id) ? 'Remove' : 'WishList'} iconStyle='favorite' clickFunc={handleClick_WishList} />
                    <IconButton buttonName={productInCart(product.id) ? 'Remove' : 'Add To Cart'} iconStyle='shopping_cart' clickFunc={handleClick_Cart} />
                </div>
            </div>
        </>
    )
}

export default ListAndCart;

// {
//     "id": 2,
//     "title": "Classic Red Pullover Hoodie",
//     "slug": "classic-red-pullover-hoodie",
//     "price": 10,
//     "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
//     "category": {
//         "id": 1,
//         "name": "Clothes",
//         "slug": "clothes",
//         "image": "https://i.imgur.com/QkIa5tT.jpeg",
//         "creationAt": "2026-03-29T04:12:18.000Z",
//         "updatedAt": "2026-03-29T04:12:18.000Z"
//     },
//     "images": [
//         "https://i.imgur.com/1twoaDy.jpeg",
//         "https://i.imgur.com/FDwQgLy.jpeg",
//         "https://i.imgur.com/kg1ZhhH.jpeg"
//     ],
//     "creationAt": "2026-03-29T04:12:18.000Z",
//     "updatedAt": "2026-03-29T04:12:18.000Z"
// }
