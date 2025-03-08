let addToCart = () => {
  return "Added to the Cart.";
};

let increaseQuantity = () => {
  return 5;
};

var b = 435

// module.exports = addToCart; //* Default Export
module.exports = {addToCart,increaseQuantity,b}; //* Named Export
