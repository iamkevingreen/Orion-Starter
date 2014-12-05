Template.adminEntitiesCreate.events({
  'click .btn': function(e) {
    str = $('input[name="title"]').val();
    str = str.replace(/[^a-zA-Z0-9\s]/g,"");
    str = str.toLowerCase();
    str = str.replace(/\s/g,'-');
    $('input[name="slug"]').val(str);
    console.log('yo');
  }
});
