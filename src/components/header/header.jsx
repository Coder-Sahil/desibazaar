
import desiBazaarLogo from '../../assets/desiBazaarLogo.svg'
import Cart from '../cart/cart'
import '../../App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  return (
    <>
      <header className="flex justify-between items-center border-b-8 h-20 p-4 bg-rose-600 text-slate-100 sticky top-0">
        {/* Left side: logo + text */}
        <div className="flex items-center space-x-4 hover:cursor-pointer" onClick={()=> navigate('/')}>
          <img src={desiBazaarLogo} alt="desiBazaar" width="100" height="50" />
          <div className="font-bold font-mono text-3xl antialiased hover:subpixel-antialiased">
            <p>desiBazaar</p>
          </div>
        </div>

        {/* Right side: nav */}
        <nav>
          <ul className="flex space-x-4">
            <li onClick={()=> navigate('/login')} className='hover:cursor-pointer hover:text-slate-200'>
                <span className="material-symbols-outlined">account_circle</span>
                Login
            </li>
            <li onClick={()=> navigate('/wishlist')} className='hover:cursor-pointer hover:text-slate-200'> 
                <span className="material-symbols-outlined">favorite</span>
                WishList
            </li>
            <li onClick={()=> navigate('/cart')} className='hover:cursor-pointer hover:text-slate-200'>
                <span className="material-symbols-outlined">shopping_cart</span>
                Cart
            </li>
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Header
