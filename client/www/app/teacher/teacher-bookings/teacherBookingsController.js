(function(){

  angular
    .module('wildDonut')
    .controller('TeacherBookingsController', TeacherBookingsController);

  TeacherBookingsController.$inject = ['$scope', 'State'];

  function TeacherBookingsController($scope, State){
    //should be asynchronous, need to set $scope variable
    //to the result
    BookingHandler.getBookings(State.user);
  }
})();

