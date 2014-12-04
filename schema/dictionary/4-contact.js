orion.dictionary.addDefinition('title', 'contact', {
  type: String,
  label: "Contact Page Title",
  optional: true,
});

orion.dictionary.addDefinition('content', 'contact', {
  type: orion.attributes.summernote,
  label: "Additional content above the contact form",
  optional: true,
});