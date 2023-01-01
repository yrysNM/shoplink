import TopCityComponent from "./helpers/city";
import ListCatalogComponent from "./helpers/catalog";
import plusIcon from "../../resources/icon/plusIcon.svg";
import "./index.scss";

const CatalogCityComponent = () => {
    return (
        <div className="catalogCity">
            <div className="container">
                <div className="catalogCity_wrapper">
                    <div className="catalog">
                        <p className="text-catalog">У вас нет товаров в каталоге</p>

                        <ListCatalogComponent plusIcon={plusIcon} />
                    </div>
                    <div className="city">
                        <p className="text-city">Топ городов</p>
                        <TopCityComponent data={{
                            cityName: "Алматы",
                            progressInfo: 36.2,
                        }} />

                        <TopCityComponent data={{
                            cityName: "Aстана",
                            progressInfo: 38.1,
                        }} />
                        <TopCityComponent data={{
                            cityName: "Караганда",
                            progressInfo: 25.7,
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogCityComponent;