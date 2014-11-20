Template.work.helpers({
    works: function () {
        all = orion.entities.works.collection.find({}).fetch();
        chunks = [];
        size = 3
        while (all.length > 3) {
            chunks.push({ row: all.slice(0, 3)});
            all = all.slice(3);
        }
        chunks.push({row: all});
        return chunks;
    }
});

// Filter through all the tools You can
// change the default icons or reoder them
// if you wish for them to appear
// differently on the frontend

Template.workItem.helpers({
  icons: function (tools) {
    var icon = '';
    for (var i = 0; i < tools.length; i++) {
      console.log(tools[i]);
      switch (tools[i]) {
        case 'github':
          icon += '<i class="devicon-git-plain-wordmark"></i>';
          break;
        case 'grunt':
          icon += '<i class="devicon-grunt-plain-wordmark"></i>';
          break;
        case 'javascript':
          icon += '<i class="devicon-javascript-plain"></i>';
          break;
        case 'rails':
          icon += '<i class="devicon-rails-plain"></i>';
          break;
        case 'laravel':
          icon += '<i class="devicon-laravel-plain"></i>';
          break;
        case 'wordpress':
          icon += '<i class="devicon-wordpress-plain"></i>';
          break;
        case 'php':
          icon += '<i class="icon-php-alt"></i>';
          break;
        case 'ruby':
          icon += '<i class="devicon-ruby-plain"></i>';
          break;
        case 'stripe':
          icon += '<i class="fa fa-cc-stripe"></i>';
          break;
        case 'paypal':
          icon += '<i class="fa fa-cc-paypal"></i>';
          break;
        case 'postgresql':
          icon += '<i class="devicon-postgresql-plain"></i>';
          break;
        case 'mysql':
          icon += '<i class="devicon-mysql-plain"></i>';
          break;
        case 'sass':
          icon += '<i class="devicon-sass-original"></i>';
          break;
        case 'less':
          icon += '<i class="devicon-less-plain-wordmark"></i>';
          break;
        case 'redis':
          icon += '<i class="icon-redis"></i>';
          break;
      }
    }

    return icon;
  }
})
