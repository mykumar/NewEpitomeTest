// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   'assets/vendor/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      plot:           [   'assets/vendor/flot/jquery.flot.js',
                          'assets/vendor/flot/jquery.flot.pie.js', 
                          'assets/vendor/flot/jquery.flot.resize.js',
                          'assets/vendor/flot.tooltip/js/jquery.flot.tooltip.js',
                          'assets/vendor/flot.orderbars/js/jquery.flot.orderBars.js',
                          'assets/vendor/flot-spline/js/jquery.flot.spline.js'],
      knob:           [   'assets/vendor/jquery-knob/dist/jquery.knob.min.js', 'js/jq/chart-knobs.js'],
      isotobe:          [  'js/uport_isotobe.js',
                            'js/uport_isotobe_script.js'],
      dataTable:      [   'assets/vendor/datatables/media/js/jquery.dataTables.min.js',
                          'assets/vendor/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          'assets/vendor/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      footable:       [ 'assets/vendor/footable/dist/footable.all.min.js',
                          'assets/vendor/footable/css/footable.core.css'],
      fullcalendar:   [   'assets/vendor/moment/moment.js',
                          'assets/vendor/fullcalendar/dist/fullcalendar.min.js',
                          'assets/vendor/fullcalendar/dist/fullcalendar.css',],
      vectorMap:      [   'assets/vendor/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          'assets/vendor/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          'assets/vendor/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          'assets/vendor/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      sortable:       [   'assets/vendor/html5sortable/jquery.sortable.js'],
      nestable:       [   'assets/vendor/nestable/jquery.nestable.js'],
      moment:         [   'assets/vendor/moment/moment.js'],
      daterangepicker:[   'assets/vendor/moment/moment.js',
                          'assets/vendor/bootstrap-daterangepicker/daterangepicker.js',
                          'assets/vendor/bootstrap-daterangepicker/daterangepicker.css'],
      tagsinput:      [ 'assets/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          'assets/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css'],
      jqueryui:        [  'assets/vendor/jquery-ui/ui/minified/jquery-ui.min.js',
                          'assets/vendor/jquery-ui/themes/smoothness/jquery-ui.css',
                          'js/controllers/ui.slider.js'],
      TouchSpin:      [   'assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          'assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      chosen:         [   'assets/vendor/chosen/chosen.jquery.min.js',
                          'assets/vendor/bootstrap-chosen/bootstrap-chosen.css'],
      wysiwyg:        [   'assets/vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          'assets/vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      sparkline:       [   'assets/vendor/jquery.sparkline/dist/jquery.sparkline.retina.js']
    }
  )

  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngMorris',
                  files: [
                      'assets/vendor/raphael/raphael.js',
                      'assets/vendor/mocha/mocha.js',
                      'assets/vendor/morrisjs/morris.js',
                      'assets/vendor/ngmorris/src/ngMorris-full.js',
                      'assets/vendor/morrisjs/morris.css'
                  ]
              },
              {
                  name:'cgNotify',
                  files: [
                      'assets/vendor/angular-notify/dist/angular-notify.min.js',
                      'assets/vendor/angular-notify/dist/angular-notify.min.css'
                  ]
              },
              {
                  name:'countTo',
                  files: [
                      'assets/vendor/angular-count-to/build/angular-count-to.min.js'
                  ]
              },
                                      
              {
                  name:'angularFileUpload',
                  files: [
                    'assets/vendor/angular-file-upload/dist/angular-file-upload.min.js'
                  ]
              },
              /*{
                  name: 'textAngular',
                  series: true,
                  files: [
                      'assets/vendor/textAngular/dist/textAngular.css',
                      'assets/vendor/textAngular/dist/textAngular-rangy.min.js',
                      'assets/vendor/textAngular/dist/textAngular.min.js'
                  ]
              },*/
              {
                  name: 'vr.directives.slider',
                  files: [
                      'assets/vendor/venturocket-angular-slider/build/angular-slider.min.js',
                      'assets/vendor/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'ngGrid',
                  files: [
                      'assets/vendor/ng-grid/build/ng-grid.min.js',
                      'assets/vendor/ng-grid/ng-grid.min.css',
                      'assets/vendor/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      'assets/vendor/angular-ui-grid/ui-grid.min.js',
                      'assets/vendor/angular-ui-grid/ui-grid.min.css'
                  ]
              },
              {
                  name: 'chart.js',
                  files: [
                      'assets/vendor/angular-chart.js/dist/angular-chart.js',
                      'assets/vendor/angular-chart.js/dist/angular-chart.css'
                  ]

              },
              {
                  name: 'angular-rickshaw',
                  files: [
                    'assets/vendor/rickshaw/rickshaw.min.css',
                    'assets/vendor/rickshaw/rickshaw.min.js',
                    'assets/vendor/angular-rickshaw/rickshaw.js'
                  ]

              },
              {
                  name: 'xeditable',
                  files: [
                      'assets/vendor/angular-xeditable/dist/js/xeditable.min.js',
                      'assets/vendor/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['assets/vendor/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      'assets/vendor/ngImgCrop/compile/minified/ng-img-crop.js',
                      'assets/vendor/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'colorpicker.module',
                  files: [
                      'assets/vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
                      'assets/vendor/angular-bootstrap-colorpicker/css/colorpicker.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      'assets/vendor/angular-smart-table/dist/smart-table.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      'assets/vendor/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      'assets/vendor/videogular-controls/vg-controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      'assets/vendor/videogular-buffering/vg-buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      'assets/vendor/videogular-overlay-play/vg-overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      'assets/vendor/videogular-poster/vg-poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      'assets/vendor/videogular-ima-ads/vg-ima-ads.min.js'
                  ]
              }
          ]
      });
  }])
;
