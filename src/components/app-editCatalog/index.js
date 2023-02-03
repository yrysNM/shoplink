import { useState, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { DataContext } from "../../context/DataContext";
import SelecterCatalogComponent from "../app-selectCatalog";
import { SubSelectorCatalogComponent } from "../app-selectCatalog";
import { TickIconComponent } from "../app-filterStatus";

import { ReactComponent as LocationArrow } from "../../resources/icon/orderIcons/locationArrow.svg";
import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";
import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";
import { ReactComponent as CashIcon } from "../../resources/icon/infoIcons/cash.svg";
import { ReactComponent as TrashIcon } from "../../resources/icon/addProductsIcons/trash.svg";
import { ReactComponent as FullScreen } from "../../resources/icon/addProductsIcons/fullScreen.svg";
import { ReactComponent as EditIcon } from "../../resources/icon/addProductsIcons/editCatalog.svg";
import testImg1 from "../../resources/img/mainPhoto.png";
import testImg2 from "../../resources/img/test2.png";
import testImg3 from "../../resources/img/test3.png";


const EditCatalogComponent = () => {
    const [wordLength, setWordLength] = useState("Минималистичное пальто длины миди из приятного на ощупь плотного материала на основе шерсти с дополнительным утеплением. Оно имеет расслабленный свободный крой, спущенную линию плеча и подчеркнуто широкие лацканы на воротнике, а также боковые карманы с прямоугольными клапанами и застежку на две потайные кнопки.".length);
    const { SetMainPhoto, productMainPhoto, OpenModal } = useContext(DataContext);
    const { catalogNumber } = useParams();


    const fileInputHidden = useRef(null);

    const funcWordLength = (e) => {

        setWordLength(e.target.value.length);
    }

    const handleChange = (e) => {
        const fileUploaded = e.target.files[0];

        SetMainPhoto({
            preview: URL.createObjectURL(fileUploaded),
            raw: fileUploaded
        });
    }

    const handleInputChange = (e) => {
        console.log(`------------------input value ${e.target.value}--------------------- `);
    }

    const handleClick = () => {
        fileInputHidden.current.click();
    }

    // const filterPhotoes = (index) => {
    //     FilterMainPhoto(index);
    // }

    const MainPhotoComponent = ({ productImage }) => {
        return (
            <div className="addBlock mainPhoto">

                <img width="100%" height="100%" src={testImg1} alt="main product" style={{ objectFit: "none" }} />
                <span className="subTextImg">Главное фото</span>

                <div className="mainPhoto__icon">

                    <div className="trashFullIcon" style={{ right: 12 }}>
                        <TrashIcon />
                    </div>
                    <div
                        className="trashFullIcon"
                        style={{ right: 12 }}
                        onClick={() => {
                            OpenModal({
                                id: "fullScreenModal",
                                classNameIsActive: "activeModalFilter",
                                topPosition: "50%",
                                rightPosition: "auto",
                                leftPosition: "50%",
                                transform: "translate(-50%, -50%)",
                                imgUrl: testImg1
                            })
                        }}>
                        <FullScreen />
                    </div>
                </div>
            </div>
        );
    }



    return (
        <div className="add-product">
            <div className="container">
                <div className="add-product_head">
                    <div className="add-product_head-firstBlock">
                        <Link to=".." relative="path" className="locationArrow" style={{ marginRight: 12 }}>
                            <LocationArrow />
                        </Link>

                        <h2 className="orderNumber-text addProductText">#{catalogNumber} Пальто двубортное на пуговицах</h2>
                    </div>

                    <div className="add-product_head-firstBlock">
                        <div className="add-product_head-firstBlock add-product_head__inStock">
                            <div className="instockText">В наличии</div>
                            <div className="inStockIcon">
                                <TickIcon width="15" height="12" />
                            </div>
                        </div>

                        <div className="add-product_head-firstBlock add-product_head__btns">
                            <button className="preview">
                                <Link to={"/user/preview"}>
                                    <p className="btnText">
                                        Предосмотр
                                    </p>
                                </Link>
                            </button>
                            <button className="btn save" onClick={() => {
                                OpenModal({
                                    id: "warningRemoveModal",
                                    classNameIsActive: "activeModalFilter",
                                    topPosition: "50%",
                                    rightPosition: "auto",
                                    leftPosition: "50%",
                                    transform: "translate(-50%, -50%)",
                                    catalogNumber: "#0560"
                                })
                            }}>Удалить товар</button>
                        </div>
                    </div>
                </div>

                <div className="add-product_main">
                    <div className="add-product_main__photo">
                        <h4 className="photoProduct">Фотографии товара</h4>

                        <div className="list">
                            {/* main photo */}
                            <MainPhotoComponent productImage={productMainPhoto[0]} />

                            <div className="addBlock" style={{ background: "#fff" }}>
                                <img width="100%" height="100%" className="otherImg" src={testImg2} alt="main product" />
                                <div className="mainPhoto__icon">

                                    <div className="trashFullIcon" style={{ right: 12 }}>
                                        <TrashIcon />
                                    </div>
                                    <div className="trashFullIcon" style={{ right: 12 }}>
                                        <FullScreen onClick={() => {
                                            OpenModal({
                                                id: "fullScreenModal",
                                                classNameIsActive: "activeModalFilter",
                                                topPosition: "50%",
                                                rightPosition: "auto",
                                                leftPosition: "50%",
                                                transform: "translate(-50%, -50%)",
                                                imgUrl: testImg2
                                            })
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className="addBlock" style={{ background: "#fff" }}>
                                <img width="100%" height="100%" className="otherImg" src={testImg3} alt="main product" />
                                <div className="mainPhoto__icon">

                                    <div className="trashFullIcon" style={{ right: 12 }}>
                                        <TrashIcon />
                                    </div>
                                    <div className="trashFullIcon" style={{ right: 12 }}>
                                        <FullScreen onClick={() => {
                                            OpenModal({
                                                id: "fullScreenModal",
                                                classNameIsActive: "activeModalFilter",
                                                topPosition: "50%",
                                                rightPosition: "auto",
                                                leftPosition: "50%",
                                                transform: "translate(-50%, -50%)",
                                                imgUrl: testImg3
                                            })
                                        }} />
                                    </div>
                                </div>
                            </div>


                            <div className="addBlock" onClick={handleClick}>

                                {/* hide input */}
                                <input
                                    type="file"
                                    accept="images/*"
                                    name="file uplaod"
                                    ref={fileInputHidden}
                                    onChange={handleChange}
                                    style={{ display: "none" }} />


                                <PlusIcon />
                                {/* {productMainPhoto.length ? null
                                    : <span className='addText' style={{ left: 12 }}>Главное фото</span>
                                } */}
                            </div>
                        </div>

                        <div className="subText">Вы можете загрузить 7 фотографий товара</div>
                    </div>

                    <div className="add-product_main__data">

                        <form className="form form-addProduct">

                            <div className="form-block">
                                <div className="form-block__title">
                                    Название товара
                                </div>
                                <input type="text"
                                    name="name product"
                                    placeholder="Введите название"
                                    className="form-block__input"
                                    defaultValue="Пальто двубортное на пуговицах"
                                    onChange={handleInputChange} />
                            </div>

                            <div className="form-block form-block__textareaBlock">
                                <textarea
                                    name="description product"
                                    className="form-block__textarea"
                                    maxLength="490"
                                    placeholder="Введите подробное описание товара"
                                    onChange={funcWordLength}
                                    defaultValue="Минималистичное пальто длины миди из приятного на ощупь плотного материала на основе шерсти с дополнительным утеплением. Оно имеет расслабленный свободный крой, спущенную линию плеча и подчеркнуто широкие лацканы на воротнике, а также боковые карманы с прямоугольными клапанами и застежку на две потайные кнопки."
                                >

                                </textarea>
                                <span className="wordWarning">
                                    {wordLength}/490 символов
                                </span>

                            </div>

                            <div className="form-block">
                                <div className="form-block__title">
                                    Категория товара
                                </div>

                                <SelecterCatalogComponent placeholderText={"Женщинам"} />
                            </div>

                            <div className="form-block">
                                <div className="form-block__title">
                                    Подкатегория
                                </div>

                                <SubSelectorCatalogComponent placeholderText={"Верхняя одежда"} />
                            </div>
                        </form>
                    </div>

                    <div className="add-product_main__price">
                        <div className="price_headText">Цена</div>

                        <div className="form-block_price">
                            <div className="form-block_price__icon">
                                <CashIcon />
                            </div>
                            <input
                                type="number"
                                name="price"
                                placeholder="Укажите цену"
                                className="input-price"
                                value={12990}
                                onChange={handleInputChange} />
                            <div className="form-block_price__info">
                                ₸
                            </div>
                        </div>

                        <div className="selectTags-block">
                            <div className="selectTags-block_headText">
                                Выберите бирки <span className="subtext">(не обязательно)</span>
                            </div>

                            <div className="selectTags-block__grid">
                                <div className="beginInfoProduct">

                                    <TickIconComponent tickValue={false} styleBox={" selectBox"} />
                                    <div className="textInfo">
                                        Новинка
                                        <p className="subtext">действует 7 дней</p>
                                    </div>
                                </div>

                                <div className="beginInfoProduct">
                                    <TickIconComponent tickValue={false} styleBox={" selectBox"} />
                                    <div className="textInfo">
                                        Эксклюзив
                                        <p className="subtext">действует 6 недель</p>
                                    </div>
                                </div>

                                <div className="beginInfoProduct">
                                    <TickIconComponent tickValue={true} styleBox={" selectBox"} />
                                    <div className="textInfo">
                                        Скидка
                                    </div>
                                </div>

                                <div className="beginInfoProduct">
                                    <TickIconComponent tickValue={true} styleBox={" selectBox"} />
                                    <div className="textInfo">
                                        Рассрочка
                                    </div>
                                </div>
                                <div className="beginInfoProduct subbeginInfoProduct">
                                    <div className="form-block_price" style={{ marginTop: 0 }}>

                                        <input
                                            type="number"
                                            name="price"
                                            placeholder="Цена со скидкой"
                                            className="input-price"
                                            // value={0}
                                            onChange={handleInputChange}
                                            style={{ paddingLeft: 12 }} />
                                        <div className="form-block_price__info">
                                            ₸
                                        </div>
                                    </div>
                                    <div className="form-block_price">

                                        <input
                                            type="number"
                                            name="price"
                                            placeholder="0"
                                            className="input-price"
                                            // value={0}
                                            onChange={handleInputChange}
                                            style={{ paddingLeft: 12 }} />
                                        <div className="form-block_price__info">
                                            %
                                        </div>
                                    </div>
                                </div>

                                <div className="beginInfoProduct subInstallment">
                                    <div className="installment">
                                        <span className="boxIns boxIns__active">3</span>
                                        <span className="boxIns">6</span>
                                        <span className="boxIns">12</span>
                                        <span className="boxIns">24</span>
                                    </div>
                                    <span className="monthText">мес</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="add-product_main__productParameters">
                        <h4 className="titleText">Параметры товара</h4>
                        <div className="parameters-block">
                            <div className="parameters-block__size">
                                <p className="availableText">Доступные размеры</p>
                                <div className="sizeBlocks">
                                    <div className="boxSize">
                                        32
                                    </div>
                                    <div className="boxSize boxSize-active">
                                        34
                                    </div>
                                    <div className="boxSize boxSize-active">
                                        36
                                    </div>
                                    <div className="boxSize boxSize-active">
                                        38
                                    </div>
                                    <div className="boxSize boxSize-active">
                                        40
                                    </div>
                                    <div className="boxSize">
                                        42
                                    </div>
                                </div>
                            </div>

                            <div className="prameters-block__color">
                                <p className="availableText">Доступные цвета</p>

                                <div className="colorList">
                                    <span className="colorProduct" style={{
                                        width: "20",
                                        height: "20",
                                        backgroundColor: "#805B42"
                                    }} />
                                    <span className="colorProduct" style={{
                                        width: "20",
                                        height: "20",
                                        backgroundColor: "#252728"
                                    }} />

                                    <EditIcon style={{ cursor: "pointer" }}
                                        onClick={() => OpenModal({
                                            id: "colorModal",
                                            classNameIsActive: "activeModalFilter",
                                            topPosition: "50%",
                                            rightPosition: "auto",
                                            leftPosition: "50%",
                                            transform: "translate(-50%, -50%)"
                                        })} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default EditCatalogComponent;