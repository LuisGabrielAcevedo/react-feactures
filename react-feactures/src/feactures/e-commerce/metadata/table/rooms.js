import { DynamicTableTextComponent } from "../../../../lgx-react-components/index";

const roomHeaders = [
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

export default roomHeaders;
