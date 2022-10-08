const addToDb = (id) => {
  const exists = getDb();
  //getItem("keyname") returns the value of the Stored Object item.
  let food_cart = {};
  if (!exists) {
    food_cart[id] = 1;
  } else {
    food_cart = JSON.parse(exists);
    if (food_cart[id]) {
      const newCount = food_cart[id] + 1;
      food_cart[id] = newCount;
    } else {
      food_cart[id] = 1;
    }
  }
  updateDb(food_cart);
};

const updateDb = (cart) => {
  localStorage.setItem("food_cart", JSON.stringify(cart));
};
const getDb = () => localStorage.getItem("food_cart");
const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

export { addToDb, updateDb, getStoredCart };
