import React from "react"
import { styled } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import { iconMapping } from "../icon-mapping.js"
import { useIconDictionary } from "../icon-dictionary"
import Tooltip from "@material-ui/core/Tooltip"

const Container = styled("div")({
  width: 50,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  flexShrink: 0,
})

type Props = {
  items: Array<{|
    name: string,
    helperText: string,
    icon?: ?React.Node,
    onClick: Function,
  |}>,
}

export const IconSidebar = ({
  items = [],
  onClickItem,
  selectedTools,
}: Props) => {
  const customIconMapping = useIconDictionary()
  return (
    <Container>
      {items.map((item) => {
        let NameIcon =
          customIconMapping[item.name.toLowerCase()] ||
          iconMapping[item.name.toLowerCase()] ||
          iconMapping["help"]

        const buttonPart = (
          <IconButton
            key={item.name}
            color={
              item.selected || selectedTools.includes(item.name.toLowerCase())
                ? "primary"
                : "default"
            }
            disabled={Boolean(item.disabled)}
            onClick={item.onClick ? item.onClick : () => onClickItem(item)}
          >
            {item.icon || <NameIcon />}
          </IconButton>
        )

        if (!item.helperText) return buttonPart

        return (
          <Tooltip key={item.name} title={item.helperText} placement="right">
            {buttonPart}
          </Tooltip>
        )
      })}
    </Container>
  )
}

export default IconSidebar
