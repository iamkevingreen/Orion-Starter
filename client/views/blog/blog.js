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
    var imageSrc = "";
    // if (image != "") {
    //   imageSrc = '<img src="'. image . '" alt="" />';
    // }
    return image;
  }
})
