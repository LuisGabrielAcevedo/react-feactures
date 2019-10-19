import React from "react";
import {
  DynamicTableComponent,
  defaultPagination,
  TitleBarComponent
} from "../../../../../lgx-react-components/index";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";

class ListComponent extends React.Component {
  modelClass = null;
  resource = null;
  module = null;
  title = this.props.match.params.resource;
  headers = [];

  state = {
    data: [],
    loading: false,
    pagination: defaultPagination
  };

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate(nextProps) {
    if (this.props.match.params.resource !== nextProps.match.params.resource)
      this.updateState();
  }

  async updateState() {
    this.resource = this.props.match.params.resource;
    this.module = this.props.match.params.module;
    this.title = this.resource;
    const modelClassModule = await import(`../../../models/${this.resource}`);
    this.modelClass = modelClassModule.default;
    const headerModule = await import(
      `../../../metadata/table/${this.resource}`
    );
    this.headers = headerModule.default;
    this.loadData({
      pagination: defaultPagination
    });
  }

  with() {
    let resource = this.resource;
    if (resource.includes("-")) resource = resource.split("-").join("");
    const populateData = {
      users:
        "company,application,userConfigurations.currentStore,userInformation,role",
      companies: "application,country,admin",
      applications: "",
      stores: "country,application,company,storeConfigurations",
      states: "country",
      products: "company",
      vendors: "company",
      brands: "company",
      productcategories: "company",
      producttypes: "company",
      rooms: "company"
    };
    return populateData[resource];
  }

  async loadData(changes) {
    let modelClass = this.modelClass;
    const currentPage =
      changes && changes.pagination
        ? changes.pagination.currentPage
        : this.state.pagination.currentPage;
    const perPage =
      changes && changes.pagination
        ? changes.pagination.itemsPerPage
        : this.state.pagination.itemsPerPage;
    this.setState({ ...this.state, loading: true });
    if (this.with()) modelClass = modelClass.with(this.with());
    const resp = await modelClass
      .page(currentPage)
      .perPage(perPage)
      .find();
    this.setState({
      ...this.state,
      loading: false,
      data: resp.data,
      pagination: {
        currentPage: resp.currentPage,
        itemsPerPage: resp.itemsPerPage,
        totalItems: resp.totalItems
      }
    });
  }

  dynamicTableChanges(changes) {
    this.loadData(changes);
  }

  render() {
    const { loading, data, pagination } = this.state;
    const { history } = this.props;
    const rightContent = (
      <div>
        <Fab
          size="small"
          color="primary"
          onClick={() =>
            history.push(`/e-commerce/${this.module}/${this.resource}/new`)
          }
        >
          <AddIcon />
        </Fab>
      </div>
    );
    return (
      <div>
        <TitleBarComponent title={this.title} rightContent={rightContent} />
        <DynamicTableComponent
          headers={this.headers}
          loading={loading}
          data={data}
          pagination={pagination}
          dynamicTableChanges={changes => this.dynamicTableChanges(changes)}
        />
      </div>
    );
  }
}

export default withRouter(ListComponent);
