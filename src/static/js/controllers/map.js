export default function(module) {
	module
	.controller('MapController', ['$scope', 'MapFactory', MapController]);

	function MapController($scope, MapFactory) {
		var vm = this;

		vm.CF = MapFactory;
	};
}