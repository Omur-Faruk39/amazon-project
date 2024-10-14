import { products } from "../data/products.js";
import { cart } from "./cart.js";

const mainTag = document.querySelector('main');
const cartElm = document.querySelector('.cart-image-div > p');

const cartCounter = () => {
  cartElm.innerHTML = cart.length;
};

const renderProducts = () => {
  products.forEach(product => {
    mainTag.innerHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>
        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>
        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count">
            ${product.rating.count}
          </div>
        </div>
        <div class="product-price">
          <span>$</span>${(product.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-quantity-container">
          <select class="js-quantity">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div class="product-spacer"></div>
        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>
        <button class="js-add-btn" value="${product.id}">
          Add to Cart
        </button>
      </div>`;
  });

document.querySelectorAll('.js-add-btn').forEach(btn => {
    btn.addEventListener("click", () => {
      const select = btn.closest('.product-container').querySelector('.js-quantity');
      if (Number(select.value) + cart.length < 10) {
        for (let i = 0; i < select.value;i++) {
          cart.push(btn.value);
        }
      } else {
        alert('Cart is out of range')
      }
      cartCounter();
    });
  });

  cartCounter();
};

document.addEventListener('DOMContentLoaded', renderProducts);