import { useState } from "react";
import ChooseOrderComponent from "../../app-chooseOrder";
import { ReactComponent as ArrowDown } from "../../../resources/icon/shopDataIcons/arrowDown.svg";
import { ReactComponent as ArrowUp } from "../../../resources/icon/shopDataIcons/arrowUp.svg";

const LastOrderTableComponent = ({ data }) => {

    const [statusToggle, setStatusToggle] = useState(false);

    const handleClick = () => {
        setStatusToggle(statusToggle => !statusToggle);
    }
    return (
        <tr>
            <td className="td numberOrder">{data.numberOrder}</td>
            <td className="td">{data.dateOrder}</td>
            <td className="td">{data.cityName}d</td>
            <td className="td">{data.userName}</td>
            <td className="td">{data.phoneNumber}</td>
            <td className="td">{data.price}  ₸</td>
            <td className="td">
                <div className="select select-table__status" style={{ borderRadius: `${!statusToggle ? "15px" : "15px 15px 0 0"}` }}>
                    <span className="select-table__textStatus" style={{ color: data.statusColorText }}>{data.status}</span>

                    {!statusToggle
                        ? <ArrowDown onClick={handleClick} width="11px" height="11px" />
                        : <ArrowUp onClick={handleClick} />
                    }
                </div>

                {statusToggle ? <ChooseOrderComponent bgColor={data.chooseStatusBgColor} status={data.status} />
                    : null
                }
            </td>

            <td className="td">
                <div className="select select-table__composition">
                    <span className="select-table__textComposition">Состав</span>

                    <ArrowDown />
                </div>
            </td>
        </tr>);
}

export default LastOrderTableComponent;