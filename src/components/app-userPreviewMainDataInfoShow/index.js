import { ReactComponent as RightArrow } from "../../resources/icon/rightArrow.svg";
import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";
import sweaterImg from "../../resources/img/userPreview1.png";
import jacketImg from "../../resources/img/userPreview2.png";
import jacketImg2 from "../../resources/img/userPreview3.png";
import saleImg1 from "../../resources/img/userPreview4.png";
import saleImg2 from "../../resources/img/userPreview5.png";
import saleImg3 from "../../resources/img/userPreview6.png";
import userPreview1 from "../../resources/img/userPreview7.png";
import userPreview2 from "../../resources/img/userPreview8.png";
import userPreview3 from "../../resources/img/userPreview9.png";
import userPreview4 from "../../resources/img/userPreview10.png";
import userPreview5 from "../../resources/img/userPreview11.png";
import userPreview6 from "../../resources/img/userPreview12.png";
import womenCategory from "../../resources/img/womenCategory.png";
import menCategory from "../../resources/img/menCategory.png";
import girlsCategory from "../../resources/img/girlsCategory.png";

import "./index.scss";

const UserPreviewMainDataInfoShowComponent = () => {
    return (
        <main className="mainUser">
            <div className="productCategory">
                <div className="productCategory__head">
                    <p className="productCategory__titleText">
                        Новинки
                    </p>

                    <div className="linkMoreInfo">
                        <span className="linkMoreInfo__text">Перейти</span>
                        <RightArrow width="15" height="12" />
                    </div>
                </div>

                <div className="productCategory__list">
                    <div className="productCategory__list-block">
                        <div className="productCategory__list-blockImg">
                            <img src={sweaterImg} alt="product " />

                            <div className="favoriteIcon">
                                <HeartIcon width="20" height="18" className="icon" />
                            </div>

                            {/* Выберите бирки data */}
                            <div className="newProduct">
                                <p className="newText">НОВИНКА</p>
                            </div>

                            <div className="newProduct discount">
                                <p className="newText discountText">-50%</p>
                            </div>
                            <div className="newProduct installment">
                                <p className="newText installment__text">
                                    0 · 0 · 12
                                </p>
                            </div>
                        </div>

                        <p className="productCategory__name">
                            Свитер
                        </p>
                        <div className="productCategory__price">
                            10 990 ₸
                        </div>


                    </div>
                    <div className="productCategory__list-block">
                        <div className="productCategory__list-blockImg">
                            <img src={jacketImg} alt="product " />

                            <div className="favoriteIcon">
                                <HeartIcon width="20" height="18" className="icon" />
                            </div>

                            <div className="newProduct" style={{ background: "#5C61F4" }}>
                                <p className="newText">EXCLUSIVE</p>
                            </div>

                        </div>

                        <p className="productCategory__name">
                            Жакет Blowup
                        </p>
                        <div className="productCategory__price">
                            20 990 ₸
                        </div>
                    </div>
                    <div className="productCategory__list-block">
                        <div className="productCategory__list-blockImg">
                            <img src={jacketImg2} alt="product " />

                            <div className="favoriteIcon">
                                <HeartIcon width="20" height="18" className="icon" />
                            </div>

                            <div className="newProduct">
                                <p className="newText">НОВИНКА</p>
                            </div>
                        </div>

                        <p className="productCategory__name">
                            Футболка
                        </p>
                        <div className="productCategory__price">
                            6 990 ₸
                        </div>
                    </div>
                    <div className="productCategory__list-block">
                        <div className="productCategory__list-blockImg">
                            <img src={jacketImg} alt="product " />

                            <div className="favoriteIcon">
                                <HeartIcon width="20" height="18" className="icon" />
                            </div>

                            <div className="newProduct" style={{ background: "#5C61F4" }}>
                                <p className="newText">EXCLUSIVE</p>
                            </div>

                        </div>

                        <p className="productCategory__name">
                            Жакет Blowup
                        </p>
                        <div className="productCategory__price">
                            20 990 ₸
                        </div>
                    </div>
                </div>

                <LayoutListCategoryComponent textTitle={"Товары со скидкой"}>
                    <ProdictCategotyItemSaleBlockComponent
                        productPrice={"12 495 ₸"}
                        productPriceSalve={"25 990 ₸"}
                        productName={"Куртка-бомбер с встав..."}
                        imgUrl={saleImg1} />

                    <ProdictCategotyItemSaleBlockComponent
                        productPrice={"15 594 ₸"}
                        productPriceSalve={"25 990 ₸"}
                        productName={"Motf Premium"}
                        imgUrl={saleImg2} />

                    <ProdictCategotyItemSaleBlockComponent
                        productPrice={"12 495 ₸"}
                        productPriceSalve={"25 990 ₸"}
                        productName={"Свитер"}
                        imgUrl={saleImg3} />

                    <ProdictCategotyItemSaleBlockComponent
                        productPrice={"12 495 ₸"}
                        productPriceSalve={"25 990 ₸"}
                        productName={"Куртка-бомбер с встав..."}
                        imgUrl={saleImg2} />
                </LayoutListCategoryComponent>

                <LayoutListCategoryComponent textTitle={"Категории"}>
                    <CategoryComponent imgUrl={womenCategory} categoryTitle={"Женщинам"} />
                    <CategoryComponent imgUrl={menCategory} categoryTitle={"Мужчинам"} />
                    <CategoryComponent imgUrl={girlsCategory} categoryTitle={"Девочкам"} />
                    <CategoryComponent imgUrl={womenCategory} categoryTitle={"Мальчикам"} />
                </LayoutListCategoryComponent>

                <div className="blockCategory">
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
                            Универсальная
                        </p>
                    </button>
                    <button className="categoryListBtns__btn">
                        <p className="btnText">
                            Детям
                        </p>
                    </button>
                </div>

                <LayoutListCategoryComponent textTitle={"Футболки"}>
                    <SpeceficProductComponent
                        imgUrl={userPreview1}
                        productName={"Corner"}
                        productPrice={"5 990 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview2}
                        productName={"EnvyLab"}
                        productPrice={"6 990 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview3}
                        productName={"Футболка"}
                        productPrice={"6 490 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview1}
                        productName={"Corner"}
                        productPrice={"5 990 ₸"} />
                </LayoutListCategoryComponent>

                <LayoutListCategoryComponent textTitle={"Платья"}>
                    <SpeceficProductComponent
                        imgUrl={userPreview4}
                        productName={"Zara"}
                        productPrice={"5 490 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview5}
                        productName={"Stradivarius"}
                        productPrice={"13 990 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview6}
                        productName={"Платье с открытой спин..."}
                        productPrice={"16 490 ₸"} />
                    <SpeceficProductComponent
                        imgUrl={userPreview4}
                        productName={"Zara"}
                        productPrice={"5 490 ₸"} />
                </LayoutListCategoryComponent>
            </div>

            <div className="blockCategory">
                <button className="allProductBtn">
                    <p className="btnText">
                        Все товары
                    </p>
                </button>
            </div>
        </main>
    );
}

const CategoryComponent = ({ imgUrl, categoryTitle }) => {
    return (
        <div className="productCategory__list-block">
            <div className="productCategory__list-blockImg">
                <img src={imgUrl} alt="product " />
            </div>

            <p className="productCategory__name productCategory__title">
                {categoryTitle}
            </p>
        </div>
    );
}

const SpeceficProductComponent = ({ imgUrl, productName, productPrice }) => {
    return (
        <div className="productCategory__list-block">
            <div className="productCategory__list-blockImg">
                <img src={imgUrl} alt="product " />

                <div className="favoriteIcon">
                    <HeartIcon width="20" height="18" className="icon" />
                </div>

            </div>

            <p className="productCategory__name">
                {productName}
            </p>
            <div className="productCategory__price">
                {productPrice}
            </div>
        </div>
    );
}


const ProdictCategotyItemSaleBlockComponent = (props) => {
    const { productName, productPrice, imgUrl, productPriceSalve } = props;
    return (
        <div className="productCategory__list-block">
            <div className="productCategory__list-blockImg">
                <img src={imgUrl} alt="product " />

                <div className="favoriteIcon">
                    <HeartIcon width="20" height="18" className="icon" />
                </div>

                <div className="newProduct">
                    <p className="newText">-50%</p>
                </div>

            </div>

            <p className="productCategory__name">
                {productName}
            </p>
            <div className="productCategory__price">
                {productPrice} <span className="salePriceText">{productPriceSalve}</span>
            </div>
        </div>
    );
}

const LayoutListCategoryComponent = ({ children, textTitle }) => {
    return (
        <div className="blockCategory">
            <div className="productCategory__head">
                <p className="productCategory__titleText">
                    {textTitle}
                </p>

                <div className="linkMoreInfo">
                    <span className="linkMoreInfo__text">Перейти</span>
                    <RightArrow width="15" height="12" />
                </div>
            </div>
            <div className="productCategory__list">
                {children}
            </div>
        </div>
    );
}

export default UserPreviewMainDataInfoShowComponent;