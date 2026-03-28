// دوال السلة
function getCart() { return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }

function addToCart(item) {
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
    const cartCountMobile = document.getElementById('cart-count-mobile');
    if (cartCountSpan) cartCountSpan.innerText = totalItems;
    if (cartCountMobile) cartCountMobile.innerText = totalItems;
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
}

// الدارك مود
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) document.documentElement.classList.add('dark');
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const toggleMobile = document.getElementById('dark-mode-toggle-mobile');
    const updateIcons = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (toggleBtn) toggleBtn.textContent = isDark ? '☀️' : '🌙';
        if (toggleMobile) toggleMobile.textContent = isDark ? '☀️' : '🌙';
    };
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
            updateIcons();
        });
    }
    if (toggleMobile) {
        toggleMobile.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
            updateIcons();
        });
    }
    updateIcons();
}

// إعداد القائمة المنسدلة للموبايل
function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
        // عند النقر على أي رابط داخل القائمة، نغلقها بعد الانتقال مباشرة (بدون انتظار)
        menu.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => {
                menu.classList.remove('show');
            });
        });
    }
}

// تحميل الناف بار
async function loadNavbar() {
    try {
        const response = await fetch('navbar.html');
        const navbarHTML = await response.text();
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        initDarkMode();
        updateCartCount();
        setupMobileMenu();
    } catch (error) {
        console.error('خطأ في تحميل الناف:', error);
    }
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
});

// إضافة fade out عند النقر على أي رابط داخلي (للموقع)
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        document.body.style.transition = 'opacity 0.3s';
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    }
});

let currentLang = localStorage.getItem('lang') || 'ar';

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = currentLang === 'ar' ? '🇬🇧 English' : '🇸🇦 العربية';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
}

// ربط زر اللغة
document.addEventListener('click', (e) => {
    if (e.target.id === 'lang-toggle') {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    }
});

// استدعاء الترجمة بعد تحميل الصفحة والناف
document.addEventListener('DOMContentLoaded', () => {
    // ننتظر حتى يتم تحميل الناف (الذي يضاف ديناميكياً)
    setTimeout(() => applyTranslations(), 100);
});