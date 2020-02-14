import React, { Fragment } from "react";

//Import Components
import Button from "../components/layout/Button";
import Title from "../components/layout/Title";
import Menu from "../components/layout/Menu";

const MainPage = () => {
  return (
    <Fragment>
      <div className="container-main">
        <Button></Button>
        <Title></Title>
        <Menu></Menu>
      </div>
    </Fragment>
  );
};

export default MainPage;
