/**
 * ### requirements
    - home page
    - Signup Page
    - Login Page
    - Cart
    - Product Page
    - Order History
 */

// initial login
/**
 * user data structure
 *     +user
 *       +name
 *          -password
 *
 */
var USER = {
    userList:[],
    productCart : []
};
function login(user, pwd) {

  USER.userList.push({
    name : user,
    pwd : pwd
  })
  USER.currentUser = user
}

var PRODUCTS = ["pen", "box", "car"];
function productsDisplay() {
  for (var i = 0; i < PRODUCTS.length; i++) {
    console.log(PRODUCTS[i]);
  }
}

function productCart(product) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if ((product === PRODUCTS[i])) {
      USER.productCart.push(product)
    }
  }
}

function orderHistory() {

    console.log(USER.productCart);
}

//   main function

function main() {
  login("lok", "123");
  productsDisplay();
  productCart("car");
  orderHistory();
}
main();
