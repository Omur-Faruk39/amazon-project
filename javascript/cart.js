export const cart = [{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 3
}, {
  id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  quantity: 1
}];


export function addCartEventListeners(btns, cartRenderPara) {
  btns.forEach(addBtn => {
    addBtn.addEventListener('click', () => {
      const productId = addBtn.dataset.productId;
      const selectElm = addBtn.closest('.product-container').querySelector('select');
      const selectedQuantity = Number(selectElm.value);

      if ((cartRender() + selectedQuantity) > 99) {
        console.log('cart is full');
      } else {
        let productExists = false;
        for (const product of cart) {
          if (product.id === productId) {
            product.quantity += selectedQuantity;
            productExists = true;
            break;
          }
        }

        if (!productExists) {
          cart.push({
            id: productId,
            quantity: selectedQuantity
          });
        }

        console.log(cart);
        
      }
      cartRenderPara.innerHTML = cartRender();
    });
  });
}


export function cartRender() {
  let quantity = 0;
  cart.forEach(cartItem => {
    quantity += cartItem.quantity;
  });
  return quantity;
}
