const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'product_name',
      title: 'Product Name',
      type: 'string',
    },
    {
      title: 'size',
      name: 'size',
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

  preview: {
    select: {
      title: 'product_name',
      subtitle: 'size',
      media: 'image',
    },
  },
}

export default product
