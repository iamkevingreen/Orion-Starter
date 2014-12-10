if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
  });
}
