Template.base.rendered = function() {
  this.autorun;
  if (!this.rendered){
    // run my code
    $('#work').mixItUp({
      callbacks: {
        onMixEnd: function(state) {
        },
        onMixFail: function(state) {
        }
      }
    });
    console.log('hello');
  }
}
Template.base.destroyed = function() {
  $('#work').mixItUp('destroy', true);
}
