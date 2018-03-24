export default function(module) {
	module
	.controller('ContentController', ['$scope', 'ContentFactory', ContentController]);

	function ContentController($scope, ContentFactory) {
		var vm = this;

		vm.CF = ContentFactory;

		console.log(vm.CF);
	};
}