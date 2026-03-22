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
//calling the functions to load the data
document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  renderProducts(productsList);
  inventoryAnalysis(productsList);
  showAnalytics();
});

//this will store our id
let count = productsList.length;

//function for deleting
function deleteProduct(id) {
  //firstly we will find the index of the product to be deleted
  let prodIndex = productsList.findIndex((p) => p.id === id);
  if (prodIndex !== -1) {
    const prod = productsList[prodIndex];
    inventory.totalProducts--;
    inventory.totalValue -= prod.price * prod.stock;

    //splice is used to delete the entry takes input as (startIndex,how many elements to delete starting from start index)
    productsList.splice(prodIndex, 1);
    saveToLocalStorage();
    renderProducts(productsList);
    inventoryAnalysis(productsList);
    showAnalytics();
  }
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
    price: Number(prodPrice),
    stock: Number(prodStock),
    category: prodCategory,
  };
  //adding new product in our main productsList
  productsList.push(newProduct);
  saveToLocalStorage(); //saving the updated list to localstorage
  //rendering again with updated list
  renderProducts(productsList);
  inventoryAnalysis(productsList);
  showAnalytics();
  //showing updated dashboard
  //to reset the form
  e.target.reset();
}

//for inventory dashboard

let inventory = {};

function inventoryAnalysis(prodList) {
  let totalInventoryValue = 0;
  let totalOutofstock = 0;
  prodList.forEach((product) => {
    totalInventoryValue += product.stock * product.price;
    if (product.stock === 0) {
      totalOutofstock++;
    }
  });
  inventory = {
    totalProducts: prodList.length,
    totalValue: totalInventoryValue,
    outOfStockCount: totalOutofstock,
  };
}

function showAnalytics() {
  document.getElementById("total-products").textContent =
    inventory.totalProducts;
  document.getElementById("total-value").textContent = inventory.totalValue;
  document.getElementById("out-of-stock").textContent =
    inventory.outOfStockCount;
}
//calling the functions for inventory dashboard
inventoryAnalysis(productsList);
showAnalytics();

//control section logic below---

//logic for the search bar
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase(); //converting the input into lowercase for ease in searching
  //filter returns an object with the values
  const filtered = productsList.filter((product) =>
    product.name.toLowerCase().includes(value),
  );
  renderProducts(filtered);
  inventoryAnalysis(filtered);
  showAnalytics();
});

// category filter---
const selectedCategory = document.getElementById("category-filter");
selectedCategory.addEventListener("change", function () {
  const value = selectedCategory.value;

  const filtered = productsList.filter((product) =>
    product.category.includes(value),
  );
  renderProducts(filtered);
  inventoryAnalysis(filtered);
  showAnalytics();
});

//price wise sort
const selectedSort = document.getElementById("sort-val");
selectedSort.addEventListener("change", function () {
  const value = selectedSort.value;
  //using spread operator to copy the list
  let filtered = [...productsList];
  if (value === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (value === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (value === "z-a") {
    //localeCompare is used to compare two strings for sorting alphabetically
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (value === "a-z") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  renderProducts(filtered);
  inventoryAnalysis(filtered);
  showAnalytics();
});

//setting up localStorage

//to save the data to local Storage
function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(productsList));
}

//to get the data from local storage
function loadFromLocalStorage() {
  const data = localStorage.getItem("products");

  //we are overriding the product list with our data which is stored in local st
  if (data) {
    productsList = JSON.parse(data);
  }
}
