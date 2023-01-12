import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [productMainPhoto, setProductMainPhoto] = useState([]);


    function OpenModal() {
        setIsActiveModal(true);
    }

    function HideModal() {
        setIsActiveModal(false);
    }

    function setMainPhoto(img) {
        setProductMainPhoto(productMainPhoto => [...productMainPhoto, img]);
    }

    return (
        <DataContext.Provider value={{
            isActiveModal,
            productMainPhoto,
            OpenModal,
            HideModal,
            setMainPhoto
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;