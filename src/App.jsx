import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Header from './components/header/header'
import Cart from './components/cart/cart'
import WishList from './components/wishlist/wishlist'
import SingleProduct from './components/SingleProduct/singleproduct';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
