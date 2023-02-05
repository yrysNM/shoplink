import { useContext } from "react";
import { Link } from "react-router-dom";

import { HelpFormInputComponent } from "../../app-shop";
import { DataContext } from "../../../context/DataContext";
import StatusFilterComponent from "../../app-order/helpers/statusFilter";
import CatalogGridComponent from "../../app-catalogGrid";
import PaginationComponent from "../../app-pagination";

import { ReactComponent as SearchIcon } from "../../../resources/icon/orderIcons/searchIcon.svg";
import { ReactComponent as FilterIcon } from "../../../resources/icon/orderIcons/filterIcon.svg";

import "./catalogList.scss";

const objTextCategory = [
    {
        text1: "Женщинам"
    },
    {
        text1: "Мужчинам"
    },
    {
        text1: "Детям"
    }
];

const objTextSubCategory = [
    {
        text1: "Футболки"
    },
    {
        text1: "Верхняя одежда"
    },
    {
        text1: "Штаны"
    },
    {
        text1: "Шорты"
    },
    {
        text1: "Обувь"
    },
    {
        text1: "Аксессуары"
    }
];



const CatalogListComponent = () => {
    const { isActiveModal, OpenModal } = useContext(DataContext);

    return (
        <>
            <div className="btn btn-catalogList" style={{ right: 215 }}>
                <button className="addGds">Создать раздел</button>
            </div>
            <div className="btn btn-catalogList">
                <Link to={"/catalog/add"}>
                    <button className="addGds">Добавить товар</button>
                </Link>
            </div>
            <div className="catalogListPage">
                <div className="orderLayout-head">
                    <div className="dataOrder-filter">
                        <form className='form-filter catalogListPage__grid'>
                            <HelpFormInputComponent data={{
                                iconComponent: <SearchIcon />,
                                inputType: "text",
                                placeholder: "Поиск по номеру заказа или телефона",
                                inputName: "search input",

                            }} />

                            <StatusFilterComponent textStatus={"Все категории"} objText={objTextCategory} />

                            <StatusFilterComponent textStatus={"Подкатегория"} objText={objTextSubCategory} />

                            <div className="statusFilter">
                                <div
                                    className={`statusBlockFilter modalFilter ${isActiveModal.classNameIsActive && isActiveModal.id === "filterModal" && "activeModal"}`}
                                    onClick={() => OpenModal({
                                        id: "filterModal",
                                        classNameIsActive: "activeModalFilter",
                                        topPosition: "56%",
                                        rightPosition: "27.5%"
                                    })}>

                                    Фильтры
                                    <FilterIcon className="icon" />
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
                <div className="grid-temp catalogList-row">
                    <div className="box th">Номер</div>
                    <div className="box th">Фото</div>
                    <div className="box th moreBox">Название и категория</div>
                    <div className="box th">Размеры</div>
                    <div className="box th">Цвета</div>
                    <div className="box th">Цена</div>
                    <div className="box th">В наличии</div>
                    <div className="box th"></div>

                    <CatalogGridComponent />
                </div>
            </div>
            <PaginationComponent />
        </>
    );
}

export default CatalogListComponent;