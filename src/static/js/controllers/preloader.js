import { setTimeout } from "timers";

export default function(module) {
	module
	.controller('PreloaderController', ['$scope', '$state', PreloaderController]);

	function PreloaderController($scope, $state) {
		var vm = this;
		
		setTimeout(()=> {
			$state.go('home')
		}, 2000)
	};
}