

import desiBazaarLogo from '../../assets/desiBazaarLogo.svg'
import '../../App.css'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='flex flex-col justify-center items-center border-t-8 bg-rose-600 text-slate-100'>
        <div>
        <img src={desiBazaarLogo} alt='desiBazaar' width="100" height="50" />
        </div>
        <div className='flex flex-col justify-center items-center p-auto text-center'>
          <p className=''>Copyright © {currentYear}. desiBazaar. All Rights Reserved.</p>
          <p>Made With
            <span className='text-red-500'> ❤ </span>
            By Sahil Trivedi
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer