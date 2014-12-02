Router.configure({
  loadingTemplate: 'adminLoading',
  waitOn: function() {
    return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'works'), orion.subs.subscribe('entity', 'posts')];
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
  this.route('blog', {
    path: '/blog'
  })
  this.route('post', {
    path: '/blog/:slug',
    layoutTemplate: 'layout',
    loadingTemplate: 'adminLoading',
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'posts', {slug: this.params.slug})]
    },
    data: function() {
      return orion.entities.posts.collection.findOne({slug: this.params.slug});
    }
  })
  this.route('contact', {
    path: '/contact'
  })

});
