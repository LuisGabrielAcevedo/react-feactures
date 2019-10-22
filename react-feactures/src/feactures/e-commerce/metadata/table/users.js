import {
  DynamicTableTextComponent,
  DynamicTableImageComponent
} from "../../../../lgx-react-components/index";

const userHeaders = [
  {
    label: "",
    key: "profileImage.url",
    component: DynamicTableImageComponent
  },
  {
    label: "Empresa",
    key: "company.name",
    component: DynamicTableTextComponent,
    sortable: "company"
  },
  {
    label: "Nombre",
    key: "firstName,lastName",
    component: DynamicTableTextComponent,
    sortable: "firstName"
  }
];

export default userHeaders;
