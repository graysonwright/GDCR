$(function() {
  // If a container for a Google Map exists on this page...
  var canvas = $("#map");
  if (canvas[0]){
    // Add the Google Map to the page.
    canvas.addClass("js");

    var map;
    var chicago = new google.maps.LatLng(41.850033, -87.650052);

    var GDCRStyles = [
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    },{
      featureType: 'poi',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    },{
      featureType: 'landscape',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    },{
      featureType: 'water',
      elementType: 'labels',
      stylers: [{ visibility: "off" }]
    },{
      featureType: 'administrative.locality',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    },{
      featureType: 'transit',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    }
    ];

    var mapOptions = {
      zoom: 12,
      center: chicago,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'GDCR Theme']
      }
    };

    var styledMapOptions = {
      name: 'GDCR Theme'
    };

    var GDCR_Theme = new google.maps.StyledMapType(GDCRStyles, styledMapOptions);

    var map = new google.maps.Map(canvas[0], mapOptions);

    map.mapTypes.set('GDCR Theme', GDCR_Theme);
    map.setMapTypeId('GDCR Theme');
  }
});
