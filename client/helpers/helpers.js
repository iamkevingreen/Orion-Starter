
UI.registerHelper('featured', function(image) {
  imageSrc="";
  if (image) {
    imageSrc = '<div class="image-wrapper"><img src="' + image +'" alt="" /></div>';
  }
  return imageSrc;
});

UI.registerHelper('prettifyDate', function(timestamp) {
  return moment(new Date(timestamp)).fromNow();
});
