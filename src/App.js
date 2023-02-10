import React from "react";

import DataContextProvider from "./admin/context/DataContext";
import { AppUser } from "./user/App";
import { AppAdmin } from "./admin/App";

import "./App.scss";

const App = () => {

  return (
    <>
      <AppUser />
      <DataContextProvider>
        <AppAdmin />
      </DataContextProvider>
    </>
  );
};

export { App };
