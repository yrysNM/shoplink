import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

import GoToTop from "../../utils/GoToTop";
import PrivateRoutes from "../../utils/PrivateRoutes";
import AppHeaderComponent from "../app-header";
import SideBarComponent from "../app-sideBar";
import Modal from "../ModalWindow";
import { DataContext } from "../../context/DataContext";
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
    UserPage,
    UserAllCategoryPage,
    UserCategoryPage,
    UserFavoritePage,
    UserBasketPage,
    UserCheckoutPage,
    UserProductDetailedPage
} from "../page";
import OrderLayoutComponent from "../app-orderLayout";
import AddProductComponent from "../app-addProduct";
import FilterModalComponent from "../app-filterModal";
import WarningsRemoveModalComponent from "../app-warningRemove";
import ChooseColordModalConponent from "../app-chooseColorsModal";
import EditCatalogComponent from "../app-editCatalog";
import FullScreenImgComponent from "../app-fullScreenImg";
import LogOutModalComponent from "../app-logOutModal";
import BannerImgModalComponent from "../app-bannerImgModal";
import NotificationModalComponent from "../app-notificatioModal";
import UserFooterComponent from "../app-userFooter";
import UserMenuFilterComponent from "../app-userMenuFilter";
import UserWarningsRemoveModalComponent from "../app-userWarningRemove";
import UserOrderModalComponent from "../app-userOrderModal";
import GenerateQrModalComponent from "../app-qrGenerateModal";
import AddSectionModalComponent from "../app-addSectionModal";


const App = () => {
    const { isActiveModal } = useContext(DataContext);
    return (
        <>
            <Router>
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

                            <Route path="user/preview" element={
                                <React.Fragment>
                                    <Outlet />
                                    <UserFooterComponent />
                                    <GoToTop />
                                </React.Fragment>
                            }>
                                <Route path="main" element={<UserPage />} />
                                <Route path="allCategory" element={<UserAllCategoryPage />} />
                                <Route path="category/:categoryName" element={<UserCategoryPage />} />
                                <Route path="favorite" element={<UserFavoritePage />} />
                                <Route path="basket" element={<UserBasketPage />} />
                                <Route path="basket/checkout" element={<UserCheckoutPage />} />
                                <Route path="product/:productId" element={<UserProductDetailedPage />} />
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
            </Router>

        </>
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
        case "userFilterModal":
            return <UserMenuFilterComponent />
        case "userRemoveModal":
            return <UserWarningsRemoveModalComponent />
        case "userOrderModal":
            return <UserOrderModalComponent />
        case "generateQrModal":
            return <GenerateQrModalComponent />
        case "addSectionModal":
            return <AddSectionModalComponent />
        default: return null;
    }
}

export default App;