angular.module('starter.controllers', [])

.controller('menuCtrl', function($scope) {
    $scope.try = function(){
      console.log('READY!');  
    };
    $scope.try();
})

.controller('homeCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('newacctCtrl', function($scope) {
    
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('menuCtrl', function($scope){
  $scope.openSub = function(name) {
    $scope.submenu = true;
    $scope.selection = 'sub';
  }
  $scope.backToMain = function() {
    $scope.submenu = false;
    $scope.selection = 'main';
  }    
});


  $scope.GotoLink = function (url) {
    window.open(link,'_system');
  }