const products = [
  {
    id: 1,
    title: 'Lenovo Yoga',
    price: 3000,
  },
  {
    id: 2,
    title: 'Acer Aspire',
    price: 1800,
  },
  {
    id: 3,
    title: 'Dell Vostro',
    price: 3400,
  },
];

let order = [];

function checkBasket(basket, id) {
  return !!basket.find((elem) => elem?.id === id);
}
function addToBasket(productId) {
  // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
  if (checkBasket(order, productId)) {
    alert('Товар уже в корзине');
    return;
  }

  // TODO: если товар еще не в корзине, добавить его из массива products
  order = [products.find((item) => item?.id === productId), ...order];
  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart();
  rerenderTotalPrice();
}

function removeFromBasket(productId) {
  // TODO: описать логику удаления товара из корзины
  const productIndex = order.findIndex((item) => item?.id === productId);
  if (productId > -1) {
    const newOrder = [...order];
    newOrder.splice(productIndex, 1);
    order = newOrder;
  }
  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart();
  rerenderTotalPrice();
}

function rerenderTotalPrice() {
  // TODO: опишите функционал подсчета общей стоимости заказа
  const totalPrice = order.reduce((acc, item) => acc + item?.price, 0);
  // Не меняйте эту строчку
  document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
  const cart = document.getElementById('basket-items');

  cart.innerHTML = '';
  order.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.title;
    el.onclick = () => removeFromBasket(item.id);
    cart.appendChild(el);
  });
}
