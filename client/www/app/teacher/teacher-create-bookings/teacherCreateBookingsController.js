(function(){

  angular
    .module('wildDonut')
    .controller('TeacherCreateBookingsController', TeacherCreateBookingsController);

  TeacherCreateBookingsController.$inject = ['$scope', 'BookingHandler'];

  function TeacherCreateBookingsController($scope, BookingHandler){

    $scope.available = [];

    $scope.createClass = function(){
      BookingHandler.createClass($scope.class);
    };

    $scope.addBooking = function(){
      $scope.class.available.push({start_time: $scope.start, end_time: $scope.end});
      $scope.start = '';
      $scope.end = '';
    };
  }

})();
