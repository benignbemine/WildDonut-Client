(function(){

  angular
    .module('wildDonut')
    .factory('Authenticator', Authenticator);

  Authenticator.$inject = ['$http', 'State', 'Facebook', '$window'];

  function Authenticator($http, State, Facebook, $window){

    var instance = {
      login: login,
      signup: signup,
      facebookLogin: facebookLogin,
      logout: logout
    };

    return instance;

    // implementation of functions
    function login(user){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/login/',
        withCredentials: true,
        data: user,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        State.username = response.data.username;
        State.user_id = response.data._id;
        State.isTeacher = response.data.teacher;
        console.log(State);
        console.log(response);
        return response;
      });
    }

    function signup(user){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/signup',
        data: user,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        State.username = response.data.username;
        State.user_id = response.data._id;
        State.isTeacher = response.data.teacher;
        return response;
      });
    }

    function facebookLogin(callback){
      Facebook.login(function(response){
        State.access_token = response.authResponse.accessToken;
        return $http({
          method: 'POST',
          url: 'http://localhost:4568/api/users/login/',
          data: State,
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(function(response){
          State.username = response.data.username;
          State.user_id = response.data._id;
          State.isTeacher = response.data.teacher;
          console.log(State);
          console.log(response);
          callback(response);
        });
      });
    }

    function logout(){
      return $http({
        method: 'POST',
        url: 'http://localhost:4568/api/users/logout/',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(response){
        State = {};
        return response;
      });
    }

  }

})();
