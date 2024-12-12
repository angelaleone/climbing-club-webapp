import { createVuetify } from 'vuetify'
import 'vuetify/styles' //this is the import that fixed the dark on hover behavior
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives
})
