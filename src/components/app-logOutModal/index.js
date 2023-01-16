import { useContext } from "react"

import { DataContext } from "../../context/DataContext"

import "./index.scss";

const LogOutModalComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (
        <>
            <div className="logOut">
                <p className="logOut__text">
                    Вы уверены, что хотите выйти из профиля?
                </p>

                <div className="btns">
                    <button className="btns-block cancelBtn" onClick={HideModal}>Отмена</button>
                    <button className="btns-block removeBtn" onClick={HideModal}>Да, выйти</button>
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

export default LogOutModalComponent;