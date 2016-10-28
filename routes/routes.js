import  mainController from '../components/main-controller';

export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/home/info');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../components/index.html',
            controller: mainController
        })
        .state('home.info', {
            url: '/info',
            templateUrl: '../components/personal-info/personal-info.html',
        })
        .state('home.booking', {
            url: '/booking',
            templateUrl: '../components/booking-info/booking-info.html'
        })
        .state('home.result', {
            url: '/result',
            templateUrl: '../components/conformation/conformation.html',
        })

    ;
}
