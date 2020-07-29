import React, { useReducer, useEffect, useMemo } from "react"
import { styled } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import ExpandIcon from "@material-ui/icons/KeyboardArrowLeft"
import ContractIcon from "@material-ui/icons/KeyboardArrowRight"
import { grey } from "@material-ui/core/colors"

const Container = styled("div")({
  width: 0,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "#fff",
  position: "relative",
  transition: "width 500ms",
  "&.expanded": {
    width: 300,
  },
})

const Expander = styled(ButtonBase)({
  width: 23,
  height: 40,
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "flex-start",
  borderTopLeftRadius: "50%",
  borderBottomLeftRadius: "50%",
  boxSizing: "border-box",
  borderTop: `1px solid ${grey[400]}`,
  borderBottom: `1px solid ${grey[400]}`,
  borderLeft: `1px solid ${grey[400]}`,
  boxShadow: "-1px 2px 5px rgba(0,0,0,0.2)",
  backgroundColor: "#fff",
  position: "absolute",
  top: "calc(50% - 20px)",
  left: -23,
  zIndex: 9999,
  transition: "opacity 500ms, left 500ms, width 500ms",
  "&.expanded": {
    left: -20,
    width: 20,
    opacity: 0.4,
    "& .icon": {
      marginLeft: 0,
    },
  },
  "& .icon": {
    marginLeft: 3,
  },
})

const Slider = styled("div")({
  position: "absolute",
  right: 0,
  top: 0,
  width: 0,
  bottom: 0,
  overflow: "hidden",
  transition: "opacity 500ms, left 500ms, width 500ms",
  "&.expanded": {
    width: 300,
  },
})
const InnerSliderContent = styled("div")({
  width: 300,
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
})

const getInitialExpandedState = () => {
  return Boolean(window.__REACT_WORKSPACE_LAYOUT_EXPANDED_STATE)
}

export const RightSidebar = ({ children, initialExpandedState }) => {
  const [expanded, toggleExpanded] = useReducer(
    (state) => !state,
    initialExpandedState === undefined
      ? getInitialExpandedState()
      : initialExpandedState
  )

  useEffect(() => {
    if (initialExpandedState !== undefined) {
      window.__REACT_WORKSPACE_LAYOUT_EXPANDED_STATE = expanded
    }
  }, [initialExpandedState, expanded])

  return (
    <Container className={expanded ? "expanded" : ""}>
      <Slider className={expanded ? "expanded" : ""}>
        <InnerSliderContent>{children}</InnerSliderContent>
      </Slider>
      <Expander onClick={toggleExpanded} className={expanded ? "expanded" : ""}>
        {expanded ? (
          <ContractIcon className="icon" />
        ) : (
          <ExpandIcon className="icon" />
        )}
      </Expander>
    </Container>
  )
}

export default RightSidebar
