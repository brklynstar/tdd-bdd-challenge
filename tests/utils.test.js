const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectangle", function() {
  const result =utils.rectangleArea(4,6)
  expect(result).to.be.a("number")
  expect(result).to.equal(24)
  })

it("should Perimeter should return the perimeter of a rectangle", function() {
  const result =utils.rectanglePerimeter(5,5)
  expect(result).to.be.a("number")
  expect(result).to.equal(10)
})

it("should return the area of a circle with radius", function() {
  const result =utils.circleArea(5)
  expect(result).to.be.a("number")
  expect(result).to.equal(Math.PI * Math.pow(5,2))
})

it("should return negative widths as null", function() {
  const result =utils.rectangleArea(-5, 4)
  expect(result).to.equal("null")
  
})

it("should return negative breadths as null", function() {
  const result =utils.rectangleArea(-5, 4)
  expect(result).to.be("null")
  
})

it("should return negative radii as null", function() {
  const result =utils.circleArea(-5)
  expect(result).to.be("null")
  
})



beforeEach((done) => {
  utils.clearCart()
  done()
})


it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a('object')
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price",0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should add a new item to the shopping cart", function() {
  const new_item = utils.createItem("apple", 0.99)
  utils.addItemToCart(new_item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.an("array")
  expect(cart).to.deep.include({name: "apple", price: 0.99, quantity: 1})

})

it("Should return the number of items in the cart", function() {
  const new_item = utils.createItem("banana", 0.99)
  utils.addItemToCart(new_item)
  const new_item2 = utils.createItem("apple", 0.99)
  utils.addItemToCart(new_item2)
  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.be.equal(2);

})


it("Should remove items from cart", function(){
  const new_item = utils.createItem("banana", 0.99)
  utils.addItemToCart(new_item)
  const new_item2 = utils.createItem("apple", 0.99)
  utils.addItemToCart(new_item2)
  utils.removeItemFromCart(new_item)
  const cart = utils.getShoppingCart()
  expect(cart).to.not.contain(new_item)

})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
