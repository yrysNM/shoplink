import { Link } from "react-router-dom";
import { ReactComponent as LocationArrow } from "../../resources/icon/orderIcons/locationArrow.svg";
import { ReactComponent as TickIcon } from "../../resources/icon/tickIcon.svg";

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

                </div>
            </div>
        </div>
    );
}

export default AddProductComponent;