orion.dictionary.addDefinition('seoTitle', 'seo', {
	type: String,
	label: "Title of the page",
	optional: true,
});

orion.dictionary.addDefinition('seoDescription', 'seo', {
	type: String,
	label: "Description",
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('seoImage', 'seo',
	orion.attribute('file', {
		label: "Open Graph Image",
		optional: true,
	})
);

orion.dictionary.addDefinition('seoFavIcon', 'seo',
	orion.attribute('file', {
		label: "Fav Icon",
		optional: true,
	})
);
