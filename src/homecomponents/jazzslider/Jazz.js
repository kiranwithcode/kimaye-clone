import React, { useState, useEffect } from 'react'
import jazz from './jazz.module.css'
import BtnSlider from './BtnSlider'
import dataSlider from '../dataSlider';

export default function Jazz() {
    const [slideIndex, setSlideIndex] = useState(1)
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;


    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    useEffect(() => {
        setSlideIndex(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [slideIndex]);


    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }

    return (
        <div className={jazz.container_jazz}>
            <img className={jazz.simg} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-top-cut.png?v=1599102918" alt=""/>  
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? `${jazz.jazz} ${jazz.active_anim}` : `${jazz.jazz}`}
                    >
                        <div className={jazz.image}>
                             <img
                                src={obj.jazzImg1}
                                alt="" />
                                <p className={jazz.img_head}>{obj.title}</p>
                                {/* <span  className={jazz.span_jazz}>
                                <h3>{obj.title}</h3>
                                <p>{obj.subTitle}</p>
                            </span> */}
                        </div>
                        <div className={jazz.image}>
                            <img
                                src={obj.jazzImg2}
                                alt="" />
                                 <p className={jazz.img_head}>{obj.title}</p>
                                 {/* <span className={jazz.span_jazz}>
                                <h3>{obj.title}</h3>
                                <p>{obj.subTitle}</p>
                            </span> */}
                        </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            {/* <div className={jazz.container_dots}>
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? `${jazz.dot} ${jazz.active}` : `${jazz.dot}`}
                    ><h3>{index}</h3></div>
                ))}
            </div> */}
              <img className={jazz.simg}  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-bottom-cut.png?v=1599102919" alt=""/>
        </div>
    )
}
