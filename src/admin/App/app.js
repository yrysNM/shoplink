import React, { useContext } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import PrivateRoutes from "../../utils/PrivateRoutes";
import AppHeaderComponent from "../components/app-header";
import SideBarComponent from "../components/app-sideBar";
import Modal from "../components/ModalWindow";
import { DataContext } from "../context/DataContext";
import {
    MainPageComponent,
    CatalogPageComponent,
    OrderPageComponent,
    ShopPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterNumberConfirmationPage,
    RegisterStoreDataPage,
    RegisterPickPassWordPage,
} from "../components/page";
import OrderLayoutComponent from "../components/app-orderLayout";
import AddProductComponent from "../components/app-addProduct";
import FilterModalComponent from "../components/app-filterModal";
import WarningsRemoveModalComponent from "../components/app-warningRemove";
import ChooseColordModalConponent from "../components/app-chooseColorsModal";
import EditCatalogComponent from "../components/app-editCatalog";
import FullScreenImgComponent from "../components/app-fullScreenImg";
import LogOutModalComponent from "../components/app-logOutModal";
import BannerImgModalComponent from "../components/app-bannerImgModal";
import NotificationModalComponent from "../components/app-notificatioModal";
import GenerateQrModalComponent from "../components/app-qrGenerateModal";
import AddSectionModalComponent from "../components/app-addSectionModal";


const AppAdmin = () => {
    const { isActiveModal } = useContext(DataContext);
    return (
        <div className="rootAdmin ">
            <Routes>
                <React.Fragment>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={
                            <div className="app">
                                <AppHeaderComponent />
                                <SideBarComponent />
                                <main className="main">
                                    <Outlet />
                                </main>
                            </div>
                        }>
                            <Route path="/" element={<MainPageComponent />} />
                            <Route path="catalog" element={<CatalogPageComponent />} />
                            <Route path="order" element={<OrderPageComponent />} />
                            <Route path="shop" element={<ShopPageComponent />} />

                            <Route path="order/:numberOrder" element={<OrderLayoutComponent />} />
                            <Route path="catalog/add" element={<AddProductComponent />} />
                            <Route path="catalog/:catalogNumber" element={<EditCatalogComponent />} />
                        </Route>
                    </Route>
                </React.Fragment>

                <Route path="login" element={<LoginPageComponent />} />
                <Route path="registr" element={
                    <div className="loginRegister">
                        <div className="loginRegister__wrapper">
                            <div className="loginRegister__wrapper-block">
                                <div className="loginRegister__logo">
                                    ShopLink
                                </div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                }>
                    <Route path="step1" element={<RegisterPageComponent />} />
                    <Route path="step2" element={<RegisterNumberConfirmationPage />} />
                    <Route path="step3" element={<RegisterStoreDataPage />} />
                    <Route path="step4" element={<RegisterPickPassWordPage />} />
                </Route>
            </Routes>
            <Modal>
                {ModalViewerComponent(isActiveModal)}
            </Modal>

        </div>
    );
}

const ModalViewerComponent = (value) => {
    switch (value.id) {
        case "filterModal":
            return <FilterModalComponent />;
        case "warningRemoveModal":
            return <WarningsRemoveModalComponent catalogNumber={value.catalogNumber} />
        case "colorModal":
            return <ChooseColordModalConponent />
        case "fullScreenModal":
            return <FullScreenImgComponent imgUrl={value.imgUrl} />
        case "logOutModal":
            return <LogOutModalComponent />
        case "bannerImgModal":
            return <BannerImgModalComponent banerImg={value.banerImg} />
        case "notificationModal":
            return <NotificationModalComponent />
        case "generateQrModal":
            return <GenerateQrModalComponent />
        case "addSectionModal":
            return <AddSectionModalComponent />
        default: return null;
    }
}

export { AppAdmin };