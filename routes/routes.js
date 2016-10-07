export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('default', {
            url: '/?token',
            templateUrl: '../components/hello-world/hello-world.html'
        });
}
