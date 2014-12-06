Template.work.helpers({
    works: function () {
      return orion.entities.works.collection.find().fetch();
    }
});

Template.workBlock.helpers({
  icons: function (tools) {
    var icon = '';
    for (var i = 0; i < tools.length; i++) {
      icon += '<i class="' + tools[i] + '"></i>';
    }
    return icon;
  },
  tools: function (tools) {
    var classes = '';
    for (var i = 0; i < tools.length; i++) {
      classes += tools[i] + ' ';
    }
    return classes;
  }
});

Template.workSingle.rendered = function() {
  $('header').addClass('small');
};
