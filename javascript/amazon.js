import { products } from "../data/products.js";

const renderDiv = document.querySelector('.products-grid');


function renderProducts() {
  for (const product of products) {
    renderDiv.innerHTML += `
    
    
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <p class="product-name limit-text-to-2-lines">
            ${product.name}
          </p>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <p class="product-rating-count link-primary">
              ${product.rating.count}
            </p>
          </div>

          <p class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </p>

          <form class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </form>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>


    `;
  }
}

renderProducts();