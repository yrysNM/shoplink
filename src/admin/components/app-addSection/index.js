import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import ShopSelectComponent from "../app-shopSelect";

import { ReactComponent as PlusIcon } from "../../resources/icon/plusIcon.svg";
import { ReactComponent as TrashIcon } from "../../resources/icon/addProductsIcons/trash.svg";

import "./index.scss";


const testObj = [
    { value: "type" },
]

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const AddSectionComponent = () => {
    const [sections, setSections] = useState([]);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const items = reorder(sections, result.source.index, result.destination.index);
        setSections(items);
    };

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
                <ShopSelectComponent placeholderText={"Выберите раздел"} objItems={testObj} />

                <div className="addSection-icon" onClick={handleClickAddSection}>
                    <PlusIcon className="icon" />
                </div>
            </div>

            {sections.length > 0 ?

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div  {...provided.droppableProps}
                                ref={provided.innerRef}>

                                {sections.map((val, i) => (
                                    <Draggable
                                        key={val.id}
                                        draggableId={String(val.id)}
                                        index={i}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                className="addSection"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <ShopSelectComponent placeholderText={"Выберите раздел"} objItems={testObj} />

                                                <div className="addSection-icon" onClick={() => handleClickRemoveSection(val.id)}>
                                                    <TrashIcon className="icon trashSection" />
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                :
                null
            }
        </>
    );
}


export default AddSectionComponent;