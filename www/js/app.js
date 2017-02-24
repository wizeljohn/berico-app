// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.factory'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $(document).ready(function() {
            $('.back-button').parent().addClass('int-header');
            console.log('READY!');
        }
    );
      
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.acct', {
      url: '/newacct',
      views: {
        'menuContent': {
            templateUrl: 'templates/newacct.html',
            controller: 'newacctCtrl'
        }
      }
    })
  .state('app.propane-delivery-services', {
      url: '/propane-delivery-services',
      views: {
        'menuContent': {
          templateUrl: 'templates/propane-delivery-services.html'
        }
      }
    })
  .state('app.heating-AC-repair', {
      url: '/heating-AC-repair',
      views: {
        'menuContent': {
          templateUrl: 'templates/heating-AC-repair.html'
        }
      }
    })
  .state('app.schedule-fuel-delivery', {
      url: '/schedule-fuel-delivery',
      views: {
        'menuContent': {
            templateUrl: 'templates/schedule-fuel-delivery.html',
            controller: 'newacctCtrl'
        }
      }
    })
  .state('app.schedule-hvac-service', {
      url: '/schedule-hvac-service',
      views: {
        'menuContent': {
            templateUrl: 'templates/schedule-hvac-service.html',
            controller: 'newacctCtrl'
        }
      }
    })
  .state('app.motor-oil-and-lubricants', {
      url: '/motor-oil-and-lubricants',
      views: {
        'menuContent': {
          templateUrl: 'templates/motor-oil-and-lubricants.html'
        }
      }
    })
  .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html'
        }
      }
    })
  .state('app.meet-our-service-team', {
      url: '/meet-our-service-team',
      views: {
        'menuContent': {
          templateUrl: 'templates/meet-our-service-team.html'
        }
      }
    })
  .state('app.commercial-fueling', {
      url: '/commercial-fueling',
      views: {
        'menuContent': {
          templateUrl: 'templates/commercial-fueling.html'
        }
      }
    })
  .state('app.specials', {
      url: '/specials',
      views: {
        'menuContent': {
          templateUrl: 'templates/specials.html'
        }
      }
    })
    .state('app.home', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
