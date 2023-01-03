import { useRef, useState, useEffect } from "react";
import compositionImg1 from "../../resources/img/compositionImg.png";
import compositionImg2 from "../../resources/img/compositionImg2.png";

import "./index.scss";

const CompositionComponent = ({ active = "" }) => {
    const compositionBlock = useRef(null);
    const [lengthChildren, setLengthChildren] = useState(0);

    useEffect(() => {
        setLengthChildren(Object.entries(compositionBlock.current.children).length);
    }, []);

    return (

        <div className={`composition composition-${active}`} ref={compositionBlock} style={{ bottom: lengthChildren * -80 }}>
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
                                <td className="sub-td" style={{ border: "none" }}>Юбка плиссе</td>
                                <td className="sub-td" style={{ border: "none" }}>#0560</td>
                                <td className="sub-td" style={{ border: "none" }}>Женщинам, футболки</td>
                                <td className="sub-td" style={{ border: "none" }}>S</td>
                                <td className="sub-td" style={{ border: "none" }}><span className="colorProduct"></span></td>
                                <td className="sub-td" style={{ border: "none" }}>1</td>
                                <td className="sub-td" style={{ border: "none" }}>5 990 ₸</td>
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
    );
}

export default CompositionComponent;