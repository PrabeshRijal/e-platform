import React from 'react'
import Slider from '../components/sliders/Sliders';
import img1 from '../images/sliderImg/sliderImg1.jpg';
import img2 from '../images/sliderImg/sliderImg2.png';
import img3 from '../images/sliderImg/sliderImg3.jpg';
import img4 from '../images/sliderImg/sliderImg4.png';
import feature1 from '../images/featured/feature1.png';
import feature2 from '../images/featured/feature2.png';
import feature3 from '../images/featured/feature3.png';

const Banner = () => {
    const sliderData = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
    ];
    return (
        <section className="banner-section">
            <div className="web-container">
                <div className="banner-parent-wrapper">
                    <div className="banner-childs-wrapper">
                        <Slider data={sliderData} autoSlide={false} slidingTime={6000} />
                    </div>
                    <div className="banner-childs-wrapper">
                        <div className="show-features">
                            <img src={feature1} draggable="false" alt="featured-image" />
                        </div>
                        <div className="show-features">
                            <img src={feature2} draggable="false" alt="featured-image" />
                        </div>
                        <div className="show-features">
                            <img src={feature3} draggable="false" alt="featured-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;