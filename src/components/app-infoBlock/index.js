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
                    <div className="data-block">

                        <div className="profileIcon">
                            <img src={profileIcon} alt="profile icon" />
                        </div>

                        <div className="infoData">
                            <span className="text text-infoCount">
                                0
                            </span>

                            <span className="text text-subInfoCount">
                                Покупателей
                            </span>
                        </div>

                    </div>
                    <LayoutInfoBlockComponent data={{
                        icon: cashIcon,
                        text: "Заработано за месяц",
                        borderColor: '{"borderColor": "#F25E7F"}',
                    }} />

                    <LayoutInfoBlockComponent data={{
                        icon: greenIcon,
                        text: "заказов за месяц",
                        borderColor: '{"borderColor": "#53D160"}',
                    }} />

                    <LayoutInfoBlockComponent data={{
                        icon: blueIcon,
                        text: "товаров в каталоге",
                        borderColor: '{"borderColor": "#5C61F4"}',
                    }} />
                </div>
            </div>
        </div>
    );
}

const LayoutInfoBlockComponent = ({ data }) => {
    return (
        <div className="data-block">
            <div className="profileIcon" style={JSON.parse(data.borderColor)}>
                <img src={data.icon} alt="profile icon" />
            </div>
            <div className="infoData">
                <span className="text text-infoCount">
                    0
                </span>

                <span className="text text-subInfoCount">
                    {data.text}
                </span>
            </div>

        </div >
    );
}

export default InfoBlockComponent;