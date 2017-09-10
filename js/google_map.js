var map;
var marker;
var mapLocation = {lat: 31.2543459, lng: 75.7018666};
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: mapLocation,
          zoom: 15
        });
        var image = 'images/flag.png';
            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                icon: image,
                animation: google.maps.Animation.DROP,
                animation: google.maps.Animation.BOUNCE,
                position: mapLocation
            });
            google.maps.event.addListener(marker, 'click', toggleBounce);
      }
function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}