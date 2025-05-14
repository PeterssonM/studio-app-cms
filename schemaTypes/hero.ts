import { defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'labels',
      title: 'Labels',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List some skills for the hero section',
    },
  ],
})
