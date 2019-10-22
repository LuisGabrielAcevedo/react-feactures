import { DynamicTableTextComponent } from "../../../../lgx-react-components/index";

const storeHeaders = [
  {
    label: "Nombre",
    key: "name",
    component: DynamicTableTextComponent
  },
  {
    label: "Empresa",
    key: "company.name",
    component: DynamicTableTextComponent
  }
];

export default storeHeaders;
