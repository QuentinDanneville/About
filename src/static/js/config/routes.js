export default function(module) {
    module.config(config);
}

function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                "bodyView@": {
                    template: "About index", //Temporary
                    controller: 'ContentController',
                    controllerAs: 'Content'
                }
            }
        });
        
    $urlRouterProvider.otherwise('/'); //Temp
}
