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
    if (image.length) {
      imageSrc = '<img src="' + image + '" alt="" />';
    }
    return imageSrc;
  }
})
