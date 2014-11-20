Template.work.helpers({
    works: function () {
        all = orion.entities.works.collection.find({}).fetch();
        chunks = [];
        size = 3
        while (all.length > 3) {
            chunks.push({ row: all.slice(0, 3)});
            all = all.slice(3);
        }
        chunks.push({row: all});
        return chunks;
    }
});

Template.workItem.helpers({
  icons: function (tools) {
    var icon = '';
    for (var i = 0; i < tools.length; i++) {
      icon += '<i class="' + tools[i] + '"></i>';
    }
    return icon;
  }
})
