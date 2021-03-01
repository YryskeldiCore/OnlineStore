import React, {useState, useEffect} from 'react';
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs';
import './image-slider.scss';
import withRestoService from '../hoc';


const ImageSlider = ({RestoService}) => {
    const [slides, setSlides] = useState({});
    const [currentSlide, setCurrent] = useState(0);
    

    useEffect(() => {
        RestoService.getImages()
            .then(slides => setSlides(slides))
    }, [RestoService])

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    const nextSlide = () => {
        setCurrent(currentSlide === slides.length - 1? 0: currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrent(currentSlide === 0 ? slides.length - 1: currentSlide - 1)
    }

    return (
        <section className="slider">
                <BsChevronDoubleLeft className="left" onClick={prevSlide}/>
                <BsChevronDoubleRight className="right" onClick={nextSlide}/>
                <div className="slider-inner">
                {slides.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? 'slide-active' : 'slide-non-active'} key={slide.id}>
                            {index === currentSlide && (
                                <img src={slide.image} alt="" className="slide"  />
                            )}
                        </div>
                    )
                })}
                </div>
        </section>
    )
}

export default withRestoService()(ImageSlider);
