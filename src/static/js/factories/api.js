export default function(module) {
	module.factory('ApiFactory', ['$http', ApiFactory]);

	function ApiFactory($http) {
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

		}

		return returned;
	};
}
