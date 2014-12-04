orion.addEntity('pages', {
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
  sidebarName: 'Page',
  pluralName: 'Pages',
  singularName: 'Page',
  defaultIndexTableFields: [
    {key:'title', label: 'Title'},
  ]
});
