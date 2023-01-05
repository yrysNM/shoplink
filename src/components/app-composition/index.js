import compositionImg1 from "../../resources/img/compositionImg.png";
import compositionImg2 from "../../resources/img/compositionImg2.png";

import "./index.scss";

const CompositionComponent = ({ active = "" }) => {

    return (
        <>
            <div className="composition">
                <div className="composition-wrapper">

                    <div className="composition-wrapper__img">
                        <img src={compositionImg1} alt="com img" />
                    </div>
                    <div className="composition-wrapper__table">
                        <table className="sub-table">
                            <thead className="sub-thead">

                                <tr>
                                    <th className="sub-th">Название</th>
                                    <th className="sub-th">Номер товара</th>
                                    <th className="sub-th">Категория</th>
                                    <th className="sub-th">Размер</th>
                                    <th className="sub-th">Цвет</th>
                                    <th className="sub-th">Кол-во</th>
                                    <th className="sub-th">Цена</th>
                                </tr>
                            </thead>
                            <tbody className="sub-tbody">
                                <tr>
                                    <td className="sub-td">Юбка плиссе</td>
                                    <td className="sub-td">#0560</td>
                                    <td className="sub-td">Женщинам, футболки</td>
                                    <td className="sub-td">S</td>
                                    <td className="sub-td"><span className="colorProduct"></span></td>
                                    <td className="sub-td">1</td>
                                    <td className="sub-td">5 990 ₸</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="composition-wrapper">
                    <div className="composition-wrapper__img">
                        <img src={compositionImg2} alt="com img" />
                    </div>
                    <div className="composition-wrapper__table">
                        <table className="sub-table">
                            <thead className="sub-thead">

                                <tr>
                                    <th className="sub-th">Название</th>
                                    <th className="sub-th">Номер товара</th>
                                    <th className="sub-th">Категория</th>
                                    <th className="sub-th">Размер</th>
                                    <th className="sub-th">Цвет</th>
                                    <th className="sub-th">Кол-во</th>
                                    <th className="sub-th">Цена</th>
                                </tr>
                            </thead>
                            <tbody className="sub-tbody">
                                <tr>
                                    <td className="sub-td" style={{ width: "197px" }}>Платье с бархатной драпировкой</td>
                                    <td className="sub-td" style={{ width: "184px" }}>#0345</td>
                                    <td className="sub-td" style={{ width: "329px" }}>Женщинам, футболки</td>
                                    <td className="sub-td" style={{ width: "96px" }}>S</td>
                                    <td className="sub-td" style={{ width: "63px" }}><span className="colorProduct" style={{ backgroundColor: "#252728" }}></span></td>
                                    <td className="sub-td" style={{ width: "87px" }}>1</td>
                                    <td className="sub-td" style={{ width: "110px" }}>12 990 ₸</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CompositionComponent;