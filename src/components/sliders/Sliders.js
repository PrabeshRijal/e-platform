import React, { useEffect, useState } from 'react';

const Slider = ({ data, autoSlide, slidingTime }) => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderLength = data.length;

    const handleSliderBtn = (direction) => {
        if (direction === "next") {
            sliderIndex === (sliderLength - 1) ? setSliderIndex(0) : setSliderIndex((prevVal) => prevVal + 1);
        }
        if (direction === "prev") {
            sliderIndex === 0 ? setSliderIndex(sliderLength - 1) : setSliderIndex((prevVal) => prevVal - 1);
        }
    }

    useEffect(() => {
        if (autoSlide === true) {
            const interval = setInterval(() => {
                sliderIndex === (sliderLength - 1) ? setSliderIndex(0) : setSliderIndex((prevVal) => prevVal + 1);
            }, slidingTime);

            return () => {
                clearInterval(interval);
            }
        }
    }, [sliderIndex]);

    return (
        <>
            <div className="sliders-wrapper">
                <div className="sliders">
                    <button onClick={() => handleSliderBtn("prev")} className="slider-btn slider-btn-left"><i className="fa fa-angle-left"></i></button>
                    <div className="slider">
                        {
                            data && data.map((imgData, index) => (
                                <div className={sliderIndex === index ? "each-slider-img slider-img-active" : "each-slider-img slider-img-deactive"} key={index}>
                                    <img src={imgData.imgSrc} draggable="false" alt="slider-img" />
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => handleSliderBtn("next")} className="slider-btn slider-btn-right"><i className="fa fa-angle-right"></i></button>
                </div>
            </div>
        </>
    )
}

export default Slider