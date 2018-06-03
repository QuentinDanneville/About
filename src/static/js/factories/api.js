export default function(module) {
	module.factory('ApiFactory', ['$http', ApiFactory]);

	function ApiFactory($http) {
		var returned = {
			values: {},
			actions: {}
		};

		returned.api = api;
		returned.values.apiPath = 'http://127.0.0.1:8003/api/';

		function api(config) {
			if(!config.url)
				return;

			config.url = returned.values.apiPath + config.url;

			if(config.url.slice(-1) != '/')
				config.url += '/';

				return $http(config).catch(err => {
					console.log(err);
				});
		}

		return returned;
	};
}
