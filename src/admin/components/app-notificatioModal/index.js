
import "./index.scss";


const NotificationModalComponent = () => {
    return (
        <div className="notificationBlock">
            <div className="arrowUp" />
            <p className="notificationBlock__headText">
                Уведомления
            </p>
            <div className="notificationBlock__list">
                <span className="circleRoadMap" />
                <div className="infoNotification">
                    <p className="dateInfo">16/01/2022</p>
                    <p className="descr">К вам поступил новый заказ</p>
                    <a href="@" className="linkNotification">Открыть</a>
                </div>
            </div>
            <div className="notificationBlock__list">
                <span className="circleRoadMap" />
                <div className="infoNotification">
                    <p className="dateInfo">16/01/2022</p>
                    <p className="descr">К вам поступил новый заказ</p>
                    <a href="@" className="linkNotification">Открыть</a>
                </div>
            </div>
            <div className="notificationBlock__list">
                <span className="circleRoadMap" />
                <div className="infoNotification">
                    <p className="dateInfo">16/01/2022</p>
                    <p className="descr">К вам поступил новый заказ</p>
                    <a href="@" className="linkNotification">Открыть</a>
                </div>
            </div>
        </div>
    );
}

export default NotificationModalComponent;