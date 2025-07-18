let products = JSON.parse(localStorage.getItem('products')) || [];
let editingIndex = -1;

function saveToLocal() {
    localStorage.setItem('products', JSON.stringify(products));
}

function clearInputs() {
    document.getElementById('title').value = "";
    document.getElementById('price').value = "";
    document.getElementById('image').value = "";
    document.getElementById('category').value = "";
}

function addProduct() {
    const title = document.getElementById('title').value.trim();
    const price = document.getElementById('price').value.trim();
    const image = document.getElementById('image').value.trim();
    const category = document.getElementById('category').value.trim();

    if (!title || !price) return alert('Title and price are required!');

    const product = { title, price: Number(price), image, category };

    if (editingIndex >= 0) {
        products[editingIndex] = product;
        editingIndex = -1;
    } else {
        products.push(product);
    }

    saveToLocal();
    clearInputs();
    displayProducts(products);
    updateCategoryFilter();
}

function editProduct(index) {
    const product = products[index];
    document.getElementById('title').value = product.title;
    document.getElementById('price').value = product.price;
    document.getElementById('image').value = product.image;
    document.getElementById('category').value = product.category;
    editingIndex = index;
}

function deleteProduct(index) {
    products.splice(index, 1);
    saveToLocal();
    displayProducts(products);
    updateCategoryFilter();
}

function displayProducts(list) {
    const container = document.getElementById('productList');
    container.innerHTML = "";
    list.forEach((product, index) => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${product.image}" alt="">
          <h3>${product.title}</h3>
          <p>₹${product.price}</p>
          <p>${product.category}</p>
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        `;
        container.appendChild(div);
    });
}


function applyFilters() {
    let filtered = [...products];
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sort').value;

    if (search) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(search));
    }

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    if (sort === 'low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'high') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

displayProducts(products);