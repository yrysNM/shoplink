import { useContext } from "react"

import { DataContext } from "../../context/DataContext"

import warningImg from "../../resources/img/removeWarning2.png";

import "./index.scss";

const UserWarningsRemoveModalComponent = ({ catalogNumber }) => {
    const { HideModal } = useContext(DataContext);

    return (
        <>
            <div className="warningsRemove">
                <img src={warningImg} alt="warningremove img" className="imgWarningRemove" />
                <p className="warningsText">
                    Товар будет удален из корзины
                </p>

                <div className="btns">
                    <button className="btns-block cancelBtn" onClick={HideModal}>В избранное</button>
                    <button className="removeBtn" onClick={HideModal}>
                        <p className="btnText">
                            Удалить
                        </p>
                    </button>
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

export default UserWarningsRemoveModalComponent;