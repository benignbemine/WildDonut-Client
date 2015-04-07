(function(){

  angular
    .module('wildDonut')
    .factory('BookingHandler', BookingHandler);

  BookingHandler.$inject = ['$http','State'];

  function BookingHandler($http, State){

    var instance = {
      createClass: createClass,
      getTeacherBookings: getTeacherBookings,
      getStudentBookings: getStudentBookings
    };

    return instance;

    ////////////////////////////
    ////// IMPLEMENTATION //////
    ////////////////////////////

    function createClass(classInformation){
      return $http({
        method: 'POST',
        url: '/api/users/' + State.user.name,
        data: classInformation
      }).then(function(response) {
        return response;
      });
    }

    function getTeacherBookings(){
      return $http({
        method: 'GET',
        url: '/api/bookings/teacher/' + State.user.name,
      }).then(function(response){
        return response;
      });
    }

    function getStudentBookings(){
      return $http({
        method: 'GET',
        url: '/api/bookings/student/' + State.user.name,
      }).then(function(response){
        return response;
      });
    }
  }

})();