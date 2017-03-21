angular.module('app').config(function(stateHelperProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/maquinaTuring');

    stateHelperProvider

        .state({
            name: 'maquinaTuring',
            url: '/maquinaTuring',
            templateUrl: 'src/components/maquinaTuring/maquinaTuring.html',
            controller: 'MaquinaTuringController'
        })

    });
