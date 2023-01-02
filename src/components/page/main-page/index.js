import AddGdsCompoenent from "../../app-addGds";
import InfoBlockComponent from "../../app-infoBlock";
import CatalogCityComponent from "../../app-catalog_city";
import LastOrderComponent from "../../app-lastOrder";

const MainPageComponent = () => {
    return (
        <div>
            <AddGdsCompoenent />
            {/* канша Покупател бар тагы сондай сиякты информация  */}
            <InfoBlockComponent />

            <CatalogCityComponent />

            {/* егер Последние заказы бар болса осы component колданылады */}
            <LastOrderComponent />
        </div>
    );
}

export default MainPageComponent; 