// Setup the container for the overlay and its elements
var $overlay = $('<div class="cj-overlay"></div>');
var $imageContainer = $('<div class="cj-container"></div>');
var $close = $('<span class="close">&#10006;</span>');
var $image = $('<img>');
var $title = $('<p></p>');
var $controls = $('<div class="cj-controls"></div>');
var $previous = $('<span class="prev">Prev</span>');
var $next = $('<span class="next">Next</span>');

// Add overlay elements to main overlay element
$overlay.append($imageContainer);
$imageContainer.append($close);
$imageContainer.append($image);
$imageContainer.append($title);
$imageContainer.append($controls);
$controls.append($previous);
$controls.append($next);

// Add overlay element to body
$("body").append($overlay);

// On click:
// Get the location of the image and title of image from child
$("#cj-lightbox a").click(function(event) {
  // stops the scroll to the top of the page on a blank link element
  event.preventDefault();

  var imageLocation = $(this).children("img").attr("src");
  var imageTitle = $(this).children("img").attr("title");

  $image.attr("src", imageLocation);
  $title.text(imageTitle);

  $overlay.show();
});

$close.click(function() {
  $overlay.hide();
});
