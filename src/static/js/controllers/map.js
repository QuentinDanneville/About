export default function(module) {
	module
	.controller('MapController', ['$scope', 'MapFactory', MapController]);

	function MapController($scope, MapFactory) {
		var vm = this;

		vm.showMapState = true;

		vm.CF = MapFactory;

		setTimeout(()=> {
			$scope.$apply(()=> {
				hideMap();
			})
		}, 3000)

		function hideMap() {
			vm.showMapState = false;
		}
	};
}