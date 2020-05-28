import React from "react"
import HeaderButton from "../HeaderButton"
import Box from "@material-ui/core/Box"
import { styled } from "@material-ui/core/styles"

const Container = styled("div")({
  width: "100%",
  display: "flex",
  backgroundColor: "#fff",
  borderBottom: "1px solid #ccc",
})

type Props = {|
  leftSideContent?: ?React.Node,
  items: Array<{|
    name: string,
    icon?: ?React.Node,
    onClick: Function,
  |}>,
|}

export const Header = ({ leftSideContent = null, items }: Props) => {
  return (
    <Container>
      {leftSideContent}
      <Box flexGrow={1}></Box>
      {items.map((item) => (
        <HeaderButton key={item.name} {...item} />
      ))}
    </Container>
  )
}

export default Header
