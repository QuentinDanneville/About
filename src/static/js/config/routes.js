export default function(module) {
    module.config(config);
}

function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
    .state('prealoder', {
        url: '/preloader',
        views: {
            "bodyView@": {
                templateUrl: 'preloader.html',
                controller: 'PreloaderController',
                controllerAs: 'Preloader'
            }
        }
    })
    .state('home', {
        url: '/',
        views: {
            "bodyView@": {
                templateUrl: 'map.html',
                controller: 'MapController',
                controllerAs: 'Map'
            }
        },
        resolve: {
            init: MapFactory =>  MapFactory.actions.init()
        },
    });
    
    $urlRouterProvider.otherwise('/'); //Temp
}
