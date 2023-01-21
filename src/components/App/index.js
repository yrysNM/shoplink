import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

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
    UserBasketPage
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

                            <Route element={
                                <React.Fragment>
                                    <Outlet />
                                    <UserFooterComponent />
                                </React.Fragment>
                            }>
                                <Route path="user/preview" element={<UserPage />} />
                                <Route path="user/preview/allCategory" element={<UserAllCategoryPage />} />
                                <Route path="user/preview/:categoryName" element={<UserCategoryPage />} />
                                <Route path="user/preview/favorite" element={<UserFavoritePage />} />
                                <Route path="user/preview/basket" element={<UserBasketPage />} />
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
                    {isActiveModal.id === "filterModal" && <FilterModalComponent />}
                    {isActiveModal.id === "warningRemoveModal" && <WarningsRemoveModalComponent catalogNumber={isActiveModal.catalogNumber} />}
                    {isActiveModal.id === "colorModal" && <ChooseColordModalConponent />}
                    {isActiveModal.id === "fullScreenModal" && <FullScreenImgComponent imgUrl={isActiveModal.imgUrl} />}
                    {isActiveModal.id === "logOutModal" && <LogOutModalComponent />}
                    {isActiveModal.id === "bannerImgModal" && <BannerImgModalComponent banerImg={isActiveModal.banerImg} />}
                    {isActiveModal.id === "notificationModal" && <NotificationModalComponent />}
                    {isActiveModal.id === "userFilterModal" && <UserMenuFilterComponent />}
                    {isActiveModal.id === "userRemoveModal" && <UserWarningsRemoveModalComponent />}
                </Modal>
            </Router>

        </>
    );
}

export default App;