import React from "react"
import { styled } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import { iconMapping } from "../icon-mapping.js"

const Container = styled("div")({
  width: 50,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
})

type Props = {
  items: Array<{|
    name: string,
    helperText: string,
    icon?: ?React.Node,
    onClick: Function,
  |}>,
}

export const IconSidebar = ({ items = [], onClickItem }: Props) => {
  return (
    <Container>
      {items.map((item) => {
        let NameIcon =
          iconMapping[item.name.toLowerCase()] || iconMapping["help"]
        return (
          <IconButton
            key={item.name}
            color={item.selected ? "primary" : "none"}
            disabled={Boolean(item.disabled)}
            onClick={item.onClick ? item.onClick : () => onClickItem(item)}
          >
            {item.icon || <NameIcon />}
          </IconButton>
        )
      })}
    </Container>
  )
}

export default IconSidebar
