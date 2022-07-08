//********************************************* */
/**
 * ### requirements
    - home page
    - Signup Page
    - signin Page
    - Cart
    - Product Page
    - Order History
 */

// initial signin
/**
 * user data structure
 *     +user
 *       +name
 *          -password
 *
 */
var USER = {
  userList: [],
  productCart: [],
};
var currentUser;

function signin(user, pwd) {
  var occur = false;
  for (var i = 0; i < USER.userList.length; i++) {
    if (USER.userList[i].name === user || USER.userList[i].pwd === pwd) {
      console.log("alredy signed as user : " + user + " check the passward");
      currentUser = null;
      occur = true;
    }
  }
  if (occur === false) {
    USER.userList.push({
      name: user,
      pwd: pwd,
    });
    currentUser = user;
    console.log("signed in user : " + user);
  }
}
function login(user, pwd) {
  var occur = false;
  for (var i = 0; i < USER.userList.length; i++) {
    if (USER.userList[i].name === user && USER.userList[i].pwd === pwd) {
      currentUser = user;
      console.log("logged in user : " + user);
      occur = true;
    }
  }
  if (occur === false) {
    console.log("given user name or password is wrong or u didnt signed in");
    currentUser = null;
    console.log("try login aggain");
  }
}

var PRODUCTS = ["pen", "box", "car"];
// function to add product to the product display pannel
function addProduct(product) {
  var occur = false;
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (product === PRODUCTS[i]) {
      console.log("product alredy exist");
      occur = true;
    }
  }
  if (occur === false) {
    PRODUCTS.push(product);
  }
}
function productsDisplay() {
  for (var i = 0; i < PRODUCTS.length; i++) {
    console.log(PRODUCTS[i]);
  }
}

function productCart(product) {
  if (currentUser === null) {
    console.log("login or sign in");
  } else {
    var occur = false;
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (product === PRODUCTS[i]) {
        if (USER.productCart.length === 0) {
          USER.productCart.push({ [currentUser]: [product] });
        } else {
          for (var j = 0; j < USER.productCart.length; j++) {
            var keysa = Object.keys(USER.productCart[j]);

            if (keysa[0] === currentUser) {
              USER.productCart[j][keysa[0]].push(product);

              occur = true;
            }
          }
          if (occur === false) {
            USER.productCart.push({ [currentUser]: [product] });
          }
        }
      }
    }
  }
}

function orderHistory() {
  var occur = false;
  for (var i = 0; i < USER.productCart.length; i++) {
    var keysa = Object.keys(USER.productCart[i]);

    if (keysa[0] === currentUser) {
      console.log(USER.productCart[i]);

      occur = true;
    }
  }
  if (occur === false) {
    console.log("login or sign in");
  }
}

//   main function

function main() {
  // const name = document.getElementById('name');
  signin("lok", "123");
  productsDisplay();
  productCart("car");
  productCart("box");
  orderHistory();
  signin("neo", "abc");
  productsDisplay();
  productCart("pen");
  productCart("car");
  orderHistory();
  login("lok", "123");
  productCart("pen");
  orderHistory();
  addProduct("tin");
  productsDisplay();

  signin("lok", "128");
  productsDisplay();

  productCart("car");
  productCart("box");
  orderHistory();
  login("tim", "nn");
  productCart("tin");
  orderHistory();
}
main();

console.log(USER);

//********************************************* */
