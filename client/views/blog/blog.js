Template.posts.helpers({
    posts: function () {
      console.log('yo');
      all = orion.entities.posts.collection.find({}).fetch();
      console.log(all);
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
