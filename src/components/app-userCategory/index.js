import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import HamburgerComponent from "../app-hamburger";
import { HelpFormInputComponent } from "../app-shop";
import { SpeceficProductComponent } from "../app-userPreviewMainDataInfoShow";

import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";
import { ReactComponent as SortFilterPriceIcon } from "../../resources/icon/userIcons/filterPrice.svg";
import { ReactComponent as BasketIcon } from "../../resources/icon/userIcons/basket.svg";
import { ReactComponent as SearchIcon } from "../../resources/icon/orderIcons/searchIcon.svg";
import { ReactComponent as ArrowDown } from "../../resources/icon/shopDataIcons/arrowDown2.svg";
import { ReactComponent as ArrowUp } from "../../resources/icon/shopDataIcons/arrowUp.svg";
import { ReactComponent as FilterIcon } from "../../resources/icon/orderIcons/filterIcon.svg";
import userPreview1 from "../../resources/img/t-shirt7.jpg";
import userPreview2 from "../../resources/img/t-shirt8.jpg";
import userPreview3 from "../../resources/img/t-shirt3.jpg";
import userPreview4 from "../../resources/img/t-shirt4.jpg";
import userPreview5 from "../../resources/img/t-shirt5.jpg";
import userPreview6 from "../../resources/img/t-shirt6.jpg";


import "./index.scss";

const UserCategoryComponent = () => {
    const [sortFilterBlock, setSortFilterBlock] = useState(false);

    const handleClick = () => {
        setSortFilterBlock(sortFilterBlock => !sortFilterBlock);
    }


    return (
        <div className="userCategory">
            <div className="containerUser">
                <div className="userCategoryProduct__head">
                    <HamburgerComponent />

                    <h2 className="userCategoryProduct__head-title">Футболки</h2>

                    <div className="favoriteBasketIcons">
                        <HeartIcon />
                        <BasketIcon />
                    </div>

                </div>
                <p className="subtext userCategoryProduct__urlText">
                    <Link to={".."} relative="path">
                        Главная
                    </Link>
                    &nbsp;/&nbsp;Футболки
                </p>

                <div className="userCategory__filter">
                    <HelpFormInputComponent data={{
                        iconComponent: <SearchIcon />,
                        inputType: "search",
                        inputName: "search user",
                        placeholder: "Поиск по названию товара"
                    }} />

                    <div className="userCategory__subFilter">
                        <div className="userCategory__subFilter-block" onClick={handleClick}>
                            <SortFilterPriceIcon className="icon" />
                            <span className="sortText">По возрастанию цены</span>

                            {
                                sortFilterBlock
                                    ? <ArrowUp style={{ marginLeft: 20 }} width="15px" height="15px" />
                                    : <ArrowDown style={{ marginLeft: 20 }} width="15px" height="15px" />
                            }

                            <div className={classnames("sortFilterBlock", {
                                "sortFilterBlock__active": sortFilterBlock
                            })}>
                                <span className="sortText sortText__active">По возрастанию цены</span>
                                <span className="sortText">По новизне</span>
                                <span className="sortText">По популярности</span>
                                <span className="sortText">По скидкам</span>
                            </div>
                        </div>
                        <div className="userCategory__subFilter-block">
                            <FilterIcon className="icon__filter" width="20px" height="20px" />
                            <span className="sortText">По возрастанию цены</span>
                        </div>
                    </div>

                    <div className="blockCategory" style={{ marginTop: 32 }}>
                        <button className="categoryListBtns__btn">
                            <p className="btnText">
                                Все
                            </p>
                        </button>
                        <button className="categoryListBtns__btn categoryListBtns__btn-active">
                            <p className="btnText">
                                Женщинам
                            </p>
                        </button>
                        <button className="categoryListBtns__btn">
                            <p className="btnText">
                                Мужчинам
                            </p>
                        </button>
                        <button className="categoryListBtns__btn">
                            <p className="btnText">
                                Детям
                            </p>
                        </button>
                    </div>
                </div>

                <div className="allCategory__grid">
                    <SpeceficProductComponent
                        imgUrl={userPreview1}
                        productName={"Qarala"}
                        productPrice={"15 990 ₸"}
                        installment={true} />
                    <SpeceficProductComponent
                        imgUrl={userPreview2}
                        productName={"EnvyLab"}
                        productPrice={"16 990 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview3}
                        productName={"Zara"}
                        productPrice={"15 990 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview4}
                        productName={"Stradivarius"}
                        productPrice={"15 990 ₸"}
                        exclusive={true} />
                    <SpeceficProductComponent
                        imgUrl={userPreview5}
                        productName={"Jenil"}
                        productPrice={"15 990 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview6}
                        productName={"CherryLab"}
                        productPrice={"26 990 ₸"} />

                </div>
            </div>
        </div>
    );
}

export default UserCategoryComponent;