orion.dictionary.addDefinition('siteName', 'site', {
  type: String,
  label: "Site Name",
  optional: true,
});

orion.dictionary.addDefinition('siteDescription', 'site', {
  type: String,
  label: "Short Blurp about the site",
  optional: true,
});

orion.dictionary.addDefinition('videoURL', 'site', {
  type: String,
  label: "Video URL",
  optional: true,
});

orion.dictionary.addDefinition('headerImage', 'site', {
  type: orion.attributes.image,
  label: "Header Fallback Image",
  optional: true,
});

orion.dictionary.addDefinition('headerBackground', 'site', {
    type: String,
    label: "Background Color",
    optional: true,
    autoform: {
      type: 'color',
    }
});
