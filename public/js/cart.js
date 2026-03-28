// الحصول على السلة من localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// حفظ السلة
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// إضافة عنصر إلى السلة (دمج إذا موجود)
function addToCart(item) {
    let cart = getCart();
    const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += item.quantity;
    } else {
        cart.push(item);
    }
    saveCart(cart);
    alert('تمت إضافة المنتج إلى السلة');
}

// تحديث الكمية
function updateQuantity(index, quantity) {
    let cart = getCart();
    if (cart[index]) {
        cart[index].quantity = quantity;
        saveCart(cart);
    }
}

// إزالة عنصر
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

// تحديث عدد العناصر في شريط التنقل
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountSpan = document.getElementById('cart-count');
    if (cartCountSpan) cartCountSpan.innerText = totalItems;
}

// استدعاء عند تحميل أي صفحة
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// دوال السلة
function getCart() { return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }

function addToCart(item) {
    // إضافة تأكيد
    if (confirm(`هل أنت متأكد من إضافة "${item.name}" إلى السلة؟`)) {
        let cart = getCart();
        const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type);
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += item.quantity;
        } else {
            cart.push(item);
        }
        saveCart(cart);
        alert('تمت الإضافة إلى السلة');
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountSpan = document.getElementById('cart-count');
    if (cartCountSpan) cartCountSpan.innerText = totalItems;
}

function updateQuantity(index, quantity) {
    let cart = getCart();
    if (cart[index]) {
        cart[index].quantity = quantity;
        saveCart(cart);
    }
}

function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    // تحديث واجهة السلة إذا كانت الصفحة هي cart.html
    if (typeof renderCart === 'function') renderCart();
}