Template.base.rendered = function() {
  if (!this.rendered){
    // run my code
    $('#work').mixItUp();
    console.log('hello');
  }
};
Template.base.destroyed = function() {
  $('#work').mixItUp('destroy', true);
};
