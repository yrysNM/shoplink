import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AppHeaderComponent from "../app-header";
import SideBarComponent from "../app-sideBar";
import Modal from "../ModalWindow";
import { DataContext } from "../../context/DataContext";
import { MainPageComponent, CatalogPageComponent, OrderPageComponent, ShopPageComponent } from "../page";
import OrderLayoutComponent from "../app-orderLayout";
import AddProductComponent from "../app-addProduct";
import FilterModalComponent from "../app-filterModal";
import WarningsRemoveModalComponent from "../app-warningRemove";
import ChooseColordModalConponent from "../app-chooseColorsModal";
import EditCatalogComponent from "../app-editCatalog";

const App = () => {
    const { isActiveModal } = useContext(DataContext);
    return (
        <>
            <Router>
                <div className="app">
                    <AppHeaderComponent />
                    <SideBarComponent />
                    <main className="main">

                        <Routes>
                            <Route path="/" element={
                                <MainPageComponent />
                            } />
                            <Route path="catalog" element={
                                <CatalogPageComponent />
                            } />
                            <Route path="order" element={
                                <OrderPageComponent />
                            } />
                            <Route path="order/:numberOrder" element={<OrderLayoutComponent />} />
                            <Route path="catalog/add" element={<AddProductComponent />} />
                            <Route path="catalog/:catalogNumber" element={<EditCatalogComponent />} />
                            <Route path="shop" element={
                                <ShopPageComponent />
                            } />
                        </Routes>
                    </main>
                </div>
            </Router>

            <Modal>
                {isActiveModal.id === "filterModal" && <FilterModalComponent />}
                {isActiveModal.id === "warningRemoveModal" && <WarningsRemoveModalComponent catalogNumber={isActiveModal.catalogNumber} />}
                {isActiveModal.id === "colorModal" && <ChooseColordModalConponent />}
            </Modal>
        </>
    );
}

export default App;