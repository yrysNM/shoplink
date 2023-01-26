import { useState, useRef } from "react";

const CarouselComponent = ({ children }) => {
    const countSlide = useState(1);
    const [position, setPosition] = useState(0);
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    const [touchEndPosition, setTouchEndPosition] = useState(0);
    const [isTouched, setIsTouched] = useState(false);
    const [isSwiped, setIsSwiped] = useState(false);

    const slideCatalog = useRef(null);

    const LeftMove = () => {
        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.min(position + width * countSlide[0], 0));
    }

    const RightMove = () => {
        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.max(position - width * countSlide[0], -width * (ar.length - countSlide[0])));
    }

    const touchStartHandler = (e) => {
        setTouchStartPosition(e.targetTouches[0].clientX);
        setTouchEndPosition(e.targetTouches[0].clientX);
        setIsTouched(true);
    }

    const touchMoveHandler = (e) => {
        setTouchEndPosition(e.targetTouches[0].clientX);
        const frameWidth = document.getElementById("displayFrame").offsetWidth;
        const translateDist = (touchEndPosition - touchStartPosition) / frameWidth * 100;

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

    return (
        <div
            className="gallery"
            id="displayFrame"
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}>
            <div className="productCategory__list" ref={slideCatalog} style={{ marginLeft: `${position}px` }}>
                {children}
            </div>
        </div>
    );
}

export default CarouselComponent;