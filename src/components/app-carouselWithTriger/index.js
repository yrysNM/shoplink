import { useState, Children } from "react"

import { ReactComponent as RightArrow } from "../../resources/icon/rightArrow.svg";
import { ReactComponent as LeftArrow } from "../../resources/icon/leftArrow.svg";

import "./index.scss";

const CarouselWithTrigerComponent = (props) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    const [touchEndPosition, setTouchEndPosition] = useState(0);
    const [touched, setTouched] = useState(false);
    const [swiped, setSwiped] = useState(false);

    // infinite time animation feature as soon not now
    const { children, infinite } = props;

    const prevSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition -= 1;
        } else if (infinite) {
            newPosition = children.length - 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);

    }

    const nextSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition < children.length - 1) {
            newPosition = newPosition + 1;
        } else if (infinite) {
            newPosition = 0;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const jumpToSlideHandler = (id) => {
        translateFullSlides(id);
        setSliderPosition(id);
    }

    const prevClickHandler = () => {
        prevSlideHandler();
    }

    const nextClickHandler = () => {
        nextSlideHandler();
    }

    const speedUpAnimation = () => {
        for (let i = Math.max(sliderPosition - 2, 0); i < Math.min(children.length, sliderPosition + 3); i++) {
            let elem = document.getElementById(`carouselitemTriger` + i);
            elem.classList.add("fastAnimation");
        }
    }

    const slowDownAnimation = () => {
        for (let i = Math.max(0, sliderPosition - 2); i < Math.min(children.length, sliderPosition + 3); i++) {
            let elem = document.getElementById(`carouselitemTriger${i}`);
            elem.classList.remove("fastAnimation");
        }
    }

    const touchStartHandler = (e) => {
        speedUpAnimation();
        setTouchStartPosition(e.targetTouches[0].clientX);
        setTouchEndPosition(e.targetTouches[0].clientX)
        setTouched(true);
    }

    const touchMoveHandler = (e) => {
        setTouchEndPosition(e.targetTouches[0].clientX);
        const frameWidth = document.getElementById("displayFrameTriger").offsetWidth;
        const translateDist = (touchEndPosition - touchStartPosition) / frameWidth * 100;
        translatePartialSlides(translateDist);
        if (touched === true) {
            setSwiped(true);
        }
    }


    const touchEndHandler = (e) => {
        if (swiped) {
            slowDownAnimation();
            if (touchStartPosition - touchEndPosition > 75) {
                nextSlideHandler();
            } else if (touchStartPosition - touchEndPosition < -75) {
                prevSlideHandler();
            } else {
                jumpToSlideHandler(sliderPosition);
            }
        }
        setTouched(false);
        setSwiped(false);
    }

    const translatePartialSlides = (toTranslate) => {
        let currentTranslation = -sliderPosition * 102.1;
        let totalTranslation = currentTranslation + toTranslate;
        for (var i = 0; i < children.length; i++) {
            let elem = document.getElementById(`carouselitemTriger` + i);
            elem.style.transform = `translateX(` + totalTranslation + `%)`
        }
    }

    const translateFullSlides = (newPosition) => {
        let toTranslate = -102.1 * newPosition;
        for (let i = 0; i < children.length; i++) {
            let elem = document.getElementById("carouselitemTriger" + i);
            elem.style.transform = `translateX(${toTranslate}%)`;

        }
    }

    const displayItems = Children.map(children, (child, index) => (
        <div className={"carouselItem"} id={`carouselitemTriger` + index}>{child}</div>
    ));

    const positionIndicators = Children.map(children, (child, index) => (
        <div className={sliderPosition === index ? "line line__active" : "line"}
            onClick={() => jumpToSlideHandler(index)} />
    ));

    return (
        <div className="subHead">
            <LeftArrow className="leftArrowTrigger" onClick={prevClickHandler} />
            <div className="displayFrame" id="displayFrameTriger"
                onTouchStart={(e) => touchStartHandler(e)}
                onTouchMove={(e) => touchMoveHandler(e)}
                onTouchEnd={(e) => touchEndHandler(e)}>
                {displayItems}
            </div>
            <RightArrow className="rightArrowTrigger" onClick={nextClickHandler} />
            <div className="slideLines">
                {positionIndicators}
            </div>
        </div>
    );
}

export default CarouselWithTrigerComponent;