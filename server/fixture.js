if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
      email: 'name@email.com',
      password: 'email123'
  });
}
