import React from "react";

import { Footer } from "../user/components/Footer";
import { Header } from "../user/components/Header";

const DefaultLayout = ({ title, showBackIcon = false, children }) => {
  return (
    <React.Fragment>
      <Header title={title} showBackIcon={showBackIcon} />
      <main className="main-wrapper">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export { DefaultLayout };
