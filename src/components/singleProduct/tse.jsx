import IconButton from '../iconbutton/iconbutton'
import { useCart } from '../../context/cart-context'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

    const { id } = useParams();
    console.log(`SingleProduct - ${id}`);
    const productInStore = useSelector((state) => state.products?.products);
    const activeProduct = productInStore.find((product) => product.id === id)
    const keywords = ["placeimg", "somelink"];
    // const { cartDispatch } = useCart();

    // const handleClick_Cart = () => {
    //     cartDispatch({
    //         type: 'ADD_TO_CART',
    //         payload: activeProduct
    //     })

    // }
    // const handleClick_WishList = () => {
    //     cartDispatch({
    //         type: 'ADD_TO_WISHLIST',
    //         payload: activeProduct.id
    //     })

    // }

    return (
        <>
            <div className="flex flex-col product-card h-65 w-60 border-4 rounded-md items-center" key={activeProduct.id}>
                <div>
                    <img src={activeProduct.images[0]} alt={activeProduct.title} className="h-40 w-40" />
                </div>
                <div>
                    <h2 className="text-lg font-bold">{activeProduct.title}</h2>
                    <p>${activeProduct.description}</p>
                    <p>{`Category - ${activeProduct.category?.name}`}</p>
                    <p>${activeProduct.price}</p>
                </div>
                <div className='flex flex-col'>
                    <IconButton buttonName='WishList' iconStyle='favorite' />
                    <IconButton buttonName='Add To Cart' iconStyle='shopping_cart' />
                </div>
            </div>
        </>
    )
}

export default SingleProduct;

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
