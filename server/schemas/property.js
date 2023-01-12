
export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
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
        maxLength: 96,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          {title: 'House', value: 'House'},
          {title: 'Flat', value: 'Flat'},
          {title: 'Apartment', value: 'Apartment'},
          {title: 'Condo', value: 'Condo'},
          {title: 'Townhouse', value: 'Townhouse'},
          {title: 'Duplex', value: 'Duplex'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type:'propertyImage'}]
    },
    {
      name: 'pricePerNight',
      title: 'Price Per Night',
      type: 'number',
    },
    {
      name: 'beds',
      title: 'Beds',
      type: 'number',
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
        name: 'amenities',
        title: 'Amenities',
        type: 'array',
        of: [{type:'string'}]
    },
    {
        name: 'host',
        title: 'Host',
        type: 'host',
    },
    {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{type:'review'}]
    }
  ],
}