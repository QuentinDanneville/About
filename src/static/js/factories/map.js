export default function(module) {
	module.factory('MapFactory', ['ApiFactory', MapFactory]);

	function MapFactory(ApiFactory) {
		var returned = {
			values: {},
			actions: {}
		};

		return returned;
	};
}
