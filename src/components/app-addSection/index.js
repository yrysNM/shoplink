import { useState } from "react";

import ShopSelectComponent from "../app-shopSelect";

import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";
import { ReactComponent as TrashIcon } from "../../resources/icon/addProductsIcons/trash.svg";

import "./index.scss";

const AddSectionComponent = () => {
    const [sections, setSections] = useState([]);


    const handleClickAddSection = () => {
        // console.log(sections[sections.length - 1].id);
        setSections(sections => [...sections, { id: sections[sections.length - 1]?.id ? sections[sections.length - 1]?.id + 1 : 0 + 1 }]);
    }

    const handleClickRemoveSection = (id) => {
        // console.log(id);
        const filterSection = sections.filter(val => val.id !== id);
        setSections(filterSection);
    }

    return (
        <>
            <div className="addSection">
                <ShopSelectComponent placeholderText={"Выберите раздел"} />

                <div className="addSection-icon" onClick={handleClickAddSection}>
                    <PlusIcon className="icon" />
                </div>
            </div>

            {sections.map(val => (
                <div className="addSection" key={val.id}>
                    <ShopSelectComponent placeholderText={"Выберите раздел"} />

                    <div className="addSection-icon" onClick={() => handleClickRemoveSection(val.id)}>
                        <TrashIcon className="icon trashSection" />
                    </div>
                </div>
            ))}
        </>
    );
}


export default AddSectionComponent;