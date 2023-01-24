import { Link } from "react-router-dom";

import HamburgerComponent from "../app-hamburger";
import UserMenuComponent from "../app-userMenu";
import { CategoryComponent } from "../app-userPreviewMainDataInfoShow";

import womenCategory from "../../resources/img/womenCategory.png";
import menCategory from "../../resources/img/menCategory.png";
import girlsCategory from "../../resources/img/girlsCategory.png";
import boysCategory from "../../resources/img/boysCategory.png";
import homeCategory from "../../resources/img/homeCategory.png";
import stockCategory from "../../resources/img/stockCategory.png";

import "./index.scss";

const UserAllCategoryComponent = () => {
    return (
        <div className="allCategory">
            <div className="containerUser">

                <div className="allCategory__head">
                    <h2 className="allCategoryText">Все категории</h2>

                    <HamburgerComponent />
                    <UserMenuComponent />
                </div>


                {/* dynamic url bolady */}
                <p className="subtext allCategory__url">
                    <Link to={"../main"} relative="path">
                        Главная
                    </Link>
                    &nbsp;/&nbsp;Все категории
                </p>


                <div className="allCategory__grid">
                    <CategoryComponent imgUrl={womenCategory} categoryTitle={"Женщинам"} />
                    <CategoryComponent imgUrl={menCategory} categoryTitle={"Мужчинам"} />
                    <CategoryComponent imgUrl={girlsCategory} categoryTitle={"Девочкам"} />
                    <CategoryComponent imgUrl={boysCategory} categoryTitle={"Мальчикам"} />
                    <CategoryComponent imgUrl={homeCategory} categoryTitle={"Дом"} />
                    <CategoryComponent imgUrl={stockCategory} categoryTitle={"Акции"} />
                </div>
            </div>
        </div>
    );
}

export default UserAllCategoryComponent;