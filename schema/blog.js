orion.addEntity('posts', {
  featuredImage: {
    type: orion.attributes.image,
    label: "Featured Image",
    optional: true
  },
  title: {
    type: String,
    label: "Post Title",
  },
  content: {
    type: orion.attributes.summernote,
    label: "Content",
  },

}, {
  sidebarName: 'Posts',
  pluralName: 'Posts',
  singularName: 'Post',
  defaultIndexTableFields: [
    {key:'title', label: 'Title'},
  ]
});
