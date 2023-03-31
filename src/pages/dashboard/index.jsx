import React from "react";
import { useState } from "react";
import { Button } from "@arco-design/web-react";
import { IconRotateLeft } from "@arco-design/web-react/icon";
import ReactSVG from "../../assets/react.svg";
import "./index.less";
function Dashboard() {
  return (
    <div className="dashboardWrap">
      <Button className="btn">
        <IconRotateLeft />
        <span>dashboard</span>
        <ReactSVG className="reactIcon"></ReactSVG>
      </Button>
    </div>
  );
}
export default Dashboard;
