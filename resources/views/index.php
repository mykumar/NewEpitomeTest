<!DOCTYPE html>
<html lang="en" ng-app="app" class="no-js {{app.settings.layoutBoxed ? 'boxed' : ''}}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Slant Admin - Angular | Social Media</title>
    <meta name="description" content="AngularJs Bootstrap Admin Theme, Angular, Admin, Admin theme">
    <meta name="keywords" content="AngularJS" , "admin", "widgets", "admin panel", "flat ui", "ui", "web app", "app", "backend", "angular", "dashboard", "bootstrap", "charts", "ui kit", "responsive" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
    <!-- Favicon -->
    <!-- CSS FRAMEWORK - START -->
    <link rel='stylesheet' href='assets/vendor/angular-loading-bar/build/loading-bar.min.css' type='text/css' media='all' />
    <!-- Angular Loader -->
    <link href="assets/vendor/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/vendor/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css" />
    <!--     <link href="assets/vendor/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" /> -->
    <link href="app/css/material-icons.css" rel="stylesheet" type="text/css" />
    <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/vendor/angular-ui-select/dist/select.css" rel="stylesheet" type="text/css" />
    <!-- CSS FRAMEWORK - END -->
    <link rel="stylesheet" href="app/css/app.style8.css">
</head>

<body ng-controller="AppCtrl" class="{{app.settings.layoutBoxed ? 'boxed' : ''}}">
    <div ui-view></div>
    <!-- JS FRAMEWORK - START -->
    <script src="assets/vendor/jquery/dist/jquery.min.js" type="text/javascript"></script>
    <!-- Angular Scripts -->
    <script src="assets/vendor/angular/angular.js"></script>
    <script src="assets/vendor/angular-animate/angular-animate.js"></script>
    <!--    <script src="assets/vendor/angular-cookies/angular-cookies.js"></script>-->
    <!--    <script src="assets/vendor/angular-resource/angular-resource.js"></script>-->
        <script src="assets/vendor/angular-sanitize/angular-sanitize.js"></script>
    <script src="assets/vendor/angular-touch/angular-touch.js"></script>
    <script src="assets/vendor/angular-ui-router/release/angular-ui-router.js"></script>
    <!--<script src="assets/vendor/ngstorage/ngStorage.js"></script>-->
    <script src="assets/vendor/angular-ui-utils/ui-utils.js"></script>
    <script src="assets/vendor/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <!-- Angular ui bootstrap -->
    <script src="assets/vendor/oclazyload/dist/ocLazyLoad.js"></script>
    <!-- lazyload -->
    <script type='text/javascript' src='assets/vendor/angular-loading-bar/build/loading-bar.min.js'></script>
    <script src="assets/vendor/perfect-scrollbar/min/perfect-scrollbar.min.js" type="text/javascript"></script>
    <script src="assets/vendor/angular-perfect-scrollbar/src/angular-perfect-scrollbar.js" type="text/javascript"></script>
    <script src="assets/vendor/angular-inview/angular-inview.js" type="text/javascript"></script>
    <script src="assets/vendor/angular-ui-select/dist/select.js" type="text/javascript"></script>
    <!-- JS FRAMEWORK - END -->
    <!-- App JS - Start -->
    <script src="app/js/app.js"></script>
    <script src="app/js/app.config.js"></script>
    <script src="app/js/app.lazyload.js"></script>
    <script src="app/js/app.router.custom.js"></script>
    <script src="app/js/app.main.custom.js"></script>
    <script src="app/js/services/ui-load.js"></script>
    <script src="app/js/filters/moment-fromNow.js"></script>
    <script src="app/js/directives/nganimate.js"></script>
    <script src="app/js/directives/ui-jq.js"></script>
    <script src="app/js/directives/ui-module.js"></script>
    <script src="app/js/directives/ui-nav.js"></script>
    <script src="app/js/directives/ui-bootstrap.js"></script>
    <script src="app/js/directives/ui-chatwindow.js"></script>
    <script src="app/js/directives/ui-sectionbox.js"></script>
    <script src="app/js/controllers/bootstrap.js"></script>
    <script src="app/js/controllers/topbar.js"></script>
    <script src="app/js/controllers/chat.js"></script>
    <!-- App JS - End -->
    <script src='assets/vendor/Chart.js/Chart.js'></script>
</body>

</html>
