export default function(module) {
    module.config(config);
}

function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                "bodyView@": {
                    template: "Bienvenue sur l'index les potos", //Temporary
                }
            }
        })
        
    // $urlRouterProvider.otherwise('/'); //Temp
}
