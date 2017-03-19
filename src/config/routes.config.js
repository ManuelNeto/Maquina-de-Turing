angular.module('app').config(function(stateHelperProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    stateHelperProvider

        .state({
            name: 'login',
            url: '/login',
            templateUrl: 'src/components/login/login.html',
            controller: 'LoginController'
        },

        {
        	name:'maquinaTuring',
        	url: '/maquinaTuring',
        	templateUrl: 'src/components/maquinaTuring/maquinaTuring.html',
        	controller: 'MaquinaTuringController'
        }
        )

    });
