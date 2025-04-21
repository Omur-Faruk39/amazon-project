import products from "../data/products.js";
import createHeader from "./header.js";

const mainDiv = document.querySelector(".products-grid");
const header = document.querySelector(".amazon-header");

createHeader(header);

products.forEach((product) => {
  mainDiv.innerHTML += `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
              alt="${product.name}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${product.priceCents / 100}</div>

          <div class="product-quantity-container">
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
          </div>


          <button class="add-to-cart-button button-primary" value="${
            product.id
          }">Add to Cart</button>
        </div>`;
});

const buttons = document.querySelectorAll(".add-to-cart-button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const id = event.target.value;
    const countity =
      event.target.previousElementSibling.querySelector("select").value;
    addToCart(id, countity);
  });
});

function addToCart(id, countity) {
  const storageData = JSON.stringify(
    localStorage.getItem("card") || {
      products: [{ id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", countity: 2 }],
      countity: 0,
    }
  );

  const isExists = storageData.products.find((item) => item.id === id);

  console.log(isExists);

  // if (isExists) {
  //   isExists.countity += countity;
  // } else {
  //   const product = products.find((item) => item.id === id);
  //   storageData.products.push({ ...product, countity });
  // }
}
