import React from 'react'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.png'

function Navbarhome() {
  return (
   <div className="hero_area">
   <header className="header_section">
     <div className="container-fluid">
       <nav className="navbar navbar-expand-lg custom_nav-container ">
         <a className="navbar-brand" href="#">
           <img src={logo} alt="" />
           <span>
             Lodge
           </span>
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
             <ul className="navbar-nav  ">
              
               <li className="nav-item" >
                 <a className="nav-link" href="#"> About</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Jewellery </a>
               </li>

               <li className="nav-item">
                 <a className="nav-link" href="#">Contact us</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Login</a>
               </li>
             </ul>
           </div>
           <div className="quote_btn-container ">
             <a href="#">
               <img src={cart} alt="" />
               <div className="cart_number">
                 0
               </div>
             </a>
             
             <form className="form-inline">
               <input className="btn  my-2 my-sm-0 nav_search-btn"  style={{width:"200px",backgroundColor:"white"}}/>
               
             </form>
            
           </div>
         </div>
       </nav>
     </div>
   </header>
   </div>
   
  )
}

export default Navbarhome

