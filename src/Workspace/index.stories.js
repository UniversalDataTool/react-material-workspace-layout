import React from "react"
import { linkTo } from "@storybook/addon-links"
import Workspace from "./"
import SidebarBox from "../SidebarBox"
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo"

export default {
  title: "Workspace",
  component: Workspace,
}

export const Basic = () => (
  <div style={{ height: 400 }}>
    <Workspace
      allowFullscreen
      headerItems={[{ name: "Prev" }, { name: "Next" }, { name: "Save" }]}
      iconSidebarItems={[
        {
          name: "Play",
        },
        {
          name: "Pause",
        },
      ]}
      rightSidebarItems={[
        <SidebarBox icon={<FeaturedVideoIcon />} title="Region Selector">
          Hello world!
        </SidebarBox>,
      ]}
    >
      Hello World!
    </Workspace>
  </div>
)

Basic.story = {
  name: "Basic",
}
