import { cart } from "./cart.js";
import { products } from "../data/products.js";

const mainElm = document.querySelector('.order-item');
const heading = document.querySelector('main > p');

const cartProduct = () => {
  products.forEach(product => {
    if (cart.length) {
      cart.forEach(id => {
        if (product.id === id) {
          mainElm.innerHTML += `
            <div class="review-section">
              <p class="delivery-date-para">Delivery date: ${dayjs().format('dddd, D MMMM')}</p>
              <div class="product-info">
                <div>
                  <img src="${product.image}" alt="Products image">
                </div>
                <div class="product-text-info">
                  <p>${product.name}</p>
                  <p>$${(product.priceCents / 100).toFixed(2)}</p>
                  <p>Quantity: 2 <span>Update</span> <span>Delete</span></p>
                </div>
                <div>
                  <form>
                    <p>Choose a delivery option:</p>
                    <label>
                      <input type="radio" name="option" value="option1" checked>
                      <p>${dayjs().add(7, 'day').format('dddd, D MMMM')}<br><span>FREE Shipping</span></p>
                    </label>
                    <label>
                      <input type="radio" name="option" value="option2">
                      <p>${dayjs().add(3, 'day').format('dddd, D MMMM')}<br><span>$4.99-Shipping</span></p>
                    </label>
                    <label>
                      <input type="radio" name="option" value="option3">
                      <p>${dayjs().add(1, 'day').format('dddd, D MMMM')}<br><span>$9.99-Shipping</span></p>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          `;
        }
      });
    } else {
      heading.innerHTML = "Your cart in empty"
    }
    
  })
};

cartProduct();