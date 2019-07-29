import React from "react"

import TestTemplate from "../components/templates/TestTemplate"

export default ({ entry }) => {
  const props = entry.toJS().data

  return <TestTemplate {...props} />
}
