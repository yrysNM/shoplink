import { useRef, useState } from "react";
import { ReactComponent as RightArrow } from "../../../resources/icon/rightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../resources/icon/leftArrow.svg";

const ListCatalogComponent = ({ data, plusIcon }) => {

    //screen size озгергенде count озгерту керек 
    const countSlide = useState(3);
    const [lastSlide, setLastSlide] = useState(1);
    const [position, setPosition] = useState(0);

    const slideCatalog = useRef(null);

    const LeftArrowClick = () => {
        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.min(position + width * countSlide[0], 0));
    }
    const RightArrowClick = () => {
        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.max(position - width * countSlide[0], -width * (ar.length - countSlide[0])));
        setLastSlide(-width * (ar.length - countSlide[0]));
    }

    return (
        <>
            <div className="arrow-item">
                <div className="arrow-item__left" onClick={LeftArrowClick} style={{ opacity: `${position === 0 ? "0.4" : "1"}` }}>

                    <LeftArrow />
                </div>

                <div className="arrow-item__right" onClick={RightArrowClick} style={{ opacity: `${position === lastSlide ? "0.4" : "1"}` }}>
                    <RightArrow />
                </div>
            </div>
            <div className="catalogList" ref={slideCatalog} style={{ marginLeft: `${position}px` }}>
                {data ??
                    <>

                        <div className="catalogList-block">
                            <img src={plusIcon} alt="plus icon" />
                            <span className="text-add">Добавить</span>
                        </div>

                        <div className="catalogList-block" />

                        <div className="catalogList-block" />
                        <div className="catalogList-block" />
                        <div className="catalogList-block" />
                        <div className="catalogList-block" />

                    </>
                }
            </div >
        </>
    );
}

export default ListCatalogComponent;