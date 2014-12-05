Router.configure({
  loadingTemplate: 'adminLoading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'works'), orion.subs.subscribe('entity', 'posts'), orion.subs.subscribe('entity', 'pages')];
  }
});


Router.map(function() {

  // Site index

  this.route('base', {
    path: '/',
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

  // Work/portfolio routes

  this.route('work', {
    path: '/work',
    fastRender: true,
  })
  this.route('/workSingle', {
    path: '/work/:slug',
    layoutTemplate: 'layout',
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'works', {slug: this.params.slug})]
    },
    data: function() {
      return orion.entities.works.collection.findOne({slug: this.params.slug});
    }
  })

  // Blog and individual blog posts

  this.route('blog', {
    path: '/blog',
    fastRender: true,
  })
  this.route('post', {
    path: '/blog/:slug',
    layoutTemplate: 'layout',
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'posts', {slug: this.params.slug})]
    },
    data: function() {
      return orion.entities.posts.collection.findOne({slug: this.params.slug});
    }
  })

  // General Pages
  this.route('page', {
    path: ':slug',
    layoutTemplate: 'layout',
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'pages', {slug: this.params.slug})]
    },
    data: function() {
      page = orion.entities.pages.collection.findOne({slug: this.params.slug});
      var response = this.response;
      console.log(response);
      if (page == undefined) {
        this.redirect('base');
        return null;
      }
      return orion.entities.pages.collection.findOne({slug: this.params.slug});
    }
  })

  // Contact Form

  this.route('contact', {
    path: '/contact'
  })

});
