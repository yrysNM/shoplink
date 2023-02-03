import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";

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
// import { ReactComponent as EditIcon } from "../../resources/icon/addProductsIcons/editCatalog.svg";



import "./index.scss";

const AddProductComponent = () => {
    const [wordLength, setWordLength] = useState(0);
    const { SetMainPhoto, productMainPhoto, FilterMainPhoto, selectedValue, OpenModal } = useContext(DataContext);

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

    const handleClick = () => {
        fileInputHidden.current.click();
    }

    const filterPhotoes = (index) => {
        FilterMainPhoto(index);
    }

    const MainPhotoComponent = ({ productImage }) => {
        return (
            <div className="addBlock mainPhoto">

                <img width="100%" height="100%" src={productImage.preview} alt="main product" />
                <span className="subTextImg">Главное фото</span>

                <div className="mainPhoto__icon">

                    <div className="trashFullIcon" style={{ right: 12 }}>
                        <TrashIcon />
                    </div>
                    <div className="trashFullIcon" style={{ right: 12 }}    >
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
                        <Link to=".." relative="path" className="locationArrow">
                            <LocationArrow />
                        </Link>

                        <h2 className="orderNumber-text addProductText">Добавить товар</h2>
                    </div>

                    <div className="add-product_head-firstBlock">
                        <div className="add-product_head-firstBlock add-product_head__inStock">
                            <div className="instockText">В наличии</div>
                            <div className="inStockIcon notAllowedIcon">
                                <TickIcon width="15" height="12" />
                            </div>
                        </div>

                        <div className="add-product_head-firstBlock add-product_head__btns">
                            <button className="preview notAllowedBtn">
                                <p className="btnText">
                                    Предосмотр
                                </p>
                            </button>
                            <button className="btn save notAllowedBtn2">Сохранить</button>
                        </div>
                    </div>
                </div>

                <div className="add-product_main">
                    <div className="add-product_main__photo">
                        <h4 className="photoProduct">Фотографии товара</h4>

                        <div className="list">
                            {/* main photo */}
                            {productMainPhoto[0] ?
                                <MainPhotoComponent productImage={productMainPhoto[0]} /> : null}
                            {productMainPhoto.slice(1, productMainPhoto.length).map((item, i) => (
                                <div key={i} className="addBlock" style={{ background: "#fff" }}>
                                    <img width="100%" height="100%" className="otherImg" src={item.preview} alt="main product" />
                                    <div className="mainPhoto__icon">

                                        <div className="trashFullIcon" onClick={() => filterPhotoes(i + 1)} style={{ right: 12 }}>
                                            <TrashIcon />
                                        </div>
                                        <div className="trashFullIcon" style={{ right: 12 }} >
                                            <FullScreen />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="addBlock addBlock__input" onClick={handleClick}>

                                {/* hide input */}
                                <input
                                    type="file"
                                    accept="images/*"
                                    name="file uplaod"
                                    ref={fileInputHidden}
                                    onChange={handleChange}
                                    style={{ display: "none" }} />


                                <PlusIcon />
                                {productMainPhoto.length ? null
                                    : <span className='addText'>Главное фото</span>
                                }
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
                                    className="form-block__input" />
                            </div>

                            <div className="form-block form-block__textareaBlock">
                                <textarea
                                    name="description product"
                                    className="form-block__textarea"
                                    maxLength="490"
                                    placeholder="Введите подробное описание товара"
                                    onChange={funcWordLength}
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

                                <SelecterCatalogComponent placeholderText={"Выберите категорию"} />
                            </div>

                            <div className="form-block">
                                <div className="form-block__title">
                                    Подкатегория
                                </div>

                                <SubSelectorCatalogComponent placeholderText={"Выберите подкатегорию"} />
                            </div>
                        </form>
                    </div>

                    <div className="add-product_main__price">
                        <div className="price_headText">Цена</div>

                        <div className="form-block_price">
                            <div className="form-block_price__icon">
                                <CashIcon />
                            </div>
                            <input type="number" name="price" placeholder="Укажите цену" className="input-price" />
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
                                    <TickIconComponent tickValue={false} styleBox={" selectBox"} />
                                    <div className="textInfo">
                                        Скидка
                                    </div>
                                </div>

                                <div className="beginInfoProduct">
                                    <TickIconComponent tickValue={false} styleBox={" selectBox"} />
                                    <div className="textInfo">
                                        Рассрочка
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="add-product_main__productParameters">
                        <h4 className="titleText">Параметры товара</h4>
                        {!selectedValue
                            ? <>
                                <div className="subtext">Параметры товара будут отображаться в зависимости от категории</div>
                            </>
                            : <div className="parameters-block">
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

                                    <div className="iconAdd">
                                        <PlusIcon
                                            width="14"
                                            height="14"
                                            onClick={() => OpenModal({
                                                id: "colorModal",
                                                classNameIsActive: "activeModalFilter",
                                                topPosition: "50%",
                                                rightPosition: "auto",
                                                leftPosition: "50%",
                                                transform: "translate(-50%, -50%)"
                                            })} />
                                    </div>

                                    {/* <div className="colorList">
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
                                                rightPosition: "40%"
                                            })} />
                                    </div> */}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductComponent;