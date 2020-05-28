import React from "react"
import Header from "./"

export default {
  title: "Header",
  component: Header,
}

export const Basic = () => (
  <Header
    leftSideContent="Left Side Content"
    items={[
      { name: "Prev" },
      { name: "Next" },
      { name: "Clone", disabled: true },
      { name: "Settings" },
    ]}
  />
)
