import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Outlet } from "react-router-dom";
import {
    CategoryPage,
    MainPage,
    SubCategoryPage,
    DetailPage,
    OrderPage,
    CartPage,
} from "../pages";
import { Menu } from "../components/Menu";
import { Filter } from "../components/Filter";
import { ScrollToTop } from "../components/ScrollToTop";
import { Alert } from "../components/Alert";

import "../../App.scss";

const AppUser = () => {
    const isMenuOpen = useSelector((state) => state.menu.isOpen);
    const isFilterOpen = useSelector((state) => state.filter.isOpen);
    const isAlertOpen = useSelector((state) => state.alert.isOpen);

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="user/preview" element={
                    <div className="containerUser">
                        <Outlet />
                    </div>
                }>
                    <Route path="main" element={<MainPage />} />
                    <Route path="category" element={<CategoryPage />} />
                    <Route path="category/:title" element={<SubCategoryPage />} />
                    <Route path="detail/:id" element={<DetailPage />} />
                    <Route path="order" element={<OrderPage />} />
                    <Route path="cart" element={<CartPage />} />
                </Route>
            </Routes>
            {isAlertOpen && <Alert />}
            {isMenuOpen && <Menu />}
            {isFilterOpen && <Filter />}
        </>
    );
};

export { AppUser };
