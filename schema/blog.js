orion.addEntity('posts', {
  featuredImage: orion.attribute('file',{
    label: "Featured Image",
    optional: true
  }),
  title: {
    type: String,
    label: "Post Title",
  },
  slug: {
    type: String,
    label: "Post Slug",
    optional: true
  },
  content: orion.attribute('summernote', {
    label: "Content",
  }),

}, {
  sidebarName: 'Blog',
  pluralName: 'Posts',
  singularName: 'Post',
  tableColumns: [
    {data:'title', title: 'Title'},
  ]
});
