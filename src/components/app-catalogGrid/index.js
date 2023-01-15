import { useContext } from "react";

import { TickIconComponent } from "../app-filterStatus";
import { DataContext } from "../../context/DataContext";

import testImg from "../../resources/img/catalogList.png";
import testImg2 from "../../resources/img/sweatar.jpg";
import testImg3 from "../../resources/img/jaket.png";
import testImg4 from "../../resources/img/jacketBamber.png";
import testImg5 from "../../resources/img/milkJacket.png";
import { ReactComponent as EditIcon } from "../../resources/icon/addProductsIcons/editCatalog.svg";
import { ReactComponent as TrashIcon } from "../../resources/icon/addProductsIcons/trash.svg";


import "./index.scss";

const CatalogGridComponent = () => {
    const { OpenModal } = useContext(DataContext);

    return (
        <>
            <div className="row catalogList-row">
                <div className="box numberOrder">#0560</div>
                <div className="box">
                    <img src={testImg} alt="catalogList" className="imgCatalog" />
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
                    <TickIconComponent styleBox={" selectBox"} />
                </div>

                <div className="box">
                    <EditIcon className="icon" />
                    <TrashIcon
                        className="icon icon_trash"
                        onClick={() => {
                            OpenModal({
                                id: "warningRemoveModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "40%",
                                catalogNumber: "#0560"
                            })
                        }} />
                </div>
            </div>
            <div className="row catalogList-row">
                <div className="box numberOrder">#0561</div>
                <div className="box">
                    <img src={testImg2} alt="catalogList" className="imgCatalog" />
                </div>
                <div className="box moreBox">
                    <div className="catalogList-titleName">
                        Свитер
                    </div>
                    <div className="subText catalogList-descrText">
                        Женщинам, футболки
                    </div>
                </div>
                <div className="box">
                    <p className="sizeProducts">S,M,L</p>
                </div>
                <div className="box catalogColors">
                    <span className="colorProduct" style={{ background: "#E1C148" }}></span>
                    <span className="colorProduct" style={{ background: "#5BBE89" }}></span>
                    <span className="colorProduct" style={{ background: "#E72DEB" }}></span>
                </div>
                <div className="box price">
                    10 990 ₸
                </div>
                <div className="box">
                    <TickIconComponent tickValue={false} styleBox={" selectBox"} />
                </div>

                <div className="box">
                    <EditIcon className="icon" />
                    <TrashIcon
                        className="icon icon_trash"
                        onClick={() => {
                            OpenModal({
                                id: "warningRemoveModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "40%",
                                catalogNumber: "#0560"
                            })
                        }} />
                </div>
            </div>
            <div className="row catalogList-row">
                <div className="box numberOrder">#0562</div>
                <div className="box">
                    <img src={testImg3} alt="catalogList" className="imgCatalog" />
                </div>
                <div className="box moreBox">
                    <div className="catalogList-titleName">
                        Жакет
                    </div>
                    <div className="subText catalogList-descrText">
                        Женщинам, одежда
                    </div>
                </div>
                <div className="box">
                    <p className="sizeProducts">S,M,L</p>
                </div>
                <div className="box catalogColors">
                    <span className="colorProduct" style={{ background: "#8A8A8A" }}></span>
                    <span className="colorProduct" style={{ background: "#353535" }}></span>
                </div>
                <div className="box price">
                    20 490 ₸
                </div>
                <div className="box">
                    <TickIconComponent styleBox={" selectBox"} />
                </div>

                <div className="box">
                    <EditIcon className="icon" />
                    <TrashIcon
                        className="icon icon_trash"
                        onClick={() => {
                            OpenModal({
                                id: "warningRemoveModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "40%",
                                catalogNumber: "#0560"
                            })
                        }} />
                </div>
            </div>
            <div className="row catalogList-row">
                <div className="box numberOrder">#0562</div>
                <div className="box">
                    <img src={testImg4} alt="catalogList" className="imgCatalog" />
                </div>
                <div className="box moreBox">
                    <div className="catalogList-titleName">
                        Куртка-бомбер
                    </div>
                    <div className="subText catalogList-descrText">
                        Женщинам, футболки
                    </div>
                </div>
                <div className="box">
                    <p className="sizeProducts">S,M,L</p>
                </div>
                <div className="box catalogColors">
                    <span className="colorProduct" style={{ background: "#252728" }}></span>
                    <span className="colorProduct" style={{ background: "#17766C" }}></span>
                    <span className="colorProduct" style={{ background: "#E47634" }}></span>
                    <span className="colorProduct" style={{ background: "#FDECCC" }}></span>
                </div>
                <div className="box price">
                    20 490 ₸
                </div>
                <div className="box">
                    <TickIconComponent styleBox={" selectBox"} />
                </div>

                <div className="box">
                    <EditIcon className="icon" />
                    <TrashIcon
                        className="icon icon_trash"
                        onClick={() => {
                            OpenModal({
                                id: "warningRemoveModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "40%",
                                catalogNumber: "#0560"
                            })
                        }} />
                </div>
            </div>
            <div className="row catalogList-row">
                <div className="box numberOrder">#0562</div>
                <div className="box">
                    <img src={testImg5} alt="catalogList" className="imgCatalog" />
                </div>
                <div className="box moreBox">
                    <div className="catalogList-titleName">
                        Жакет молочный
                    </div>
                    <div className="subText catalogList-descrText">
                        Женщинам, одежда
                    </div>
                </div>
                <div className="box">
                    <p className="sizeProducts">S,M,L</p>
                </div>
                <div className="box catalogColors">
                    <span className="colorProduct" style={{ background: "#EAE4D7" }}></span>
                </div>
                <div className="box price">
                    15 990 ₸
                </div>
                <div className="box">
                    <TickIconComponent tickValue={false} styleBox={" selectBox"} />
                </div>

                <div className="box">
                    <EditIcon className="icon" />
                    <TrashIcon
                        className="icon icon_trash"
                        onClick={() => {
                            OpenModal({
                                id: "warningRemoveModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "40%",
                                catalogNumber: "#0560"
                            })
                        }} />
                </div>
            </div>
        </>
    );
}

export default CatalogGridComponent;