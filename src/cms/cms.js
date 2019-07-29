import CMS from "netlify-cms-app"

import TestTemplatePreview from "./preview-templates/TestTemplatePreview"

CMS.registerPreviewTemplate("test_template", TestTemplatePreview)

CMS.init()
