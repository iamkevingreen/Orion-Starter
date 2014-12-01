Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    website: {
        type: String,
        label: "Website"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});
