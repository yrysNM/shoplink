import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataContextProvider from "../../context/DataContext";
import AppHeaderComponent from "../app-header";
import SideBarComponent from "../app-sideBar";
import { MainPageComponent, CatalogPageComponent, OrderPageComponent, ShopPageComponent } from "../page";

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
                            <Route path="/catalog" element={
                                <CatalogPageComponent />
                            } />
                            <Route path="/order" element={
                                <OrderPageComponent />
                            } />
                            <Route path="/shop" element={
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