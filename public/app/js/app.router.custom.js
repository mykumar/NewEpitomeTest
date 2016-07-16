'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/dashboard');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'app/partials/app-custom.html'
                    })
                    .state('app.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'app/partials/soc-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load([ 
                                        'app/js/controllers/vectormap.js'                                    ]);
                                }
                            ]
                        }
                    })
                    .state('app.epitome', {
                        url: '/epitome',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('app.epitome.domain', {
                        url: '/domain',
                        templateUrl: 'app/partials/templates/epitome-domain.html',
                        controller: 'EpitomeDomainCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('xeditable').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/epitome-domain.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.epitome.techtypes', {
                        cache: false,
                        url: '/techtypes',
                        templateUrl: 'app/partials/templates/epitome-techtypes.html',
                        controller: 'EpitomeTechtypesCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('xeditable').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/epitome-techtypes.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.template', {
                        url: '/template',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('app.template.manager', {
                        url: '/manager',
                        templateUrl: 'app/partials/templates/template-manager.html',
                        controller: 'TemplateManagerCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('xeditable').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/epitome-techtypes.js');
                                        }
                                    )
                                    .then(
                                      function(){
                                           return $ocLazyLoad.load('app/js/controllers/template-manager.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
            }
        ]
    );
