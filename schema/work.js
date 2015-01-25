orion.addEntity('works', {
	image: orion.attribute('file',{
		label: "Featured Image or specify a color fallback",
		optional: true
	}),
	companyLogo: orion.attribute('file',{
		label: "Upload a company logo if one exist or is of high enough quality (png)",
		optional: true
	}),
	projectBackground: {
		type: String,
		label: "Background Color",
		optional: true,
		autoform: {
			type: 'color',
		}
	},
	projectColor: {
		type: String,
		label: "Text Color",
		optional: true,
		autoform: {
			type: 'color',
		}
	},
  projectName: {
    type: String,
    label: "Project Name",
  },
	slug: {
		type: String,
		label: "Slug",
		optional: true
	},
	projectRole: {
		type: String,
		label: "Project Role"
	},
  projectLink: {
    type: String,
    label: "Project Link",
		optional: true
  },
	detailText: orion.attribute('summernote',{
		label: "Detail Text",
		optional: true,
	}),
	// detailImages: {
	// 	type: [orion.attributes.image],
	// 	label: "Detail Images"
	// },
	languesUsed: {
		type: [String],
		autoform: {
			type: "select-checkbox",
			options: function () {
				return [
					{label: "Ruby on Rails", value: 'rails'},
					{label: "PHP", value: 'php'},
					{label: "Javascript", value: 'javascript'},
					{label: "Drupal", value: 'drupal'},
					{label: "Meteor", value: 'meteor'},
					{label: "Python", value: 'python'},
					{label: "Backbone", value: 'backbone'},
					{label: "Node", value: 'node'},
					{label: "Angular", value: 'angular'},
				];
			}
		}
	},

	// I am returning values of the font-icons
	// that I want to pass into my workITem.helper
	// function, you can tweak this so that it
	// just returns the name of the language if
	// you want to use this a different way

	toolsUsed: {
		type: [String],
		autoform: {
			type: "select-checkbox",
			options: function () {
				return [
					{label: "GitHub", value: 'devicon-git-plain-wordmark'},
					{label: "Laravel", value: 'devicon-laravel-plain'},
					{label: "Ruby on Rails", value: 'devicon-rails-plain'},
					{label: "Heroku", value: 'icon-heroku'},
					{label: "Amazon Web Services", value: 'devicon-amazonwebservices-original'},
					{label: "PHP", value: 'icon-php-alt'},
					{label: "Javascript", value: 'devicon-javascript-plain'},
					{label: "Stripe", value: 'fa fa-cc-stripe'},
					{label: "Paypal", value: 'fa fa-cc-paypal'},
					{label: "Ruby", value: 'devicon-ruby-plain'},
					{label: "Bower", value: 'devicon-bower-plain'},
					{label: "Grunt", value: 'devicon-grunt-plain-wordmark'},
					{label: "PhoneGap", value: 'icon-phone'},
					{label: "Wordpress", value: 'devicon-wordpress-plain'},
					{label: "Python", value: 'icon-python'},
					{label: "Expression Engine", value: 'expression-engine'},
					{label: "ECommerce", value: 'fa fa-shopping-cart'},
					{label: "Tumblr", value: 'fa fa-tumblr-square'},
					{label: "BigCommerce", value: 'bigcommerce'},
					{label: "SASS", value: 'devicon-sass-original'},
					{label: "Backbone", value: 'backbonejs-original'},
					{label: "Node", value: 'nodejs-original'},
					{label: "MySQL", value: 'devicon-mysql-plain'},
					{label: "Postgres", value: 'devicon-postgresql-plain'},
					{label: "Redis", value: 'icon-redis'},
					{label: "MongoDB", value: 'mongodb-original-wordmark'},
					{label: "Angular", value: 'angularjs-original'},
					{label: "LESS", value: 'devicon-less-plain-wordmark'},
					{label: "Gulp", value: 'gulp-plain'}
				];
			}
		}
	},
}, {
	sidebarName: 'Works',
	pluralName: 'Works',
	singularName: 'Work',
	tableColumns: [
		{data:'projectName', title: 'Project'},
	]
});
