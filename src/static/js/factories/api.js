export default function(module) {
	module.factory('ApiFactory', ['$http', 'GrowlFactory', ApiFactory]);

	function ApiFactory($http, GrowlFactory) {
		var returned = {
			values: {},
			actions: {}
		};

		returned.api = api;
		returned.values.apiPath = '/api/v1/';

		function api(config) {
			if(!config.url)
				return;

			config.url = returned.values.apiPath + config.url;

			if(config.url.slice(-1) != '/')
				config.url += '/';

			return $http(config).catch(err => {
				_.forEach(err.data.__all__, err => {
					GrowlFactory.alert(err);
				});
			});
		}

		return returned;
	};
}
