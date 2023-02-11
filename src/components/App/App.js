import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from "../../utils/ScrollToTop";
import { MainPage } from "../../page/MainPage/MainPage";

import "./app.scss";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export { App };