```markdown
# 🎨 Custom Products – 3D Product Customizer

A fully interactive 3D e-commerce platform where users can design their own products – T-shirts, phone cases, mugs, caps, bags, and more – by adding custom text, uploading images, choosing colors, and previewing everything in real-time 3D.

---

## ✨ Features

### 🛍️ User Experience
- **3D Product Viewer** – Rotate, zoom, and pan around products in real-time
- **Live Customization** – Add text, upload images, change colors, with instant updates
- **Full Design Control** – Position, scale, rotate, and mirror text and images; full-image overlay mode
- **Dark / Light Mode** – Toggle between themes with saved preference
- **Responsive Design** – Works on desktop, tablet, and mobile devices

### 🛒 Shopping Cart
- Add standard products or fully custom 3D designs
- Edit existing custom items directly from the cart
- Remove single items or clear the entire cart with one click
- Persistent storage using localStorage

### 📦 Backend
- Serve product data from JSON files
- Save orders and contact messages to JSON files
- RESTful API with CORS support

### 🧑‍💻 Admin Panel
- View all placed orders
- Read customer messages from the contact form
- Works locally without a server

---

## 🛠️ Tech Stack

| Layer          | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| **Frontend**   | HTML5, CSS3, JavaScript, TailwindCSS, Three.js, AOS                          |
| **Backend**    | Node.js, Express, CORS                                                       |
| **Data Storage** | JSON files                                                                 |
| **3D Models**  | GLTF / GLB format                                                            |

---

## 📁 Project Structure

```
custom-products/
├── public/                 # Frontend files
│   ├── index.html
│   ├── about.html
│   ├── products.html
│   ├── customize.html      # 3D product customizer
│   ├── cart.html
│   ├── checkout.html
│   ├── contact.html
│   ├── admin.html
│   ├── navbar.html         # Shared navbar (loaded via JavaScript)
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js         # Common functions (cart, dark mode, navbar loader)
│   │   └── translations.js # Bilingual support (Arabic/English)
│   └── images/             # Product images and logos
│
├── server/                 # Backend (Node.js)
│   ├── server.js
│   ├── routes/
│   │   └── api.js
│   ├── data/
│   │   ├── products.json
│   │   └── orders.json
│   └── package.json
│
└── README.md
```

---

## 🚦 Local Setup

### Prerequisites
- Node.js (v18 or later)
- Modern web browser
- Code editor (VS Code recommended)

### 1. Clone the Repository
```bash
git clone https://github.com/mar-alaa/custom-products.git
cd custom-products
```

### 2. Set Up the Backend
```bash
cd server
npm install
npm start
```
The backend will run on `http://localhost:5000`

### 3. Run the Frontend
Open the `public` folder using a local server:
- Using VS Code Live Server: right-click on the `public` folder and select **Open with Live Server**
- The site will be available at the displayed URL (e.g., `http://localhost:5500`)

**Note:** Update the `API_URL` in frontend JavaScript files to point to your backend address (`http://localhost:5000/api`)

---

## 🧪 Adding New Products

1. Place your GLTF/GLB model file in `public/models/`
2. Add its path to `modelsMap` inside `customize.html`:
   ```javascript
   'product-key': 'models/your-model.glb'
   ```
3. Add configuration to `productConfig` (scale, position, camera settings)
4. Add the option to the select dropdown in HTML:
   ```html
   <option value="product-key">Product Name</option>
   ```

---

## 🔧 Deployment

### Backend (Render)
1. Push the `server` folder to a GitHub repository
2. Create a new Web Service on Render and connect your repository
3. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. The API will be available at your Render URL

### Frontend (Netlify / Vercel)
1. Push the `public` folder to a GitHub repository
2. Import the project to Netlify or Vercel
3. Set the publish directory to `public`
4. After deployment, update all `API_URL` references to use your backend URL

---

## 📄 License

This project is licensed under the MIT License.

---
