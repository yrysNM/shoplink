import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [isActiveModal, setIsActiveModal] = useState({
        classNameIsActive: "",
        topPosition: 0,
        rightPosition: 0,
    });
    const [productMainPhoto, setProductMainPhoto] = useState([]);


    function OpenModal(objActive) {
        setIsActiveModal(objActive);
    }

    function HideModal() {
        setIsActiveModal(isActiveModal => ({
            classNameIsActive: "",
            topPosition: isActiveModal.topPosition,
            rightPosition: isActiveModal.rightPosition
        }));
    }

    function setMainPhoto(img) {
        setProductMainPhoto(productMainPhoto => [...productMainPhoto, img]);
    }

    function filterMainPhoto(index) {
        const obj = productMainPhoto.filter((_, i) => i !== index);
        setProductMainPhoto(obj);
    }

    return (
        <DataContext.Provider value={{
            isActiveModal,
            productMainPhoto,
            OpenModal,
            HideModal,
            setMainPhoto,
            filterMainPhoto
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;