// @flow

import React from "react"
import Button from "@material-ui/core/Button"
import { styled } from "@material-ui/core/styles"
import { useIconDictionary } from "../icon-dictionary.js"
import { iconMapping } from "../icon-mapping.js"
import { colors } from "@material-ui/core"

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
  width: 60,
  paddingTop: 8,
  paddingBottom: 4,
  marginLeft: 1,
  marginRight: 1,
})
const ButtonInnerContent = styled("div")({
  display: "flex",
  flexDirection: "column",
})
const IconContainer = styled("div")({
  color: colors.grey[700],
  height: 20,
  "& .MuiSvgIcon-root": {
    width: 18,
    height: 18,
  },
})
const Text = styled("div")({
  fontWeight: "bold",
  fontSize: 11,
  color: colors.grey[800],
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
