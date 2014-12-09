Meteor.methods({
  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.contact);

    // Build the e-mail text
    var text = "Name: " + doc.name + "\n\n" + "Email: " + doc.email + "\n\n\n\n" + "Website: " + doc.website + "\n\n" + doc.message;

    this.unblock();

    message = {
      from: doc.email,
      to: contactFormConfig.settings.emailTo,
      replyTo: doc.email,
      subject: "Website Contact Form - Message From " + doc.name,
      text: text
    };

    // Send the e-mail
    Email.send(message);
  }
});
