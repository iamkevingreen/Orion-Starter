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
  }
})
