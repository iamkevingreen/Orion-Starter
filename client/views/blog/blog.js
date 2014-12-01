Template.posts.helpers({
    posts: function () {
      return orion.entities.posts.collection.find().fetch();
    }
});

Template.postSingle.helpers({
  featured: function(image) {
    imageSrc = '';
    if (image) {
      imageSrc = '<div class="image-wrapper"><img src="' + image + '" alt="" /></div>';
    }
    return imageSrc;
  },
  prettifyDate: function(timestamp) {
      return moment(new Date(timestamp)).fromNow();
  }
})
