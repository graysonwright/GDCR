$(function() {
  // If a container for a Google Map exists on this page...
  var canvas = $("#map");
  if (canvas[0]){
    // Add the Google Map to the page.
    canvas.addClass("js");
    var map = new google.maps.Map(canvas[0], {
      center: { lat: -34.397, lng: 150.644},
      zoom: 1,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }
});
