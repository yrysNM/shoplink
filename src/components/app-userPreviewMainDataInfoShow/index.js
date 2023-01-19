import { ReactComponent as RightArrow } from "../../resources/icon/rightArrow.svg";
import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";
import sweaterImg from "../../resources/img/userPreview1.png";
import jacketImg from "../../resources/img/userPreview2.png";
import jacketImg2 from "../../resources/img/userPreview3.png";

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
            </div>
        </main>
    );
}

export default UserPreviewMainDataInfoShowComponent;