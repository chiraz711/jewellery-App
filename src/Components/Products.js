import React from 'react'
import img1 from '../assets/images/i-1.png'
import img2 from '../assets/images/i-2.png'
import img3 from '../assets/images/i-3.png'

function Products() {
  return (
    <>
      <section className="price_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Jewellery Price
        </h2>
      </div>
      <div className="price_container">
        <div className="box">
          <div className="name">
            <h6>
              Diamond Bracelet
            </h6>
          </div>
          <div className="img-box">
            <img src={img1} alt="" />
          </div>
          <div className="detail-box">
            <h5>
              $<span>1000.00</span>
            </h5>
            <a href="#">
              Buy Now
            </a>
          </div>
        </div>
        <div className="box">
          <div className="name">
            <h6>
              Diamond Ring
            </h6>
          </div>
          <div className="img-box">
            <img src={img2} alt="" />
          </div>
          <div className="detail-box">
            <h5>
              $<span>1000.00</span>
            </h5>
            <a href="#">
              Buy Now
            </a>
          </div>
        </div>
        <div className="box">
          <div className="name">
            <h6>
              Diamond Earnings
            </h6>
          </div>
          <div className="img-box">
            <img src={img3} alt="" />
          </div>
          <div className="detail-box">
            <h5>
              $<span>1000.00</span>
            </h5>
            <a href="#">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a href="#" className="price_btn">
          See More
        </a>
      </div>
    </div>
  </section>
    </>
 
  )
}

export default Products
