import React from "react"
import IconSidebar from "./"

export default {
  title: "IconSidebar",
  component: IconSidebar,
}

export const Basic = () => (
  <IconSidebar
    items={[
      {
        name: "Play",
        helperText: "Play the game",
      },
      {
        name: "Start",
        helperText: "Start the game",
      },
      {
        name: "Next",
        helperText: "Next option",
      },
    ]}
  />
)
