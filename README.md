```markdown
# 🎨 Custom Products – 3D Product Customizer

> منصة تفاعلية لتصميم المنتجات ثلاثية الأبعاد。

---

## ✨ المميزات

### 🛍️ واجهة المستخدم
- **عارض ثلاثي الأبعاد** – تدوير وتكبير وتحريك المنتج بحرية
- **تخصيص فوري** – إضافة نصوص، رفع صور، تغيير الألوان، مع تحديث مباشر
- **تحكم كامل بالتصميم** – تحريك النص والصورة، تغيير الحجم، التدوير، القلب (Mirror)، وضع الصورة الكاملة
- **وضع مظلم / فاتح** – تبديل الوضع وحفظ التفضيل تلقائياً
- **تصميم متجاوب** – يعمل على جميع الأجهزة (جوال، تابلت، حاسوب)

### 🛒 سلة التسوق
- إضافة منتجات جاهزة أو تصميمات مخصصة ثلاثية الأبعاد
- تعديل التصميمات المخصصة مباشرة من السلة
- حذف منتج فردي أو تفريغ السلة بالكامل
- حفظ البيانات في المتصفح (localStorage)

### 📦 الخادم الخلفي
- عرض المنتجات من ملف JSON
- حفظ الطلبات ورسائل الاتصال في ملفات JSON
- واجهة برمجية (API) مع دعم CORS

### 🧑‍💻 لوحة التحكم
- عرض جميع الطلبات المحفوظة
- قراءة رسائل الاتصال من نموذج التواصل
- تعمل محلياً دون الحاجة إلى خادم

---

## 🛠️ التقنيات المستخدمة

| المستوى          | التقنيات                                                                 |
|------------------|--------------------------------------------------------------------------|
| **الواجهة الأمامية** | HTML5, CSS3, JavaScript, TailwindCSS, Three.js, AOS                      |
| **الخادم الخلفي**    | Node.js, Express, CORS                                                   |
| **تخزين البيانات**   | JSON files                                                              |
| **النماذج ثلاثية الأبعاد** | GLTF / GLB                                                           |
| **النشر**            | Render (backend), Netlify / Vercel (frontend)                           |

---

## 📁 هيكل المشروع

```
custom-products/
├── public/                 # ملفات الواجهة الأمامية
│   ├── index.html
│   ├── about.html
│   ├── products.html
│   ├── customize.html      # صفحة التصميم ثلاثي الأبعاد
│   ├── cart.html
│   ├── checkout.html
│   ├── contact.html
│   ├── admin.html
│   ├── navbar.html         # شريط التنقل (يتم تحميله عبر JavaScript)
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js         # دوال مشتركة (السلة، الوضع المظلم، تحميل الناف)
│   │   └── translations.js # دعم اللغتين العربية والإنجليزية
│   └── images/             # صور المنتجات والشعارات
│
├── server/                 # الخادم الخلفي (Node.js)
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

## 🚦 التشغيل المحلي

### المتطلبات الأساسية
- تثبيت Node.js (الإصدار 18 أو أحدث)
- متصفح حديث
- محرر أكواد مثل VS Code

### 1. تحميل المشروع
```bash
git clone https://github.com/your-username/custom-products.git
cd custom-products
```

### 2. تشغيل الخادم الخلفي
```bash
cd server
npm install
npm start
```
الخادم سيعمل على `http://localhost:5000`

### 3. تشغيل الواجهة الأمامية
افتح مجلد `public` باستخدام أي خادم محلي مثل Live Server في VS Code:
- انقر بزر الماوس الأيمن على مجلد `public`
- اختر **Open with Live Server**

الموقع سيكون متاحاً على الرابط الذي يظهر (مثل `http://localhost:5500`)

**ملاحظة:** في ملفات HTML التي تجلب البيانات من الخادم، تأكد من أن `API_URL` يشير إلى `http://localhost:5000/api/...`

---

## 🧪 إضافة منتجات جديدة

1. ضع ملف النموذج ثلاثي الأبعاد (GLTF/GLB) في مجلد `public/models/`
2. أضف مساره في كائن `modelsMap` داخل `customize.html`:
   ```javascript
   'product-key': 'models/your-model.glb'
   ```
3. أضف إعدادات جديدة في `productConfig` (مقياس، موقع، كاميرا)
4. أضف الخيار إلى القائمة المنسدلة في HTML:
   ```html
   <option value="product-key">اسم المنتج</option>
   ```

---
## 🔧 النشر

### الخادم الخلفي (Render)
1. ارفع مجلد `server` إلى مستودع على GitHub
2. أنشئ Web Service جديد على Render واربطه بالمستودع
3. اضبط:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. ستحصل على رابط مثل `https://your-app.onrender.com`

### الواجهة الأمامية (Netlify / Vercel)
1. ارفع مجلد `public` إلى مستودع GitHub
2. استورد المشروع إلى Netlify أو Vercel
3. حدد مجلد النشر `public`
4. بعد النشر، عدّل جميع `API_URL` في ملفات JavaScript لاستخدام رابط الخادم الخلفي

