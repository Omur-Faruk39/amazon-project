export const cart = JSON.parse(localStorage.getItem("cartId")) || [];

export const itemSetLocal = () => { localStorage.setItem("cartId", JSON.stringify(cart)); };
