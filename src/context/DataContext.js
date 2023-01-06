import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
    const [statusOrder, setStatusOrder] = useState(null);

    function SetStatusOrder(statusValue) {
        setStatusOrder(statusValue);
    }

    return (
        <DataContext.Provider value={{
            statusOrder,
            SetStatusOrder
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;