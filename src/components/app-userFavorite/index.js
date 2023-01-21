import { NavLink } from "react-router-dom";
import HamburgerComponent from "../app-hamburger";

import DefaultScreenComponent from "../app-defaultScreen";
import { classNamesHeartIcon } from "../app-userCategory";
import UserMenuComponent from "../app-userMenu";

import { ReactComponent as HeartIcon } from "../../resources/icon/userIcons/heart.svg";
import { ReactComponent as BasketIcon } from "../../resources/icon/userIcons/basket.svg";


import "./index.scss";

const UserFavoriteComponent = () => {


    return (
        <div className="userCategory userFavorite">
            <div className="containerUser">
                <div className="userCategoryProduct__head">
                    <HamburgerComponent />
                    <UserMenuComponent />

                    <h2 className="userCategoryProduct__head-title">Избранное</h2>

                    <div className="favoriteBasketIcons">
                        <div className="iconBlock">
                            <NavLink className={({ isActive }) => isActive ? classNamesHeartIcon : undefined} to={"/user/preview/favorite"}>
                                <HeartIcon />
                            </NavLink>
                        </div>
                        <div className="iconBlock">
                            <NavLink to="/user/preview/basket"
                                className={({ isActive }) => isActive ? classNamesHeartIcon : undefined}>
                                <BasketIcon />
                            </NavLink>
                        </div>
                    </div>

                </div>

                <div className="defaultScreen">
                    <DefaultScreenComponent descr={"По вашему запросу ничего не найдено"} />
                </div>
            </div>
        </div>
    );
}

export default UserFavoriteComponent;