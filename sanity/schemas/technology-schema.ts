const technology = {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the technology (preferred 320x320px)',
      options: {
        hotspot: true, // Allows customization in studio
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};

export default technology;
