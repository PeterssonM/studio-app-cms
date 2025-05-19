import { defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Lower numbers show first',
    },
    {
      name: 'programName',
      title: 'Program Name',
      type: 'string',
      description: 'e.g., Bachelor’s in Computer Engineering',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'schoolName',
      title: 'School Name',
      type: 'string',
      description: 'e.g., KTH Royal Institute of Technology',
      validation: (Rule) => Rule.required(),
    },
    {
        name: 'period',
        title: 'Period',
        type: 'string',
        description: 'E.g. Jan 2020 - Present',
    },
    {
      name: 'highlightedCourses',
      title: 'Highlighted Courses',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional: List of courses to highlight',
    },
  ],
})
