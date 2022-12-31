import plusIcon from "../../resources/icon/plusIcon.svg";
import "./index.scss";

const CatalogCityComponent = () => {
    return (
        <div className="catalogCity">
            <div className="container">
                <div className="catalogCity_wrapper">
                    <div className="catalog">
                        <p className="text-catalog">У вас нет товаров в каталоге</p>

                        <div className="catalogList">
                            <div className="catalogList-block">
                                <img src={plusIcon} alt="plus icon" />
                                <span className="text-add">Добавить</span>
                            </div>

                            <div className="catalogList-block" />

                            <div className="catalogList-block" />
                        </div>
                    </div>

                    <div className="city">
                        <p className="text-city">Топ городов</p>

                        <div className="city-top">
                            <p className="text text-cityName">Алматы</p>

                            <div className="presentationInfo">
                                <span className="progressInfo"></span>
                                <p className="procentInfo">0%</p>
                            </div>
                        </div>

                        <div className="city-top">
                            <p className="text-cityName">Acтана</p>

                            <div className="presentationInfo">
                                <span className="progressInfo"></span>
                                <p className="procentInfo">0%</p>
                            </div>
                        </div>

                        <div className="city-top">
                            <p className="text text-cityName">Караганда</p>

                            <div className="presentationInfo">
                                <span className="progressInfo"></span>
                                <p className="procentInfo">0%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogCityComponent;