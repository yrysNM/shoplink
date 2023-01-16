import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoutes from "../../utils/PrivateRoutes";
import AppHeaderComponent from "../app-header";
import SideBarComponent from "../app-sideBar";
import Modal from "../ModalWindow";
import { DataContext } from "../../context/DataContext";
import { MainPageComponent, CatalogPageComponent, OrderPageComponent, ShopPageComponent, LoginPageComponent } from "../page";
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
                </Routes>
            </Router>

            <Modal>
                {isActiveModal.id === "filterModal" && <FilterModalComponent />}
                {isActiveModal.id === "warningRemoveModal" && <WarningsRemoveModalComponent catalogNumber={isActiveModal.catalogNumber} />}
                {isActiveModal.id === "colorModal" && <ChooseColordModalConponent />}
                {isActiveModal.id === "fullScreenModal" && <FullScreenImgComponent imgUrl={isActiveModal.imgUrl} />}
                {isActiveModal.id === "logOutModal" && <LogOutModalComponent />}
                {isActiveModal.id === "bannerImgModal" && <BannerImgModalComponent banerImg={isActiveModal.banerImg} />}
                {isActiveModal.id === "notificationModal" && <NotificationModalComponent />}
            </Modal>
        </>
    );
}

export default App;