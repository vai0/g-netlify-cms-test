import React from "react"

import "./TestTemplate.scss"

const TestTemplate = props => {
  let title
  let subtitle
  let summary

  if (props.pageContext) {
    // when used as a component by createPages
    title = props.pageContext.title
    subtitle = props.pageContext.subtitle
    summary = props.pageContext.summary
  } else {
    // when used as a preview template for the CMS
    title = props.title
    subtitle = props.subtitle
    summary = props.summary
  }

  return (
    <div className="test-template">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="summary">{summary}</div>
    </div>
  )
}

export default TestTemplate
