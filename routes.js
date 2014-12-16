Router.configure({
  loadingTemplate: 'adminLoading',
  notFoundTemplate: 'notFound',
  fastRender: true,
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
          'description': dict.seoDescription,
          'google-site-verfication': 'emtVgpY0f-I3HzlMAVkYLTb4uJsSJWfWRKW9b2QgFTk'
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
  });
  this.route('/workSingle', {
    path: '/work/:slug',
    layoutTemplate: 'layout',
    fastRender: true,
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'works', {slug: this.params.slug})];
    },
    data: function() {
      return orion.entities.works.collection.findOne({slug: this.params.slug});
    },
    onAfterAction: function() {
      post = orion.entities.works.collection.findOne({slug: this.params.slug});
      dict = orion.dictionary.collection.findOne();
      title = post.projectName + ' | ' + dict.seoTitle;
      SEO.set({
        title: title,
      });
    }
  });


  // Contact Form

  this.route('contact', {
    path: '/contact',
    fastRender: true,
    onAfterAction: function() {
      dict = orion.dictionary.collection.findOne();
      contact = 'Contact Us';
      if (dict.contactTitle !== undefined) {
        contact = dict.contactTitle;
      }
      SEO.set({
        title: contact + ' | ' + dict.seoTitle,
      });
    }
  });

  // Blog and individual blog posts

  this.route('blog', {
    path: '/blog',
    fastRender: true,
    onAfterAction: function() {
      dict = orion.dictionary.collection.findOne();
      SEO.set({
        title: 'Blog | ' + dict.seoTitle,
      });
    }
  });
  this.route('post', {
    path: '/blog/:slug',
    layoutTemplate: 'layout',
    fastRender: true,
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'posts', {slug: this.params.slug})];
    },
    data: function() {
      return orion.entities.posts.collection.findOne({slug: this.params.slug});
    },
    onAfterAction: function() {
      post = orion.entities.posts.collection.findOne({slug: this.params.slug});
      dict = orion.dictionary.collection.findOne();
      title = post.title + ' | ' + dict.seoTitle;
      SEO.set({
        title: title,
      });
    }
  });

  // General Pages
  this.route('page', {
    path: ':slug',
    layoutTemplate: 'layout',
    fastRender: true,
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'pages', {slug: this.params.slug})];
    },
    data: function() {
      page = orion.entities.pages.collection.findOne({slug: this.params.slug});
      var response = this.response;
      console.log(response);
      if (page === undefined) {
        // this.redirect('base');
        return null;
      }
      return orion.entities.pages.collection.findOne({slug: this.params.slug});
    },
    onAfterAction: function() {
      post = orion.entities.pages.collection.findOne({slug: this.params.slug});
      dict = orion.dictionary.collection.findOne();
      title = page.title + ' | ' + dict.seoTitle;
      SEO.set({
        title: title,
      });
    }
  });

});

// Handle 404s properly

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});
