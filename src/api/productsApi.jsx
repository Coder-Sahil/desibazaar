import axios from "axios";

const getAllProducts = async () => {

    const API_BASEURL = import.meta.env.VITE__PRODUCT_API_BASEURL;

    try {
        const productsURL = `${API_BASEURL}/products`;
        const {data} = await axios.get(productsURL);
        return data;        
    } catch (error) {
        return error
    }

}

const getAllCategories = async () => {

    const API_BASEURL = import.meta.env.VITE__PRODUCT_API_BASEURL;

    try {
        const categoriesURL = `${API_BASEURL}/categories`;
        const {data} = await axios.get(categoriesURL);
        return data;        
    } catch (error) {
        return error
    }

}


export {getAllProducts, getAllCategories};