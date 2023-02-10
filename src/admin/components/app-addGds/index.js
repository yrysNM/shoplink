import { Link } from "react-router-dom";
import "./index.scss";


const AddGdsCompoenent = () => {
    return (
        <div className="add-gds">
            <div className="container">
                <div className="add-gds__wrapper">
                    <div className="titleblock">

                        <h2 className="text text-welcome"> Добро пожаловать, Shopname</h2>

                        <span className="text text-subText">Здесь вы можете пополнять и редактировать каталог, мониторить заказы и управлять данными магазина.</span>
                    </div>
                    <div className="btn">
                        <Link to={"z/catalog/add"}>
                            <button className="addGds">
                                Добавить товар
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddGdsCompoenent;