import { defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Lower numbers show first',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Company name',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string',
      description: 'E.g. Jan 2020 - Present',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Describe the job',
    },
    {
      name: 'label',
      title: 'labels',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List som skills',
    },
  ],
})
