import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [isActiveModal, setIsActiveModal] = useState({
        classNameIsActive: "",
        topPosition: 0,
        rightPosition: 0,
    });
    const [productMainPhoto, setProductMainPhoto] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [hamburgerActive, setHamburgerActive] = useState(false);

    function ActiveHamburger(e) {
        e.stopPropagation();
        setHamburgerActive(hamburgerActive => !hamburgerActive);
    }

    function SetHamburgerValue(val) {
        setHamburgerActive(val);
    }

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

    function SetMainPhoto(img) {
        setProductMainPhoto(productMainPhoto => [...productMainPhoto, img]);
    }

    function FilterMainPhoto(index) {
        const obj = productMainPhoto.filter((_, i) => i !== index);
        setProductMainPhoto(obj);
    }

    function SetValueSelected(option) {
        setSelectedValue(option);
    }

    return (
        <DataContext.Provider value={{
            isActiveModal,
            productMainPhoto,
            selectedValue,
            hamburgerActive,
            ActiveHamburger,
            OpenModal,
            HideModal,
            SetValueSelected,
            SetMainPhoto,
            FilterMainPhoto,
            SetHamburgerValue
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;