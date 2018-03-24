export default function(module) {
	module.factory('ContentFactory', ['ApiFactory', ContentFactory]);

	function ContentFactory(ApiFactory, ModalFactory) {
		var returned = {
			values: {},
			actions: {}
		};

		return returned;
	};
}
