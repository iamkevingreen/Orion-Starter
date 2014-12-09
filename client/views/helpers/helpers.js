Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd');
});
