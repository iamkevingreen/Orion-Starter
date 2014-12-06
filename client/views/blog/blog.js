Template.posts.helpers({
    posts: function () {
      return orion.entities.posts.collection.find().fetch();
    }
});

Template.postSingle.rendered = function() {
  $('header').addClass('small');
};

Template.post.rendered = function() {
  $('header').addClass('small');
};

Template.posts.rendered = function() {
  $('header').addClass('small');
};
