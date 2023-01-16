import { useContext } from "react"

import { DataContext } from "../../context/DataContext"

import { ReactComponent as TrashIcon } from "../../resources/icon/addProductsIcons/trash.svg";
import { ReactComponent as FullScreen } from "../../resources/icon/addProductsIcons/fullScreen.svg";
import { ReactComponent as InfoIcon } from "../../resources/icon/shopDataIcons/ic_info.svg";
import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";

import "./index.scss";

const BannerImgModalComponent = ({ banerImg }) => {
    const { HideModal } = useContext(DataContext);

    return (
        <>
            <div className="bannerImgModal">
                <p className="bannerImgModal__headText">
                    Все баннера
                </p>

                <p className="subText bannerImgModal__subText">
                    Загрузите фотографии для баннеров на главной странице сайта
                </p>


                <div className="banner-block bannerImgModal__wrapper">
                    {
                        banerImg.map((item, i) => (
                            <div key={item.preview} className="banerImgModalBlock">

                                <img className="banerImg__img" src={item.preview} alt="barner" />
                                <div className="banerImg__icon">

                                    <div className="trashFullIcon" style={{ right: 12 }}>
                                        <TrashIcon />
                                    </div>
                                    <div className="trashFullIcon" style={{ right: 12 }}    >
                                        <FullScreen />
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="banner-setup">

                        <PlusIcon style={{ width: 24, height: 24 }} />
                        <p className="text-add" style={{ marginTop: 16, marginLeft: 0 }}>Добавить</p>
                    </div>
                </div>

                <div className="bannerImgModal__bottom">
                    <div className="btnblock">

                        <button type="submit" className="btn submit">Cохранить</button>
                    </div>
                    <div className="bannerSizeInfo">
                        <InfoIcon />
                        <span className="banner-warning">Размеры баннеров - 1280px х 900px  </span>
                    </div>
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


export default BannerImgModalComponent;