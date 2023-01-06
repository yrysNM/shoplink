import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StatusOrderComponent from "../app-lastOrder/helpers/statusOrder";
import { testData } from "../app-lastOrder/helpers/lastOrderGrid";
import { ReactComponent as LocationArrow } from "../../resources/icon/orderIcons/locationArrow.svg";

const OrderLayoutComponent = () => {
    const { numberOrder } = useParams();
    const data = useState(testData.filter(item => item.numberOrder === numberOrder));
    useEffect(() => {
        console.log(numberOrder);
    }, [])

    return (
        <div className="orderLayout">
            <div className="container">
                <div className="orderLayout-head">
                    <LocationArrow />

                    <h2 className="orderNumber-text">Заказ {numberOrder}</h2>

                    <StatusOrderComponent item={data} />
                </div>
            </div>
        </div>
    );
}

export default OrderLayoutComponent;