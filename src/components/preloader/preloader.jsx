
// Preloader.jsx
import React from "react";
import desiBazaarLogo from '../../assets/desiBazaarLogo.svg'

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"> */}
        <section id="center">
                <div className="center animate-pulse">
                  <img src={desiBazaarLogo} className="" width="500" height="300" alt="" />
                </div>
              </section>
      {/* </div> */}
    </div>
  );
};

export default Preloader;
