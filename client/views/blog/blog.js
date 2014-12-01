Template.posts.helpers({
    posts: function () {
      return orion.entities.posts.collection.find().fetch();
    }
});
