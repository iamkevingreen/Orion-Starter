Template.base.rendered = function() {
  this.autorun;
  if (!this.rendered){
    // run my code

    $('#work').mixItUp({
      callbacks: {
        onMixEnd: function(state) {
          console.log(state);
        },
        onMixFail: function(state) {
          console.log(state);
        }
      }
    });
    console.log('hello');
  }
}
Template.base.destroyed = function() {
  $('#work').mixItUp('destroy', true);
}

Template.base.helpers = function() {
  console.log('test');
}
