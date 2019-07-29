import CMS from "netlify-cms-app"

import TestTemplate from "../components/templates/TestTemplate"

CMS.registerPreviewTemplate("test_template", TestTemplate)

CMS.init()
