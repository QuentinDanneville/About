export default function(module) {
	module.factory('MapFactory', ['ApiFactory', MapFactory]);

	function MapFactory(ApiFactory) {
		var returned = {
			values: {},
			actions: {}
		};


		returned.values.pins = null;
		returned.actions.init = init;

		function init() {
			return ApiFactory.api({
				url: 'pin/'
			})
			.then(response => {
				returned.values.pins = response.data
			})
		}

		return returned;
	};
}
