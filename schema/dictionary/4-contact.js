orion.dictionary.addDefinition('contactTitle', 'contact', {
  type: String,
  label: "Contact Page Title",
  optional: true,
});

orion.dictionary.addDefinition('contactContent', 'contact',
  orion.attribute('summernote', {
    label: "Additional content above the contact form",
    optional: true,
  })
);
