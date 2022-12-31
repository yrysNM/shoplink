import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../resources/icon/homeIcon.svg";
import { ReactComponent as CatalogIcon } from "../../resources/icon/catalogIcon.svg";
import { ReactComponent as OrderIcon } from "../../resources/icon/orderIcon.svg";
import { ReactComponent as SettingIcon } from "../../resources/icon/settingIcon.svg";
import "./index.scss";

const SideBarComponent = () => {
    const location = useLocation();

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
                        if (location.pathname === btn.link) {
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
            <Link to={data.link}>
                <div className={`iconwrapper iconwrapper-${activeStyle}`}>
                    {data.homeIcon}
                </div>
            </Link>
            <span className="text text-menu">{data.text}</span>
        </>
    );
}

export default SideBarComponent;