app.controller('MainController', ['$scope', function($scope) {
  $scope.hola = 'Hola!';
  $scope.login_request = "If you would like order a pizza, please enter your information to log in or create an account";
  $scope.header_bar_placeholder = "CRAZY GOOD PIZZA!";
  $scope.my_org_logo = "https://theaccidentalpeach.files.wordpress.com/2013/02/017.jpg";
  $scope.contact_us = "Contact options";
  $scope.orders_option = "Orders";
  $scope.orders_option_new = "New order";
  $scope.orders_option_previous = "Previous orders"
  $scope.orders_option_del_map = "Delivery map";
  $scope.login_or_create_profile = "Login/Sign up";

  $scope.login_prompt_auth0_lock = () => {
  // Initialize app
  var webAuth = new auth0.WebAuth({
    domain:       'dev-h4kt987k.auth0.com',
    responseType: 'token',
    clientID:     'zBAH3zfnZHt62iSveF3RPZ1vOtUWUoeR',
    redirect_uri: 'https://google.com'
  });

  // Trigger login with google
  webAuth.authorize({
    connection: 'google-oauth2'
  });

  // Trigger login with github
  // webAuth.authorize({
  //   connection: 'github'
  // });

  // Trigger login popup with twitter
  // webAuth.popup.authorize({
  //   connection: 'twitter'
  // });
  }

    $("#search-order-button").click(function(){
        alert('This search option does not work yet');
      });

    // const loginPrompt = () => {
    //   alert("This will be the login prompt!");
    // }

}]);
