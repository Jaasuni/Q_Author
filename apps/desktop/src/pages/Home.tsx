import React from "react";
import { WriterPane } from "../components/WriterPane";
import { TopbarControls } from "../components/TopbarControls";
import { SidebarProject } from "../components/SidebarProject";

export function Home() {
  return (
    <div className="layout">
      <SidebarProject />
      <div className="main">
        <TopbarControls />
        <WriterPane />
      </div>
    </div>
  );
}
