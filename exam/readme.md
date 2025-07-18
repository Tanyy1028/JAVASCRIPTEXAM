Here’s a simple and clear `README.md` file for your product CRUD application built with JavaScript and localStorage:

---

```markdown
# 🛒 Product CRUD App with Filters and Sorting

This is a simple product management web app using **HTML**, **CSS**, and **JavaScript**. It allows users to **Create, Read, Update, and Delete (CRUD)** product entries. It also includes **searching**, **category filtering**, and **price sorting** features.

## 📦 Features

- ✅ Add new products with title, price, image URL, and category.
- ✏️ Edit existing products.
- ❌ Delete products.
- 🔍 Search products by title.
- 🧮 Filter products by category.
- ⬇️⬆️ Sort products by price (Low to High / High to Low).
- 💾 Uses `localStorage` for saving data permanently in the browser.

## 🧠 Technologies Used

- HTML
- CSS (you can style it as you like)
- JavaScript (Vanilla)
- Browser Local Storage

# video







https://github.com/user-attachments/assets/75a575fa-24f0-43bd-b088-bc47e2d1bf5c







## 🧑‍💻 How It Works

### 1. Add Product
- Fill the inputs: **Title**, **Price**, **Image URL**, and **Category**.
- Click the **Add** button to store it in local storage and display on screen.

### 2. Edit Product
- Click the **Edit** button next to a product.
- The product details will be filled in the form.
- Modify the details and click **Add** again to update.

### 3. Delete Product
- Click the **Delete** button to remove it from the list and local storage.

### 4. Filter and Search
- Use the **search bar** to search by title.
- Use the **category filter dropdown** to show specific categories.
- Use the **sort dropdown** to sort by price.

## 📁 File Structure

```

📁 product-crud-app/
├── index.html
├── style.css
├── script.js
└── README.md

````

## 📷 Example Product Object

```json
{
  "title": "iPhone 15",
  "price": 79999,
  "image": "https://example.com/image.jpg",
  "category": "Electronics"
}
````

## 🧪 Local Storage Example

Data is saved as an array of product objects under the key `"products"`:

```js
localStorage.setItem("products", JSON.stringify(products));
```

## 🚀 Getting Started

1. Download or clone this repository.
2. Open `index.html` in any modern browser.
3. Use the UI to add, edit, delete, and filter products.

---

Feel free to customize the UI and add more features like:

* Product description
* Pagination
* Category creation
* Image preview

## 📝 License

This project is open source and free to use under the MIT license.

```

---

Let me know if you'd like this README exported as a `.md` file or want to generate the full HTML/CSS for the app too.
```
