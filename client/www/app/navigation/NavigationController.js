(function(){

  angular
    .module('wildDonut')
    .controller('NavigationController', NavigationController);

  NavigationController.$inject = ['$scope', '$location', 'State', 'Authenticator'];

  function NavigationController($scope, $location, State, Authenticator){
    $scope.login = function(){
      $location.path('/login');
    };

    $scope.signup = function(){
      $location.path('/signup');
    };

    $scope.browse = function(){
      $location.path('/browse');
    };

    $scope.profile = function(){
      $location.path('/'+ State.username +'/profile');
    };

    $scope.profileSettings = function(){
      $location.path('/'+ State.username +'/profile/settings');
    };

    $scope.studentSchedule = function(){
      $location.path('/' + State.username + '/student/schedule/manage');
    };

    $scope.manageClasses = function(){
      $location.path('/'+ State.username +'/teacher/classes/manage');
    };

    $scope.teacherSchedule = function(){
      $location.path('/' + State.username + '/teacher/classes/booked');
    };

    $scope.createClass = function(){
      $location.path('/' + State.username + '/teacher/classes/new');
    };

    $scope.editClass = function(classID){
      $location.path('/' + State.username + '/teacher/classes/' + classID + '/edit');
    };

    $scope.viewClass = function(classID){
      $location.path('/' + State.username + '/teacher/classes/' + classID);
    };

    $scope.pay = function(){
      $location.path('/pay');
    };

    $scope.review = function(){
      $location.path('/review');
    };

    $scope.logout = function(){
      Authenticator.logout().then(function(response){
        $location.path('/login');
      });
    };

    // Logic to show or hide side menu icon
    // Uses show-element and hide-element css classes
    $scope.showSideMenuButton = function() {
      if (
        $location.path() === '/' ||
        $location.path() === '/' + State.username + '/teacher/classes/booked' ||
        $location.path() === '/' + State.username + '/teacher/classes/manage' ||
        $location.path() === '/'  + State.username + '/student/schedule/manage'
        ) 
      {
        return 'show-element';
      }
    };

    // Logic to show action buttons on right side of nav header bar
    $scope.showActionButton = function() {
      var showButton = ($location.path() === '/' + State.username + '/teacher/classes/booked');
      return showButton ? 'button button-icon icon ion-ios-gear' : 'hide-element';
    };
  }

})();
