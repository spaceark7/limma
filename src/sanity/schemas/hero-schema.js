const hero = {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Brand Highlight',
      name: 'brandHighlight',
      type: 'string',
      description: 'Highlight a brand name in the title',
      ValidityState: {
        maxLength: 20,
      },
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
}

export default hero
