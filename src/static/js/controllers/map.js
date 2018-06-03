export default function(module) {
	module
	.controller('MapController', ['$scope', 'MapFactory', MapController]);
	
	function MapController($scope, MapFactory) {
		var vm = this;
		
		vm.showMapState = true;
		vm.modalIsVisible = false;
		vm.showSearch = false;
		vm.modal = '';
		vm.map = null;
		
		vm.MF = MapFactory;
		
		function initMap() {
			var map = L.map('map', {
				minZoom: 1,
				maxZoom: 4,
				center: [0, 0],
				zoom: 1,
				crs: L.CRS.Simple,
				zoomControl: false
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
			
			L.control.zoom({
				position:'topright'
			}).addTo(map);

			return map;
		}

		setTimeout(()=> {
			$scope.$apply(()=> {
				hideMap();
			})
		}, 3000)
		
		function hideMap() {
			vm.showMapState = false;
		}
		
		vm.toggleSearch = () => {
			vm.showSearch = !vm.showSearch;
		}
		
		vm.toggleModal = (modal) => {
			vm.modalIsVisible = true;
			vm.modal = modal;
			console.log(vm.modal);
		}
		
		vm.closeModal = (closeModal) => {
			vm.modalIsVisible = false;
			vm.modal ='';
		}

		vm.map = initMap();

		function initPinsPositions() {
			vm.MF.values.pins.forEach((pin) => {
				L.marker([pin.pos_x, pin.pos_y],).addTo(vm.map).bindPopup("I am a green leaf.");
			})
		}

		initPinsPositions();
		
	};
}