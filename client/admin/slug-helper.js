Template.adminEntitiesCreate.events({
  'click .btn': function(e) {
    str = $('input[name="title"]').val();
    if (str === undefined) {
      str = $('input[name="projectName"]').val();
    }
    str = str.replace(/[^a-zA-Z0-9\s]/g,"");
    str = str.toLowerCase();
    str = str.replace(/\s/g,'-');
    $('input[name="slug"]').val(str);
  }
});

Template.adminEntitiesCreate.rendered = function() {
  $('input[name="slug"]').parent().hide();
};
