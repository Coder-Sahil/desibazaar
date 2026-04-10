
import desiBazaarLogo from '../../assets/desiBazaarLogo.svg'
import '../../App.css'
import { useState, useEffect } from 'react';
import Preloader from '../../components/preloader/preloader'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import Footer from '../../components/footer/footer'
import { getAllProducts } from '../../api/productsApi';
import ProductCard from '../../components/productCard/productCard';
import ComingSoon from '../../components/comingsoon/comingsoon';
import Advertisement from '../../components/advertisement/advertisement';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../../slices/productSlice';

function Home() {
  const dispatch = useDispatch();
  const productInStore = useSelector((state) => state.products?.products);
  const filterProductInStore = useSelector((state) => state.products?.filterProducts);

  const [loading, setLoading] = useState(true);
  //const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? productInStore.filter(product => product.category?.id === selectedCategory?.id)
    : productInStore;

  const fetchProducts = async () => {
    const data = await getAllProducts();
    //setProducts(data);
    dispatch(setProduct(data));
  }

  useEffect(() => {
    // Simulate data fetching or initialization
    fetchProducts();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <section id="main" className='flex'>
            {
              productInStore.length > 0 &&
              <div className='flex gap-3 flex-wrap p-3'>
                {/* <Sidebar /> */}
                 <Sidebar onCategorySelect={setSelectedCategory} />
              </div>
            }
            <div className="flex gap-3 flex-wrap p-3 items-center justify-center">
              {
                productInStore.length > 0 &&
                <div className='flex gap-3 flex-wrap p-3'>
                  <Advertisement />
                </div>
              }
              {filteredProducts?.length > 0 
                ?
                filteredProducts.map(product => (
                  <ProductCard key={product.id} id={product.id} product={product} />
                ))
                :
                <ComingSoon />
              }
            </div>
          </section>
          <Footer />
        </>
      )
      }
    </>
  )
}

export default Home

