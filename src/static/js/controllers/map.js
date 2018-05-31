export default function(module) {
	module
	.controller('MapController', ['$scope', 'MapFactory', MapController]);

	function MapController($scope, MapFactory) {
		var vm = this;

		vm.showMapState = true;
		vm.modalIsVisible = false;
		vm.showSearch = false;
		vm.modal = '';

		vm.CF = MapFactory;


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
	};
}