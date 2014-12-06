orion.dictionary.addDefinition('contactTitle', 'contact', {
  type: String,
  label: "Contact Page Title",
  optional: true,
});

orion.dictionary.addDefinition('contactContent', 'contact', {
  type: orion.attributes.summernote,
  label: "Additional content above the contact form",
  optional: true,
});
