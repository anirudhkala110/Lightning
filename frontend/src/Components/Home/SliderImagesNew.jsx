import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.css';

const ResponsiveOwlCarousel = () => {
  return (
    <section id="slider" className="pt-5">
      <div className="container">
        <h1 className="text-center"><b>Responsive Owl Carousel</b></h1>
        <div className="slider">
          <div className="owl-carousel">
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="images/slide-1.jpg" alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>HTML CSS3 Tutorials</b></h5>
              <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="images/slide-2.jpg" alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>WordPress Tutorials</b></h5>
              <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="images/slide-3.jpg" alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>PHP MySQL Tutorials</b></h5>
              <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="images/slide-4.jpg" alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>Javascript Tutorials</b></h5>
              <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
            </div>
            <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="images/slide-5.jpg" alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>Bootstrap Tutorials</b></h5>
              <p className="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveOwlCarousel;
