import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../resources/icon/homeIcon.svg";
import { ReactComponent as CatalogIcon } from "../../resources/icon/catalogIcon.svg";
import { ReactComponent as OrderIcon } from "../../resources/icon/orderIcon.svg";
import { ReactComponent as SettingIcon } from "../../resources/icon/settingIcon.svg";
import "./index.scss";

const SideBarComponent = () => {
    const location = useLocation();
    const lastIndexOf = location.pathname.lastIndexOf("/");
    const startIndexOf = location.pathname.indexOf("/");
    const dataBtn = [
        {
            homeIcon: <HomeIcon />,
            text: "Главная",
            link: "/",
        },
        {
            homeIcon: <CatalogIcon />,
            text: "Каталог",
            link: "/catalog",
        },
        {
            homeIcon: <OrderIcon />,
            text: "Заказы",
            link: "/order"
        },
        {
            homeIcon: <SettingIcon />,
            text: "Магазин",
            link: "/shop",
        }
    ];

    return (
        <div className="side-bar">
            <div className="menu">
                <div className="menu-block">
                    {dataBtn.map((btn, i) => {
                        if (location.pathname === btn.link || location.pathname.substring(startIndexOf, lastIndexOf) === btn.link) {
                            return (
                                <MenuBlockComponent key={i} data={btn} activeStyle={"active"} />
                            );
                        } else {
                            return <MenuBlockComponent data={btn} key={i} />
                        }
                    })}

                    <span className="text text-rightsReserved">
                        © {new Date().getFullYear()} Pentagon. Все права защищены.
                    </span>
                </div>
            </div>
        </div>
    );
}

const MenuBlockComponent = ({ data, activeStyle }) => {
    return (
        <>
            <div className="nav">
                <Link to={data.link}>
                    <span className={`iconwrapper iconwrapper-${activeStyle}`}>
                        {data.homeIcon}
                    </span>
                </Link>
                <span className="text text-menu">{data.text}</span>
            </div>
        </>
    );
}

export default SideBarComponent;