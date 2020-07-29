// @flow

import React from "react"
import Button from "@material-ui/core/Button"
import { styled } from "@material-ui/core/styles"
import { useIconDictionary } from "../icon-dictionary.js"
import { iconMapping } from "../icon-mapping.js"

const defaultNameIconMapping = iconMapping

const getIcon = (name, customIconMapping) => {
  const Icon =
    customIconMapping[name.toLowerCase()] ||
    defaultNameIconMapping[name.toLowerCase()] ||
    defaultNameIconMapping.help
  return <Icon />
}

const StyledButton = styled(Button)({
  textTransform: "none",
  width: 80,
  marginLeft: 4,
  marginRight: 4,
})
const ButtonInnerContent = styled("div")({
  display: "flex",
  flexDirection: "column",
})
const IconContainer = styled("div")({})
const Text = styled("div")({
  fontWeight: "bold",
  lineHeight: 1,
  height: 28,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const HeaderButton = ({ name, icon, disabled, onClick }) => {
  const customIconMapping = useIconDictionary()
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <ButtonInnerContent>
        <IconContainer>
          {icon || getIcon(name, customIconMapping)}
        </IconContainer>
        <Text>
          <div>{name}</div>
        </Text>
      </ButtonInnerContent>
    </StyledButton>
  )
}

export default HeaderButton
