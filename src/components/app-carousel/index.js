import { useState, useRef, Children } from "react";

const CarouselComponent = ({ children, idGallery, idCarouselItem }) => {
    const countSlide = useState(1);
    const [position, setPosition] = useState(0);
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    const [touchEndPosition, setTouchEndPosition] = useState(0);
    const [isTouched, setIsTouched] = useState(false);
    const [isSwiped, setIsSwiped] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);

    const slideCatalog = useRef(null);

    const LeftMove = () => {
        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.min(position + width * countSlide[0], 0));

        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition -= 1;
        }
        setSliderPosition(newPosition);
        translateFullSlides(newPosition);
    }

    const RightMove = () => {
        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.max(position - width * countSlide[0], -width * (ar.length - countSlide[0])));

        let newPosition = sliderPosition;
        if (newPosition < children.length - 1) {
            newPosition += 1;
        }
        setSliderPosition(newPosition);
        translateFullSlides(newPosition);
    }

    const touchStartHandler = (e) => {
        setTouchStartPosition(e.targetTouches[0].clientX);
        setTouchEndPosition(e.targetTouches[0].clientX);
        setIsTouched(true);
    }

    const touchMoveHandler = (e) => {
        setTouchEndPosition(e.targetTouches[0].clientX);
        const frameWidth = document.getElementById(idGallery).offsetWidth;
        const translateDist = (touchEndPosition - touchStartPosition) / frameWidth * 100;
        translatePartialSlides(translateDist);
        if (isTouched === true) {
            setIsSwiped(true);
        }
    }

    const touchEndHandler = (e) => {
        console.log(`touchStart: ${touchStartPosition}, touchEnd: ${touchEndPosition}`);
        if (isSwiped) {
            if (touchStartPosition - touchEndPosition > 75) {
                RightMove();
            } else if (touchStartPosition - touchEndPosition < -75) {
                LeftMove();
            }
        }
        setIsTouched(false);
        setIsSwiped(false);
    }

    const translatePartialSlides = (toTranslate) => {
        let currentTranslation = -sliderPosition * 0.1;
        let totalTranslation = currentTranslation + toTranslate;
        for (let i = 0; i < children.length; i++) {
            let elem = document.getElementById(`${idCarouselItem}` + i);
            elem.style.transform = `translateX(` + totalTranslation + `%)`
        }
    }

    const translateFullSlides = (newPosition) => {
        let toTranslate = -0.1 * newPosition;
        for (let i = 0; i < children.length; i++) {
            let elem = document.getElementById(`${idCarouselItem}` + i);
            elem.style.transform = `translateX(${toTranslate}%)`;
        }
    }

    const displayItems = Children.map(children, (child, index) => (
        <div className={"carouselItem"} id={`${idCarouselItem}` + index}>{child}</div>
    ));

    return (
        <div
            className="gallery"
            id={idGallery}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}>
            <div className="productCategory__list" ref={slideCatalog} style={{ marginLeft: `${position}px` }}>
                {displayItems}
            </div>
        </div>
    );
}

export default CarouselComponent;