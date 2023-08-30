const content = {
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'content',
      name: 'content',
      type: 'string',
    },
    {
      title: 'image',
      name: 'image',
      type: 'image',
      option: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
  ],
}

export default content
