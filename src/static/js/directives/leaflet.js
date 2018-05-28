export default function(module) {
	module.directive('leaflet', [leaflet]);
	
	function leaflet() {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				var map = L.map('map', {
					minZoom: 1,
					maxZoom: 4,
					center: [0, 0],
					zoom: 1,
					crs: L.CRS.Simple
				  });
				  // dimensions of the image
				  var w = 4998,
					  h = 2807,
					  url = '../static/images/map-background.png';

				  // calculate the edges of the image, in coordinate space
				  var southWest = map.unproject([0, h], map.getMaxZoom()-1);
				  var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
				  var bounds = new L.LatLngBounds(southWest, northEast);
				  // add the image overlay, 
				  // so that it covers the entire map
				  L.imageOverlay(url, bounds).addTo(map);
				  // tell leaflet that the map is exactly as big as the image
				  map.setMaxBounds(bounds);
			}
		}
	}
}