import schemas from '@/sanity/schemas'

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
  projectId: 'aknaujo3',
  dataset: 'production',
  title: 'sanity-cms-studio',
  apiVersion: '2023-08-30',
  basePath: '/admin',
  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
})

export default config
