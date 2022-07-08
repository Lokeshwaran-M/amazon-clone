
/**
 * 
 * 
 */



(function (root, fun) {
  root["users"] = fun();
})(window, function () {
  var USER = {
    userList: [],
    productCart: [],
  };
  var currentUser;

  signin = function (user, pwd) {
    var occur = false;
    for (var i = 0; i < USER.userList.length; i++) {
      if (USER.userList[i].name === user || USER.userList[i].pwd === pwd) {
        currentUser = null;
        occur = true;
        return "alredy signed as user : " + user + " check the passward";
      }
    }
    if (occur === false) {
      USER.userList.push({
        name: user,
        pwd: pwd,
      });
      currentUser = user;
      return "signed in user : " + user;
    }
  };

  var login = function (user, pwd) {
    var occur = false;
    for (var i = 0; i < USER.userList.length; i++) {
      if (USER.userList[i].name === user && USER.userList[i].pwd === pwd) {
        currentUser = user;
        
        occur = true;
        return"logged in user : " + user;
      }
    }
    if (occur === false) {
      console.log("given user name or password is wrong or u didnt signed in");
      currentUser = null;
      console.log("try login aggain");
    }
  };
  var logout = function () {
    currentUser = null;
    return "Successfully logged out.";
  };

  var getLoggedInUser = function () {
    return currentUser;
  };

  return {
    signin: signin,
    login: login,
    logout: logout,
    getLoggedInUser: getLoggedInUser,
  };
});



