orion.addEntity('works', {
	image: {
		type: orion.attributes.image,
		label: "Featured Image or specify a color fallback",
		optional: true
	},
	companyLogo: {
		type: orion.attributes.image,
		label: "Upload a company logo if one exist or is of high enough quality (png)",
		optional: true
	},
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
  projectLink: {
    type: String,
    label: "Project Link",
  },
	detailText: {
		type: String,
		label: "Detail Text",
		optional: true,
		autoform: {
			type: 'textarea',
			rows: 10,
		}
	},
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
	toolsUsed: {
		type: [String],
		autoform: {
			type: "select-checkbox",
			options: function () {
				return [
					{label: "GitHub", value: 'github'},
					{label: "Laravel", value: 'laravel'},
					{label: "Ruby on Rails", value: 'rails'},
					{label: "Heroku", value: 'heroku'},
					{label: "Apache Solr", value: 'apache-solr'},
					{label: "Amazon Web Services", value: 'aws'},
					{label: "PHP", value: 'php'},
					{label: "Javascript", value: 'javascript'},
					{label: "Stripe", value: 'stripe'},
					{label: "Paypal", value: 'paypal'},
					{label: "Drupal", value: 'drupal'},
					{label: "Bower", value: 'bower'},
					{label: "jQuery", value: 'jquery'},
					{label: "Grunt", value: 'grunt'},
					{label: "Stellar", value: 'stellar'},
					{label: "Meteor", value: 'meteor'},
					{label: "PhoneGap", value: 'phonegap'},
					{label: "Wordpress", value: 'wordpress'},
					{label: "Themosis", value: 'themosis'},
					{label: "Python", value: 'python'},
					{label: "D3", value: 'd3'},
					{label: "Timber", value: 'timber'},
					{label: "Advanced Custom Fields", value: 'acf'},
					{label: "Expression Engine", value: 'expression-engine'},
					{label: "Shopify", value: 'shopify'},
					{label: "Tumblr", value: 'tumblr'},
					{label: "BigCommerce", value: 'bigcommerce'},
					{label: "SASS", value: 'sass'},
					{label: "Backbone", value: 'backbone'},
					{label: "Node", value: 'node'},
					{label: "Express", value: 'express'},
					{label: "MySQL", value: 'mysql'},
					{label: "Postgres", value: 'postgresql'},
					{label: "Redis", value: 'redis'},
					{label: "MongoDB", value: 'mongodb'},
					{label: "Angular", value: 'angular'},
					{label: "KeystoneJS", value: 'keystonejs'},
					{label: "LESS", value: 'less'},
					{label: "Spree", value: 'spree'},
					{label: "Gulp", value: 'gulp'}
				];
			}
		}
	},
}, {
	sidebarName: 'Works',
	pluralName: 'Works',
	singularName: 'Work',
});
