orion.addEntity('pages', {
  title: {
    type: String,
    label: "Post Title",
  },
  slug: {
    type: String,
    label: "Page Slug",
    optional: true
  },
  content: orion.attribute('summernote',{
    label: "Content",
  }),

}, {
  sidebarName: 'Page',
  pluralName: 'Pages',
  singularName: 'Page',
  tableColumns: [
    {data:'title', title: 'Title'},
  ]
});
