require('./index.scss');
angular.module('TravelTime', [
    'ngSanitize',
    'ui.bootstrap',
    'ui.select',
    'ui.router'
])
    .config(require('../routes/routes'))
    .constant('appName', 'TravelTime')
    .run(function ($rootScope, $log) {
        $rootScope.$on(function sessionExpiredListener() {
            $log.debug('session expired');
            // TODO: Node module for frame communication messages?
            // TODO: Domain checking
            top.postMessage('_SESSION_EXPIRED_', '*');
        });
    })
;