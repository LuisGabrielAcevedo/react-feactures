import { DynamicTableTextComponent } from "../../../../lgx-react-components/index";

const productCategoryHeaders = [
  {
    label: "Empresa",
    key: "company.name",
    component: DynamicTableTextComponent
  },
  {
    label: "Nombre",
    key: "name",
    component: DynamicTableTextComponent
  }
];

export default productCategoryHeaders;
