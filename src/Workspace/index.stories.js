import React from "react"
import { action } from "@storybook/addon-actions"
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
      onClickHeaderItem={action("onClickHeaderItem")}
      onClickIconSidebarItem={action("onClickIconSidebarItem")}
      iconSidebarItems={[
        {
          name: "Play",
          helperText: "Play Tooltip",
        },
        {
          name: "Pause",
          helperText: "Pause Tooltip",
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

export const WithIconDictionary = () => (
  <div style={{ height: 400 }}>
    <Workspace
      allowFullscreen
      iconDictionary={{
        "custom icon": FeaturedVideoIcon,
      }}
      headerItems={[
        { name: "Prev" },
        { name: "Next" },
        { name: "Save" },
        { name: "Custom Icon" },
      ]}
      onClickHeaderItem={action("onClickHeaderItem")}
      onClickIconSidebarItem={action("onClickIconSidebarItem")}
      iconSidebarItems={[
        {
          name: "Custom Icon",
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

WithIconDictionary.story = {
  name: "WithIconDictionary",
}
