import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [isActiveModal, setIsActiveModal] = useState(false);

    function OpenModal() {
        setIsActiveModal(true);
    }

    function HideModal() {
        setIsActiveModal(false);
    }

    return (
        <DataContext.Provider value={{
            isActiveModal,
            OpenModal,
            HideModal
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;