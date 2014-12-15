// Pagination for the blog posts

Pages = new Meteor.Pagination(orion.entities.posts.collection, {
  itemTemplate: 'postSingle',
  perPage: 6,
  navShowFirst: false,
  navShowLast: false
});
