const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const testTemplate = path.resolve(
    `${__dirname}/src/components/templates/TestTemplate.js`
  )

  return graphql(
    `
      {
        allTestTemplateYaml {
          edges {
            node {
              name
              slug
              title
              subtitle
              summary
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allTestTemplateYaml.edges.forEach(({ node }) => {
      createPage({
        path: `${node.slug}`,
        component: testTemplate,
        context: {
          ...node,
        },
      })
    })
  })
}
