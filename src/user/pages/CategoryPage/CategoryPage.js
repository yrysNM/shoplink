import React from "react";

import { GridCards } from "../../components/GridCards";

import { DefaultLayout } from "../../../layouts/default";
import { categoryData } from "./mock";

const CategoryPage = () => {
  return (
    <DefaultLayout title={"Все категории"}>
      <GridCards render={categoryData} />
    </DefaultLayout>
  );
};

export { CategoryPage };
