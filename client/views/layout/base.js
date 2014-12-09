Template.base.rendered = function() {
  if (!this.rendered){
    // run my code
    $('#work').mixItUp();
  }
};
Template.base.destroyed = function() {
  $('#work').mixItUp('destroy', true);
};
