import { defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'isOpenToWork',
      title: 'Is Open to Work?',
      type: 'boolean',
      description: 'Am I open to work? Then tick this.',
    },
    {
      name: 'labels',
      title: 'Labels',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List some skills for the hero section',
    },
  ],
})
