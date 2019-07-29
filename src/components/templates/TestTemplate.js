import React from "react"

import Layout from "../layout"

import "./TestTemplate.scss"

const TestTemplate = ({ title, subtitle, summary }) => (
  <Layout>
    <div className="test-template">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="summary">{summary}</div>
    </div>
  </Layout>
)

export default TestTemplate
