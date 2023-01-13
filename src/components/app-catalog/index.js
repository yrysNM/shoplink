import CatalogListComponent from "./helpers/catalogList";
// import DefaultScreenComponent from "../app-defaultScreen";
import "./index.scss";


const CatalogComponent = () => {
    return (
        <div className="pagehead">
            <div className="container">
                <p className="text-page__title">
                    Каталог
                </p>

                <CatalogListComponent />
                {/* егер catalog ештенке жок болса defaultScreen component колданылады */}
                {/* <DefaultScreenComponent
                    titleDefault={"У вас еще нет товаров"}
                    btn={"Добавить товар"}
                    descr={"Для добавления товара нажмите на Добавить товар"} /> */}
            </div>
        </div>
    );
}

export default CatalogComponent;