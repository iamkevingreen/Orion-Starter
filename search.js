// Define the search for blog posts

EasySearch.createSearchIndex('posts', {
  'field' : ['title', 'content'],
  'collection': orion.entities.posts.collection
});
