import { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import MultiRangeSlideComponent from "../app-multiRange";

import "./index.scss";

const UserMenuFilterComponent = () => {
    const { HideModal } = useContext(DataContext);

    return (
        <div className="userFilterModal">
            <div className="userFilter">
                <div className="userFilter__titleText">Фильтры</div>

                <div className="userFilterBlock">
                    <span className="userFilterBlock__headText" style={{ marginBottom: 20, display: "block" }}>
                        Цена
                    </span>
                    <MultiRangeSlideComponent
                        min={1500}
                        max={100000}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
                </div>

                <div className="userFilterBlock" style={{ marginTop: 80 }}>
                    <span className="userFilterBlock__headText">
                        Размер
                    </span>
                    <div className="sizeBlocks">
                        <div className="boxSize">
                            32
                        </div>
                        <div className="boxSize boxSize-active">
                            34
                        </div>
                        <div className="boxSize boxSize-active">
                            36
                        </div>
                        <div className="boxSize boxSize-active">
                            38
                        </div>
                        <div className="boxSize boxSize-active">
                            40
                        </div>
                        <div className="boxSize">
                            42
                        </div>
                    </div>
                </div>

                <div className="userFilterBlock" style={{ marginTop: 20 }}>
                    <span className="userFilterBlock__headText">
                        Цвет
                    </span>

                    <div className="colorBlocks">
                        <div className="boxColor boxColor-active">
                            Белый
                        </div>
                        <div className="boxColor boxColor-active">
                            Черный
                        </div>
                        <div className="boxColor">
                            Серый
                        </div>
                        <div className="boxColor">
                            Синий
                        </div>
                        <div className="boxColor">
                            Желтый
                        </div>
                        <div className="boxColor">
                            Зеленый
                        </div>
                        <div className="boxColor">
                            Красный
                        </div>
                        <div className="boxColor">
                            Розовый
                        </div>
                        <div className="boxColor">
                            Фиолетовый
                        </div>
                        <div className="boxColor">
                            Бежевый
                        </div>
                    </div>
                </div>

                <button className="applyBtn">
                    Применить
                </button>
            </div>
            <div className="closeModal">
                <div className={`сlose close_true userClose`} onClick={HideModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default UserMenuFilterComponent;