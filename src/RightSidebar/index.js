import React from "react"
import { styled } from "@material-ui/core/styles"

const Container = styled("div")({
  width: 300,
  display: "flex",
  flexDirection: "column",
  height: "100%",
})

export const RightSidebar = ({ children }) => {
  return <Container>{children}</Container>
}

export default RightSidebar
