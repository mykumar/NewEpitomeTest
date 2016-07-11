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
                        templateUrl: 'app/partials/app.html'
                    })
                    .state('app.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'app/partials/app_dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('app/js/controllers/dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('assets/vendor/font-awesome/css/font-awesome.css');
                                            }
                                          )/*.then(
                                          function(){
                                                return $ocLazyLoad.load('app/js/directives/ui-todowidget.js');
                                         }
                                      )*/
                                    ;
                                }
                            ]
                        }
                    })
                    .state('app.widgets', {
                        url: '/widgets',
                        templateUrl: 'app/partials/widgets.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['countTo',
                                        'app/js/controllers/countto.js', 
                                        'app/js/controllers/vectormap.js', 
                                        'app/js/directives/ui-todowidget.js', 
                                        'app/js/controllers/messages-widget.js',
                                        'assets/vendor/font-awesome/css/font-awesome.css'
                                    ]);
                                }
                            ]
                        }
                    })
                    .state('app.searchapp', {
                        url: '/searchapp',
                        templateUrl: 'app/partials/searchapp.html',
                    })
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('access.login', {
                        url: '/login',
                        templateUrl: 'app/partials/ui-login.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['app/js/controllers/login.js',
                                        'assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('access.register', {
                        url: '/register',
                        templateUrl: 'app/partials/ui-register.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['app/js/controllers/register.js','assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('access.forgotpwd', {
                        url: '/forgotpwd',
                        templateUrl: 'app/partials/ui-forgotpwd.html',
                    })
                    .state('access.404', {
                        url: '/404',
                        templateUrl: 'app/partials/ui-404.html',
                    })
                    .state('access.500', {
                        url: '/500',
                        templateUrl: 'app/partials/ui-500.html'
                    })
                    .state('access.lockscreen', {
                        url: '/lockscreen',
                        templateUrl: 'app/partials/ui-lockscreen.html'
                    })

                .state('app.ui', {
                        url: '/ui',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('app.ui.typography', {
                        url: '/typography',
                        templateUrl: 'app/partials/ui-typography.html'
                    })
                    .state('app.ui.accordion', {
                        url: '/accordion',
                        templateUrl: 'app/partials/ui-accordion.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.ui.progress', {
                        url: '/progress',
                        templateUrl: 'app/partials/ui-progress.html'
                    })
                    .state('app.ui.icons', {
                        url: '/icons',
                        templateUrl: 'app/partials/ui-icons.html'
                    })
                    .state('app.ui.materialicons', {
                        url: '/material-icons',
                        templateUrl: 'app/partials/ui-icons-material.html'
                    })
                    .state('app.ui.faicons', {
                        url: '/fontawesome-icons',
                        templateUrl: 'app/partials/ui-icons-fa.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.ui.glyphicons', {
                        url: '/glyph-icons',
                        templateUrl: 'app/partials/ui-icons-glyph.html'
                    })
                    .state('app.ui.buttons', {
                        url: '/buttons',
                        templateUrl: 'app/partials/ui-buttons.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.ui.modals', {
                        url: '/modals',
                        templateUrl: 'app/partials/ui-modals.html'
                    })
                    .state('app.ui.notifications', {
                        url: '/notifications',
                        templateUrl: 'app/partials/ui-notifications.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('cgNotify').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/notify.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.ui.tooltips', {
                        url: '/tooltips',
                        templateUrl: 'app/partials/ui-tooltips.html'
                    })
                    .state('app.ui.sortable', {
                        url: '/sortable',
                        templateUrl: 'app/partials/ui-sortable.html'
                    })
                    /*.state('app.ui.navbars', {
                        url: '/navbars',
                        templateUrl: 'app/partials/ui-navbars.html'
                    })*/
                    /*.state('app.ui.extra', {
                        url: '/extra',
                        templateUrl: 'app/partials/ui-extra.html'
                    })*/
                    .state('app.ui.pagination', {
                        url: '/pagination',
                        templateUrl: 'app/partials/ui-pagination.html'
                    })
                    .state('app.ui.breadcrumb', {
                        url: '/breadcrumb',
                        templateUrl: 'app/partials/ui-breadcrumb.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }                        
                    })
                    .state('app.ui.carousel', {
                        url: '/carousel',
                        templateUrl: 'app/partials/ui-carousel.html'
                    })
                    .state('app.ui.panels', {
                        url: '/panels',
                        templateUrl: 'app/partials/ui-panels.html'
                    })
                    .state('app.ui.grids', {
                        url: '/grids',
                        templateUrl: 'app/partials/ui-grids.html'
                    })
                    .state('app.ui.tiles', {
                        url: '/tiles',
                        templateUrl: 'app/partials/ui-tiles.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('countTo').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/countto.js');
                                        }
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('assets/vendor/font-awesome/css/font-awesome.css');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.form', {
                        url: '/form',
                        template: '<div ui-view class=""></div>'
                    })

                .state('app.form.elements', {
                        url: '/elements',
                        templateUrl: 'app/partials/form-elements.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.form.premade', {
                        url: '/premade',
                        templateUrl: 'app/partials/form-premade.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.form.components', {
                        url: '/components',
                        templateUrl: 'app/partials/form-components.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('colorpicker.module').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/colorpicker.js');
                                        }
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('assets/vendor/font-awesome/css/font-awesome.css');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.form.wizard', {
                        url: '/wizard',
                        templateUrl: 'app/partials/form-wizard.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.form.validation', {
                        url: '/validation',
                        templateUrl: 'app/partials/form-validation.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load('app/js/controllers/form-validation.js');
                                }
                            ]
                        }
                    })
                    .state('app.form.fileupload', {
                        url: '/fileupload',
                        templateUrl: 'app/partials/form-fileupload.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('angularFileUpload').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/file-upload.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.form.slider', {
                        url: '/slider',
                        templateUrl: 'app/partials/form-slider.html',
                        controller: 'FormSliderCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('vr.directives.slider').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/form-slider.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.form.editable', {
                        url: '/editable',
                        templateUrl: 'app/partials/form-editable.html',
                        controller: 'FormXeditableCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('xeditable').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/form-xeditable.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.form.editors', {
                        url: '/editors',
                        templateUrl: 'app/partials/form-editors.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                            /*,
                                                    controller: 'FormEditorCtrl',
                                                    resolve:  {
                                                        deps: ['$ocLazyLoad',
                                                          function( $ocLazyLoad ){
                                                            return $ocLazyLoad.load('textAngular').then(
                                                                function(){
                                                                    return $ocLazyLoad.load('app/js/controllers/form-editor.js');
                                                                }
                                                            );
                                                        }]
                                                    }*/
                    })
                    .state('app.form.masks', {
                        url: '/masks',
                        templateUrl: 'app/partials/form-masks.html'
                    })
                    .state('app.ui.calendar', {
                        url: '/calendar',
                        templateUrl: 'app/partials/ui-calendar.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('app/js/controllers/calendar.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })
                    .state('app.ui.pricing', {
                        url: '/pricing',
                        templateUrl: 'app/partials/ui-pricing.html'
                    })
                    .state('app.ui.profile', {
                        url: '/profile',
                        templateUrl: 'app/partials/ui-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.ui.timeline', {
                        url: '/timeline',
                        templateUrl: 'app/partials/ui-timeline.html'
                    })
                    .state('app.ui.invoice', {
                        url: '/invoice',
                        templateUrl: 'app/partials/ui-invoice.html'
                    })
                    .state('app.ui.members', {
                        url: '/members',
                        templateUrl: 'app/partials/ui-members.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['app/js/controllers/members.js', 'assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.ui.search', {
                        url: '/search',
                        templateUrl: 'app/partials/ui-search.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['app/js/filters/search-startfrom.js', 'app/js/controllers/search.js', 'app/js/directives/ui-searchtabs.js','assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.ui.blogs', {
                        url: '/blogs',
                        templateUrl: 'app/partials/ui-blogs.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['app/js/filters/blogs-startfrom.js', 'app/js/controllers/blogs.js','assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.ui.blogview', {
                        url: '/blog/{blogId:[0-9]{1,4}}',
                        templateUrl: 'app/partials/ui-blog-item.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['assets/vendor/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.ui.imagecrop', {
                        url: '/imagecrop',
                        templateUrl: 'app/partials/ui-imagecrop.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('ngImgCrop').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/imagecrop.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                   /* .state('app.ui.faq', {
                        url: '/faq',
                        templateUrl: 'app/partials/ui-faq.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['app/js/controllers/faq.js']);
                                }
                            ]
                        }
                    })*/
                    .state('app.mail', {
                        abstract: true,
                        url: '/mail',
                        //template: '<div ui-view class=""></div>',
                        templateUrl: 'app/partials/mail.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['assets/vendor/font-awesome/css/font-awesome.css', 'app/js/controllers/mail.js',
                                        'app/js/services/mail-service.js',
                                        JQ_CONFIG.moment
                                    ]);
                                }
                            ]
                        }
                    })
                    .state('app.mail.list', {
                        url: '/{fold}',
                        templateUrl: 'app/partials/mail-list.html'
                    })
                    .state('app.mail.compose', {
                        url: '/compose',
                        templateUrl: 'app/partials/mail-compose.html'
                    })
                    .state('app.mail.view', {
                        url: '/{mailId:[0-9]{1,4}}',
                        templateUrl: 'app/partials/mail-view.html'
                    })
                    .state('app.charts', {
                        url: '/charts',
                        template: '<div ui-view class=""></div>',
                    })
                    .state('app.charts.morris', {
                        url: '/morris',
                        templateUrl: 'app/partials/charts-morris.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('ngMorris').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/morris.js');
                                        }
                                    );
                                }
                            ]
                        }

                    })
                    .state('app.charts.chartjs', {
                        url: '/chartjs',
                        templateUrl: 'app/partials/charts-chartjs.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/chartjs.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.charts.flot', {
                        url: '/flot',
                        templateUrl: 'app/partials/charts-flot.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['app/js/controllers/flot-chart.js']);
                                }
                            ]
                        }
                    })
                    .state('app.charts.sparkline', {
                        url: '/sparkline',
                        templateUrl: 'app/partials/charts-sparkline.html'

                    })
                    .state('app.charts.easypiechart', {
                        url: '/easypiechart',
                        templateUrl: 'app/partials/charts-easypiechart.html'

                    })
                    .state('app.charts.rickshaw', {
                        url: '/rickshaw',
                        templateUrl: 'app/partials/charts-rickshaw.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['assets/vendor/d3/d3.min.js', 'angular-rickshaw'], {
                                        serie: true
                                    }).then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/rickshaw.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.tables', {
                        url: '/tables',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('app.tables.basic', {
                        url: '/basic',
                        templateUrl: 'app/partials/tables-basic.html'
                    })
                    .state('app.tables.data', {
                        url: '/data',
                        templateUrl: 'app/partials/tables-data.html'
                    })
                    .state('app.tables.footable', {
                        url: '/footable',
                        templateUrl: 'app/partials/tables-footable.html'
                    })
                    .state('app.tables.nggrid', {
                        url: '/nggrid',
                        templateUrl: 'app/partials/tables-nggrid.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('ngGrid').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/table-nggrid.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.tables.uigrid', {
                        url: '/uigrid',
                        templateUrl: 'app/partials/tables-uigrid.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('ui.grid').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/table-uigrid.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.tables.editable', {
                        url: '/editable',
                        templateUrl: 'app/partials/tables-editable.html',
                        controller: 'FormXeditableCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('xeditable').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/form-xeditable.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.tables.smart', {
                        url: '/smart',
                        templateUrl: 'app/partials/table-smart.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('smart-table').then(
                                        function() {
                                            return $ocLazyLoad.load('app/js/controllers/table-smart.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })

                .state('app.layout', {
                        url: '/layout',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('app.layout.default', {
                        url: '/default',
                        templateUrl: 'app/partials/layout-default.html'
                    })
                    .state('app.layout.collapsed', {
                        url: '/collapsed',
                        templateUrl: 'app/partials/layout-collapsed.html'
                    })
                    .state('app.layout.chat', {
                        url: '/chat',
                        templateUrl: 'app/partials/layout-chat.html'
                    })
                    .state('app.layout.boxed', {
                        url: '/boxed',
                        templateUrl: 'app/partials/layout-boxed.html'
                    })
                    .state('app.ui.vectormaps', {
                        url: '/vectormaps',
                        templateUrl: 'app/partials/ui-vectormaps.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('app/js/controllers/vectormap.js');
                                }
                            ]
                        }
                    })
                    .state('app.ui.googlemapfull', {
                        url: '/googlemapfull',
                        templateUrl: 'app/partials/ui-googlemapfull.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load([
                                        'app/js/map/load-google-maps.js',
                                        'app/js/map/ui-map.js',
                                        'app/js/map/map.js'
                                    ]).then(
                                        function() {
                                            return loadGoogleMaps();
                                        }
                                    );
                                }
                            ]
                        }

                    })
            }
        ]
    );
