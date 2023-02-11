import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import { CustomButton } from "../CustomButton/CustomButton";
import { mockMotification } from "./data/mockNotification";
import { Modal } from "../Modal/Modal";
import { DefaultModal } from "../layouts/defaoutElements/defaultModal";

import globalInt from "../../resources/icon/globalInt.svg";
import exitIcon from "../../resources/icon/exit.svg";
import bellNotificationIcon from "../../resources/icon/bellNotificationIcon.svg";

import "./header.scss";

const Header = () => {
  const [isModalNotificationOpen, setIsOpenNotificationModal] = useState(false);
  const [isModalLogOutModal, setIsModalLogOutModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="header-logoBlock">
          <span className="logoText title-400" style={{ color: "#fff" }}>ShopLink</span>
        </div>
        <div className="flCn header_wrapper">
          <div className="flCn">
            <img src={globalInt} alt="global icon" />

            <span className="linkSite title-400">Перейти на сайт </span>
          </div>

          <div className="header-nav">
            <div className="header-nav-notificationExit flCn">
              <img src={bellNotificationIcon} alt="notification icon" className="iconCursor" onClick={() => {
                setIsOpenNotificationModal(true);
              }} />
              <span className="circlered" />
              <img src={exitIcon} alt="exit icon" className="iconCursor" onClick={() => {
                setIsModalLogOutModal(true);
              }} />
            </div>
          </div>
        </div>
      </header>
      {isModalNotificationOpen &&
        <Modal onClose={() => setIsOpenNotificationModal(false)} classPopup={"notificationPosClosePopup"}>
          <div className="notificationBlock">
            <div className="customArrowUp" />
            <p className="title-500 notificationText">
              Уведомления
            </p>
            <div className="notificationBlock-list flCn">
              {mockMotification.map((item, i) => (
                <div
                  key={i} className="notificationBlock-list_block flCn">
                  <div>
                    <p className="dateNotification title-400">{item.date}</p>
                    <p className="descrNotification title-400">{item.text}</p>
                    <Link to={item.url} className="notificationLink title-400">
                      Открыть
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      }
      {
        isModalLogOutModal &&
        <Modal>
          <DefaultModal onClose={() => setIsModalLogOutModal(false)}>
            <div className="logOut">
              <p className="logOut_text title-400">
                Вы уверены, что хотите выйти из профиля?
              </p>

              <div className="modal-bottomBtn flCn">
                <CustomButton
                  text="Отмена"
                  clazz="secondary"
                  onPressButton={() => setIsModalLogOutModal(false)} />

                <CustomButton
                  text="Да, выйти"
                  clazz="primary"
                  onPressButton={() => {
                    navigate("/login")
                    setIsModalLogOutModal(false)
                  }}>
                  <p className="btnText">
                    Да, выйти
                  </p>
                </CustomButton>

              </div>
            </div>
          </DefaultModal>
        </Modal>
      }
    </>
  );


}

export { Header };