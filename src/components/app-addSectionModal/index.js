import { useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { HelpFormInputComponent } from "../app-shop";
import StatusFilterComponent from "../app-order/helpers/statusFilter";

import "./index.scss";

const objTextStatus = [
    { text1: "Товар №1" },
    { text1: "Товар №2" },
    { text1: "Товар №3" },
]

const AddSectionModalComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (
        <>
            <div className="addSectionModal">
                <p className="addSectionModal__headText">Создать раздел</p>

                <form className="form-infoSection">
                    <HelpFormInputComponent data={{
                        placeholder: "Введите название раздела",
                        inputType: "text",
                        inputName: "name section",
                        price: true,
                    }} />

                    <StatusFilterComponent textStatus={"Выберите товары"} objText={objTextStatus} id="productNumber" />
                </form>

                <div className="btns">
                    <button className="removeBtn" onClick={HideModal}>
                        <p className="btnText">
                            Создать
                        </p>
                    </button>

                    <button className="btns-block cancelBtn" onClick={HideModal}>Отмена</button>
                </div>
            </div>
            <div className="closeModal closeModal__small">
                <div className={`сlose close_true`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default AddSectionModalComponent;