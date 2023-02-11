import { Header } from "../../Header";
import { MenuSideBar } from "../../MenuSideBar";

const DefaultPages = ({ children }) => {
  return (
    <>
      <MenuSideBar />
      <Header>
        {children}
      </Header>
    </>
  );
}

export { DefaultPages };