Router.configure({
  loadingTemplate: 'adminLoading',
  waitOn: function() {
    return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'works')];
  }
});


Router.map(function() {

  this.route('base', {
    path: '/',
    loadingTemplate: 'adminLoading',
    fastRender: true,
    onAfterAction: function() {
      var dict;
      if (!Meteor.isClient) {
        return;
      }
      dict = orion.dictionary.collection.findOne();
      SEO.set({
        title: dict.seoTitle,
        link: {
          icon: dict.seoFavIcon.link,
        },
        meta: {
          'description': dict.seoDescription
        },
        og: {
          'title': dict.seoTitle,
          'description': dict.seoDescription,
          'image': dict.seoImage.link
        }
      });
    }
  });

  this.route('work', {
    path: '/work'
  })


});
