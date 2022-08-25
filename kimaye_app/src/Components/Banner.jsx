import React from 'react'
import '../Styles/Slides.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner5 from '../assets/banner5.jpg';

const banners=[
  banner5, banner1, banner2,"https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerArtboard_1.jpg?v=1650952002",
]

const Banner = () => {

  const properties={ indicators: true };

  return (
    <div>
         <Slide easing="ease"  {...properties} >
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${banners[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${banners[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${banners[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${banners[3]})` }}>
                    {/* <span>Slide 4</span> */}
                </div>
            </div>
        </Slide>
    </div>
  )
}

export default Banner