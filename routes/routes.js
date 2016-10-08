import  mainController from '../components/main-controller';
export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/info');

    $stateProvider
        .state('info', {
            url: '/info',
            templateUrl: '../components/personal-info/personal-info.html'
        })
        .state('booking', {
            url: '/booking',
            templateUrl: '../components/booking-info/booking-info.html',
            controller: mainController
        })
        .state('result', {
            url: '/result',
            templateUrl: '../components/hello-world/hello-world.html'
        })

    ;
}
