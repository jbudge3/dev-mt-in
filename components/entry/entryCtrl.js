angular.module('devMtnSocial').controller('entryCtrl', function($scope, newUserService) {

  $scope.newUserSubmit = function() {
    newUserService.newUser.push({
      name: $scope.userName,
      tagline: $scope.tagline,
      image: $scope.profileImg,
      bio: $scope.bio
    });
  }



});
