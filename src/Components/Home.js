import React from 'react'
import design from '../assets/images/design-1.png'
import slider from '../assets/images/slider-img.png'
import img1 from '../assets/images/i-1.png'
import img2 from '../assets/images/i-2.png'
import img3 from '../assets/images/i-3.png'


function Home() {
  return (
<div>
  
    {/* new collection */}
    <section className=" slider_section position-relative">
      <div className="design-box">
        <img src={design} alt="" />
      </div>
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail_box">
                    <h2>
                      <span> New Collection</span>
                      <hr/>
                    </h2>
                    <h1>
                      Jewellery
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                      aptent taciti sociosqu ad litora torquent per conubia nostra
                    </p>
                    <div>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={slider} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail_box">
                    <h2>
                      <span> New Collection</span>
                      <hr/>
                    </h2>
                    <h1>
                      Jewellery
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                      aptent taciti sociosqu ad litora torquent per conubia nostra
                    </p>
                    <div>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail_box">
                    <h2>
                      <span> New Collection</span>
                      <hr />
                    </h2>
                    <h1>
                      Jewellery
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                      aptent taciti sociosqu ad litora torquent per conubia nostra
                    </p>
                    <div>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  
    <div className="item_section layout_padding2">
    <div className="container">
      <div className="item_container">
        <div className="box">
          <div className="price">
            <h6>
              Best PRICE
            </h6>
          </div>
          <div className="img-box">
            <img src={img1} alt="" />
          </div>
          <div className="name">
            <h5>
              Bracelet
            </h5>
          </div>
        </div>
        <div className="box">
          <div className="price">
            <h6>
              Best PRICE
            </h6>
          </div>
          <div className="img-box">
            <img src={img2} alt="" />
          </div>
          <div className="name">
            <h5>
              Ring
            </h5>
          </div>
        </div>
        <div className="box">
          <div className="price">
            <h6>
              Best PRICE
            </h6>
          </div>
          <div className="img-box">
            <img src={img3} alt=""  />
          </div>
          <div className="name">
            <h5>
              Earings
            </h5>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
</div>

  )
}

export default Home
