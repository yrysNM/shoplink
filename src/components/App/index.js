import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataContextProvider from "../../context/DataContext";
import AppHeaderComponent from "../app-header";
import SideBarComponent from "../app-sideBar";
import { MainPageComponent, CatalogPageComponent, OrderPageComponent, ShopPageComponent } from "../page";
import OrderLayoutComponent from "../app-orderLayout";

const App = () => {
    return (
        <DataContextProvider>
            <Router>
                <div className="app">
                    <AppHeaderComponent />
                    <SideBarComponent />
                    <main className="main">

                        <Routes>
                            <Route path="/" element={
                                <MainPageComponent />
                            } />
                            <Route path="catalogs" element={
                                <CatalogPageComponent />
                            } />
                            <Route path="orders" element={
                                <OrderPageComponent />
                            } />
                            <Route path="orders/:numberOrder" element={<OrderLayoutComponent />} />
                            <Route path="shop" element={
                                <ShopPageComponent />
                            } />
                        </Routes>
                    </main>
                </div>
            </Router>
        </DataContextProvider>
    );
}

export default App;