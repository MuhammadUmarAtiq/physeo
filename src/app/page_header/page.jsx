import React from "react";
import { PageHeaderTable } from "../../components/PageHeaderTable";
import Page from "../../components/ui/page";

const PageHeader = () => {
  return (
    <Page title="Page Header" subTitle="Deploy your new project in one-click" href="/page_header/create" btnContent="Add Header">
      <PageHeaderTable />
    </Page>
  );
};
export default PageHeader;
