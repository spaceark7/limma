const marketplace = {
  name: 'marketplace',
  title: 'Marketplace',
  type: 'document',
  fields: [
    {
      title: 'Marketplace',
      name: 'marketplace_name',
      type: 'string',
    },
    {
      title: 'url',
      name: 'marketplace_url',
      type: 'string',
    },
    {
      title: 'logo',
      name: 'marketplace_logo',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'marketplace_name',
      subtitle: 'marketplace_url',
      media: 'marketplace_logo',
    },
  },
}

export default marketplace
