export default function(module) {
    module.config(config);
}

function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                "bodyView@": {
                    templateUrl: 'map.html',
                    controller: 'MapController',
                    controllerAs: 'Map'
                }
            }
        });
        
    $urlRouterProvider.otherwise('/'); //Temp
}
