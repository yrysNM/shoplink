import { useRef, useState } from "react";
import nike from "../../../resources/img/nike.jpg";
import tShirt from "../../../resources/img/t-shirt.jpg";
import tShirt2 from "../../../resources/img/t-shirt2.jpg";
import { ReactComponent as RightArrow } from "../../../resources/icon/rightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../resources/icon/leftArrow.svg";

const ListCatalogComponent = ({ plusIcon }) => {

    // test  data
    const data = useState(
        [
            {
                imgCatalog: nike,
                catalogName: "Кроссовки Nike",
                price: 32990
            },
            {
                imgCatalog: tShirt,
                catalogName: "Футболка",
                price: 9990
            },
            {
                imgCatalog: tShirt2,
                catalogName: "Футболка oversize",
                price: 8990
            },
            {
                catalogName: "Anime Mange",
                imgCatalog: "https://static4.tgstat.ru/channels/_0/77/77d57c960f4eef6180fccf134dca3e3b.jpg",
                price: 1200
            },
            {
                catalogName: "Kunai",
                imgCatalog: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0GZDCg6UnGTqsHLyLiCr6sVqdzDaoCA4q7c-gf6TkjBfgGA2eqHbGfWSYZUC3vNsft8&usqp=CAU",
                price: 2000
            }
        ]
    );

    //screen size озгергенде count озгерту керек 
    const countSlide = useState(3);
    const [lastSlide, setLastSlide] = useState(1);
    const [position, setPosition] = useState(0);

    const slideCatalog = useRef(null);

    const LeftArrowClick = () => {
        // setCountSlide(3);

        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.min(position + width * countSlide[0], 0));
    }
    const RightArrowClick = () => {
        // setCountSlide(3);

        const ar = Object.entries(slideCatalog.current.children);
        const width = ar[0][1].clientWidth;
        setPosition(position => Math.max(position - width * countSlide[0], -width * (ar.length - countSlide[0])));
        setLastSlide(-width * (ar.length - countSlide[0]));
    }

    return (
        <>
            {
                data[0].length !== 0
                    ? <p className="text-catalogCityHead ">Топ товары</p>
                    : <p className="text-catalog">У вас нет товаров в каталоге</p>
            }


            {data[0].length - 1 > 3 || data[0].length === 0
                ?
                <div className="arrow-item">
                    <div className="arrow-item__left" onClick={LeftArrowClick} style={{ opacity: `${position === 0 ? "0.4" : "1"}` }}>

                        <LeftArrow />
                    </div>

                    <div className="arrow-item__right" onClick={RightArrowClick} style={{ opacity: `${position === lastSlide ? "0.4" : "1"}` }}>
                        <RightArrow />
                    </div>
                </div>
                : null
            }

            <div className="catalogList" ref={slideCatalog} style={{ marginLeft: `${position}px` }}>
                {/* осы жерде тексерыледы если данныйлар бар болса деп */}
                {data[0].length !== 0 ? data[0].map((catalog, i) => (
                    <div key={i} className="top-catalog">
                        <div className="top-catalog__img">
                            <img src={catalog.imgCatalog} alt="catalog img" />
                        </div>
                        <p className="text-catalogCityHead top-catalog__subText">{catalog.catalogName}</p>
                        <p className="top-catalog__price">{catalog.price} ₸</p>
                    </div>
                )) :
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