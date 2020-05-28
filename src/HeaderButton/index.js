// @flow

import React from "react"
import Button from "@material-ui/core/Button"
import { styled } from "@material-ui/core/styles"
import { iconMapping } from "../icon-mapping.js"

const defaultNameIconMapping = iconMapping

const getIcon = (name) => {
  const Icon =
    defaultNameIconMapping[name.toLowerCase()] || defaultNameIconMapping.help
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
})

export const HeaderButton = ({ name, icon, disabled, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <ButtonInnerContent>
        <IconContainer>{icon || getIcon(name)}</IconContainer>
        <Text>{name}</Text>
      </ButtonInnerContent>
    </StyledButton>
  )
}

export default HeaderButton
