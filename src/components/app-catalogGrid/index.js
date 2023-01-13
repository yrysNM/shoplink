import { TickIconComponent } from "../app-filterStatus";

import testImg from "../../resources/img/catalogList.png";
import { ReactComponent as EditIcon } from "../../resources/icon/addProductsIcons/editCatalog.svg";
import { ReactComponent as TrashIcon } from "../../resources/icon/addProductsIcons/trash.svg";


import "./index.scss";

const CatalogGridComponent = () => {
    return (
        <>
            <div className="row catalogList-row">
                <div className="box numberOrder">#0560</div>
                <div className="box">
                    <img src={testImg} alt="catalogList" />
                </div>
                <div className="box moreBox">
                    <div className="catalogList-titleName">
                        Пальто двубортное на пуговицах
                    </div>
                    <div className="subText catalogList-descrText">
                        Женщинам, верхняя одежда
                    </div>
                </div>
                <div className="box">
                    <p className="sizeProducts">S,M,L</p>
                </div>
                <div className="box">
                    <span className="colorProduct" style={{ background: "#252728" }}></span>
                </div>
                <div className="box price">
                    15 990 ₸
                </div>
                <div className="box">
                    <TickIconComponent />
                </div>

                <div className="box">
                    <EditIcon className="icon" />
                    <TrashIcon className="icon icon_trash" />
                </div>
            </div>
            <div className="row catalogList-row">
                <div className="box numberOrder">#0560</div>
                <div className="box">
                    <img src={testImg} alt="catalogList" />
                </div>
                <div className="box moreBox">
                    <div className="catalogList-titleName">
                        Пальто двубортное на пуговицах
                    </div>
                    <div className="subText catalogList-descrText">
                        Женщинам, верхняя одежда
                    </div>
                </div>
                <div className="box">
                    <p className="sizeProducts">S,M,L</p>
                </div>
                <div className="box">
                    <span className="colorProduct" style={{ background: "#252728" }}></span>
                </div>
                <div className="box price">
                    15 990 ₸
                </div>
                <div className="box">
                    <TickIconComponent />
                </div>

                <div className="box">
                    <EditIcon className="icon" />
                    <TrashIcon className="icon icon_trash" />
                </div>
            </div>
        </>
    );
}

export default CatalogGridComponent;