// Funciones para API de Google maps
// Variables de localización
let map
let geocoder = new google.maps.Geocoder(); 
let find = document.getElementById("find"); 
let myLoc = document.getElementById("myLoc"); 
let myLatLng = new google.maps.LatLng(41.390205, 2.154007); 

// Función que crea el mapa con la posición indicada
async function initMap(position, zoom) {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: position,
        zoom: zoom,    
    });
    createMarker(position, map);
}

initMap(myLatLng, 14);

// Nos ubica en la nueva posición que hemos introducido cuando hacemos click en el botón
find.addEventListener("click", findLocation);

// Posiciona el mapa en la nueva ubicación con el marcador
myLoc.addEventListener("click", function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
      };
      map.setCenter(pos);
      map.setZoom(10);
    });
  }
});

// Crea marcador para indicar la posición en el mapa con un icono
function createMarker(pos, map, icon) {
  let marker = new google.maps.Marker({
    position: pos,
    map, 
    title: "You are here", 
    icon: icon
  });
  let infowindow = new google.maps.InfoWindow({
    content: document.getElementById("adress").value
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  return marker;
}

// Función que coloca el marcador en una posición específica
function findLocation() {
  let geocoder = new google.maps.Geocoder();
  let address = document.getElementById("adress").value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      let myLatLng = new google.maps.LatLng(latitude, longitude);
      initMap(myLatLng, 16)
      document.getElementById("lat").value = latitude;
      document.getElementById("long").value = longitude;
    } else alert("Couldn't find your location");
  });
}