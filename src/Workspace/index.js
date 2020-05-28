import React from "react"
import { styled } from "@material-ui/core/styles"
import Header from "../Header"
import IconSidebar from "../IconSidebar"
import RightSidebar from "../RightSidebar"
import WorkContainer from "../WorkContainer"

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
})
const SidebarsAndContent = styled("div")({
  display: "flex",
  flexGrow: 1,
  height: "100%",
})

export default ({
  iconSidebarItems = [],
  headerItems = [],
  rightSidebarItems = [],
  children,
}) => (
  <Container>
    <Header items={headerItems} />
    <SidebarsAndContent>
      {iconSidebarItems.length === 0 ? null : (
        <IconSidebar items={iconSidebarItems} />
      )}
      <WorkContainer>{children}</WorkContainer>
      {rightSidebarItems.length === 0 ? null : (
        <RightSidebar>{rightSidebarItems}</RightSidebar>
      )}
    </SidebarsAndContent>
  </Container>
)
