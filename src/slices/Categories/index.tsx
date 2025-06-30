import { FC } from "react";
import { Default, ListShort } from "./variants";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type CategoriesProps = SliceComponentProps<Content.CategoriesSlice>;

const Categories: FC<CategoriesProps> = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    "default": Default,
    "listShort": ListShort,
  };

  const TypeOfVariants:any = typeOfComponents[slice?.variation] || "default";

  return <>
  {/* <pre>VARIACION = {JSON.stringify(slice?.variation, null, 2 )}</pre> */}
    <TypeOfVariants slice ={slice} />
  {/* <div className="">
  </div> */}
  </>
};

export default Categories;