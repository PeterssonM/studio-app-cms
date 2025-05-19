import { defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
      description: 'The main title of the post',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A subtitle',
    },
    {
      name: 'label',
      title: 'Labels',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List some skills/frameworks associated with this project',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Describe the project',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'An image to accompany the post',
    },
    {
        name: 'video',
        title: 'Video',
        type: 'url',
        description: 'Link to a YouTube video'
    },      
    {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'link',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                description: 'e.g., GitHub',
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url',
                description: 'The corresponding URL',
              },
            ],
          },
        ],
        description: 'A list of labeled links (e.g., GitHub)',
      },      
  ],
})
