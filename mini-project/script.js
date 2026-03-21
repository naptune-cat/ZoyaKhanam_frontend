//our product DS
let productsList = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    stock: 5,
    category: "electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    stock: 8,
    category: "electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    stock: 3,
    category: "electronics",
  },
  {
    id: 4,
    name: "T-Shirt",
    price: 500,
    stock: 10,
    category: "clothing",
  },
  {
    id: 5,
    name: "Jeans",
    price: 1200,
    stock: 4,
    category: "clothing",
  },
  {
    id: 6,
    name: "Jacket",
    price: 2500,
    stock: 0,
    category: "clothing",
  },
  {
    id: 7,
    name: "Book - JavaScript Basics",
    price: 350,
    stock: 7,
    category: "books",
  },
  {
    id: 8,
    name: "Notebook",
    price: 100,
    stock: 15,
    category: "books",
  },
  {
    id: 9,
    name: "Backpack",
    price: 800,
    stock: 6,
    category: "accessories",
  },
  {
    id: 10,
    name: "Watch",
    price: 1500,
    stock: 2,
    category: "accessories",
  },
];

//this will store our id
let count = productsList.length;

//function for deleting
function deleteProduct(id) {
  productsList = productsList.filter((element) => element.id != id);
  renderProducts(productsList);
}

//rendering the products
function renderProducts(list) {
  //pointing to the product section we will dynamically add products from productsList
  const container = document.getElementById("product-section");
  container.innerHTML = "";

  list.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p>INR ${product.price}</p>
        <p>${product.stock} left</p>
        <button onclick="deleteProduct(${product.id})">Delete 🗑️</button>
        `;
    container.appendChild(div);
  });
}
renderProducts(productsList);

// form submit handler
function addProd(e) {
  e.preventDefault();
  const prodName = document.getElementById("product-name").value;
  const prodStock = document.getElementById("product-stock").value;
  const prodCategory = document.getElementById("product-category").value;
  const prodPrice = document.getElementById("product-price").value;
  const newProduct = {
    id: ++count,
    name: prodName,
    price: prodPrice,
    stock: prodStock,
    category: prodCategory,
  };
  //adding new product in our main productsList
  productsList.push(newProduct);
  //rendering again with updated list
  renderProducts(productsList);

  //to reset the form
  e.target.reset();
}
