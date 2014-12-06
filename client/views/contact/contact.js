Template.contactForm.helpers({
  contactFormSchema: function() {
    return Schema.contact;
  }
});

Template.contactForm.rendered = function() {
  $('header').addClass('small');
};
