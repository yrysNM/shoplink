import { Link } from "react-router-dom";
import SelecterCatalogComponent from "../app-selectCatalog";
import { ReactComponent as LocationArrow } from "../../resources/icon/orderIcons/locationArrow.svg";
import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";
import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";

import "./index.scss";

const AddProductComponent = () => {
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
                            <div className="inStockIcon">
                                <TickIcon width="15" height="12" />
                            </div>
                        </div>

                        <div className="add-product_head-firstBlock add-product_head__btns">
                            <button className="preview">Предосмотр</button>
                            <button className="btn save">Сохранить</button>
                        </div>
                    </div>
                </div>

                <div className="add-product_main">
                    <div className="add-product_main__photo">
                        <h4 className="photoProduct">Фотографии товара</h4>


                        <div className="addBlock">
                            <PlusIcon />

                            <span className='addText'>Главное фото</span>
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
                                >

                                </textarea>
                                <span className="wordWarning">
                                    0/490 символов
                                </span>
                            </div>

                            <div className="form-block">
                                <div className="form-block__title">
                                    Категория товара
                                </div>

                                <SelecterCatalogComponent placeholderText={"Выберите категорию"} />
                            </div>
                        </form>
                    </div>

                    <div className="add-product_main__price">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductComponent;