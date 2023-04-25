// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const rectangleArea = (w, h) => {
  const result = w * h
  return result
}

const rectanglePerimeter = (w, h) => {
 const result = (w + h) * 2
 return result
}

const circleArea = r => {
  const result = Math.PI * r ** 2
  return result
}


module.exports = {
  sayHello,
  rectangleArea,
  rectanglePerimeter,
  circleArea
}
// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
    // return the current state of shopping cart
  return shoppingCart;

}

const addItemToCart = (item) => {
  //  add item to shopping cart
  shoppingCart = [...shoppingCart, item];
  const item = createItem("Product", 10);
  addItemToCart(item);
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  total_quantity = arr.length;
  console.log(total_quantity);
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  shoppingCart = shoppingCart
  
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
