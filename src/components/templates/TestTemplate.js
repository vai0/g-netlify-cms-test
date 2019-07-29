import React from "react"

import "./TestTemplate.scss"

const TestTemplate = ({ title, subtitle, summary }) => (
  <div className="test-template">
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
    <div className="summary">{summary}</div>
  </div>
)

export default TestTemplate
