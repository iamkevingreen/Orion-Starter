orion.addEntity('works', {
	image: {
		type: orion.attributes.image,
		label: "Image"
	},
  projectName: {
    type: String,
    label: "Project Name",
    autoform: {
      type: 'textarea',
    }
  },
  projectLink: {
    type: String,
    label: "Project Link",
    autoform: {
      type: 'textarea',
    }
  },
	detailText: {
		type: String,
		label: "Detail Text",
		autoform: {
			type: 'textarea',
			rows: 10,
		}
	},
	// detailImages: {
	// 	type: [orion.attributes.image],
	// 	label: "Detail Images"
	// },
  toolsUsed: {
    type: String,
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "GitHub", value: 'GitHub'},
          {label: "Laravel", value: 'Laravel'},
          {label: "Ruby on Rails", value: 'Ruby on Rails'},
          {label: "Heroku", value: 'Heroku'},
          {label: "Apache Solr", value: 'Apache Solr'},
          {label: "Amazon Web Services", value: 'AWS'},
          {label: "PHP", value: 'PHP'},
          {label: "Javascript", value: 'Javascript'},
          {label: "Stripe", value: 'Stripe'},
          {label: "Paypal", value: 'Paypal'},
          {label: "Drupal", value: 'Drupal'},
          {label: "Ubercart", value: 'Ubercart'},
          {label: "jQuery", value: 'jQuery'},
          {label: "Grunt", value: 'Grunt'},
          {label: "Stellar", value: 'Stellar'},
          {label: "Meteor", value: 'Meteor'},
          {label: "PhoneGap", value: 'PhoneGap'},
          {label: "Wordpress", value: 'Wordpress'},
          {label: "Themosis", value: 'Themosis'},
          {label: "Python", value: 'Python'},
          {label: "D3", value: 'D3'},
          {label: "Timber", value: 'Timber'},
          {label: "Advanced Custom Fields", value: 'ACF'},
          {label: "Expression Engine", value: 'Expression Engine'},
          {label: "Shopify", value: 'Shopify'},
          {label: "Tumblr", value: 'Tumblr'},
          {label: "BigCommerce", value: 'BigCommerce'},
          {label: "SASS", value: 'Sass'},
          {label: "Backbone", value: 'Backbone'},
          {label: "Node", value: 'Node'},
          {label: "Express", value: 'Express'},
          {label: "MySQL", value: 'MySQL'},
          {label: "Postgres", value: 'Postgres'},
          {label: "MongoDB", value: 'MongoDB'},
          {label: "Angular", value: 'Angular'},
          {label: "KeystoneJS", value: 'KeystoneJS'},
          {label: "LESS", value: 'LESS'},
          {label: "Spree", value: 'Spree'},
          {label: "Gulp", value: 'Gulp'}
        ];
      }
    }
  },
}, {
	sidebarName: 'Works',
	pluralName: 'Works',
	singularName: 'Work',
});
