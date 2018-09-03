var orderCount = 0;

function takeOrder(crustType, topping) {
  console.log('Order: ' + crustType + ' topped with ' + topping);
  orderCount++;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}


takeOrder('thin crust', 'cheese');
takeOrder('big crust', 'salami');
takeOrder('biggest crust', 'mozzarella');

console.log(".......................");
console.log("Subtotal Pizzas: " + getSubTotal(orderCount));
console.log("Total with Tax: " + getTotal());