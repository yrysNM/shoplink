import LayoutStoreInfoBlockComponent from "./helpers/store-infoBlock";
import profileIcon from "../../resources/icon/infoIcons/profileIcon.svg";
import cashIcon from "../../resources/icon/infoIcons/cash.svg";
import greenIcon from "../../resources/icon/infoIcons/GreenIcon.svg";
import blueIcon from "../../resources/icon/infoIcons/BlueIcon.svg";
import "./index.scss";


const InfoBlockComponent = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="info-wrapper">
                    <LayoutStoreInfoBlockComponent data={{
                        icon: profileIcon,
                        text: "Покупателей",
                        information: 456,
                        borderColor: '{"borderColor": "#40BFFF"}',
                    }} />
                    <LayoutStoreInfoBlockComponent data={{
                        icon: cashIcon,
                        text: "Заработано за месяц",
                        information: `112 900 ₸`,
                        borderColor: '{"borderColor": "#F25E7F"}',
                    }} />

                    <LayoutStoreInfoBlockComponent data={{
                        icon: greenIcon,
                        text: "заказов за месяц",
                        information: 23,
                        borderColor: '{"borderColor": "#53D160"}',
                    }} />

                    <LayoutStoreInfoBlockComponent data={{
                        icon: blueIcon,
                        text: "товаров в каталоге",
                        information: 156,
                        borderColor: '{"borderColor": "#5C61F4"}',
                    }} />
                </div>
            </div>
        </div>
    );
}


export default InfoBlockComponent;