
import { useCart } from "../../context/cart-context";
import IconButton from "../iconbutton/iconbutton";

const ProductTotal = () => {

    const { cart } = useCart();
    const grandTotal = cart.length > 0 ? cart.reduce(
            (sum, product) => sum + product.price ,0) : 0;

    return (
        <>
            {
                cart.length > 0 &&
                <>
                    <div className="flex flex-col">
                        <div className="flex text-3xl font-bold justify-center text-center">
                            Total
                        </div>
                        <div className="flex justify-center align-center">
                            <span className="material-symbols-outlined px-2 text-9xl">shopping_cart</span>
                        </div>
                        {
                            cart.map( product => (

                                <div className="flex justify-center align-center text-center" >
                                    <p className="">{product.title}</p>
                                    <p>&nbsp; x &nbsp; </p>
                                    <p className="">{product.price}</p>
                                </div>
                            ))
                        }
                        
                        <div className="flex">
                            <p>Grand Total : </p>
                            <p>{grandTotal}</p>
                        </div>
                        <div className="flex justify-center">
                            <IconButton buttonName='Make Payment' iconStyle='payment' clickFunc='' />
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ProductTotal;