function takeOrder(newOrder, deliveryOrders)  {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(newOrder)
}
  return deliveryOrders
}

function refundOrder(orderNumber, deliveryOrders) {
  for(let i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice([i],1);
      return deliveryOrders
    }
  }
}

function listItems(deliveryOrders) {
  var items = []
  for(let i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
  return items.join(", ")
}

function searchOrder(deliveryOrders, item) {
  var order = false
  for(let i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === item) {
    order = true
    }
  }
  return order
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
