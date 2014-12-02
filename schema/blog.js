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
  slug: {
    type: String,
    label: "Post Slug"
  },
  content: {
    type: orion.attributes.summernote,
    label: "Content",
  },

}, {
  sidebarName: 'Blog',
  pluralName: 'Posts',
  singularName: 'Post',
  defaultIndexTableFields: [
    {key:'title', label: 'Title'},
  ]
});
