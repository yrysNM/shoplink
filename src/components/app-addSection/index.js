import { useState } from "react";

import ShopSelectComponent from "../app-shopSelect";

import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";

import "./index.scss";

const AddSectionComponent = () => {
    const [sections, setSections] = useState([]);


    return (
        <>
            <div className="addSection">
                <ShopSelectComponent placeholderText={"Выберите раздел"} />

                <div className="addSection-icon">
                    <PlusIcon className="icon" />
                </div>
            </div>
        </>
    );
}


export default AddSectionComponent;