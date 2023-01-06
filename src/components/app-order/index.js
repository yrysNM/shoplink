import DataOrderComponent from "./helpers/dataOrder";
import DefaultScreenComponent from "../app-defaultScreen";
import "../app-catalog/index.scss";

const OrderComponent = () => {
    return (
        <div className="orderPage">
            <div className="container">
                <p className="text-order__title">
                    Заказы
                </p>

                {/* егер catalog ештенке жок болса defaultScreen component колданылады */}
                {/* <DefaultScreenComponent
                    color={"#F25E7F"}
                    titleDefault={"У вас еще нет заказов."}
                    descr={"К вам еще не поступало новых  заявок"} /> */}

                {/* eger data lar bar bolsa */}
                <DataOrderComponent />
            </div>
        </div>
    );
}

export default OrderComponent;