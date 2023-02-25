import {useState} from 'react';
import slides from './slides';
import './ImageSlider.css'


const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }
    return (<div>
            <h1>Places to visit</h1>
            <div className='leftArrow'
                 onClick={goToPrevious}>❮
            </div>
            <div className='rightArrow'
                 onClick={goToNext}>❯
            </div>
            <div>
                <img alt="slider" className='slider' src={slides[currentIndex]}/>
            </div>
            <div className="dots">
            {slides.map((it, index) => {
                return <div className="dot" key={index}
                onClick={() => goToSlide(index)}>●</div>
            })}
            </div>
        </div>
    )
}

export default ImageSlider
