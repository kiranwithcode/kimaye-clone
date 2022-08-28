import React, { useState, useEffect } from 'react'
import secret from './slide.module.css'
import BtnSlider from './BtnSlider'
import dataSlider from '../dataSlider';

export default function Slider() {
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

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={secret.container_slider}>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? `${secret.slide} ${secret.active_anim}` : `${secret.slide}`}
                    >
                        <div className={secret.title}>
                            <h1>{obj.no}</h1>
                            <span>
                            <h3>{obj.title}</h3>
                            <p>{obj.subTitle}</p>
                            </span>
                        </div>
                        <div className={secret.image}>
                            <img
                                src={obj.secretImg}
                                alt="" />
                        </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className={secret.container_dots}>
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? `${secret.dot} ${secret.active}` : `${secret.dot}`}
                    ><h3>{index}</h3></div>
                ))}
            </div>
        </div>
    )
}
