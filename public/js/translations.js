// translations.js – جميع النصوص المترجمة للموقع

const translations = {
    ar: {
        // ====== الناف بار ======
        "nav_home": "الرئيسية",
        "nav_about": "عن الموقع",
        "nav_products": "المنتجات",
        "nav_contact": "اتصل بنا",
        "nav_cart": "السلة",
        "lang_toggle": "English",

        // ====== الصفحة الرئيسية ======
        "hero_title": "صمم منتجك الخاص",
        "hero_desc": "تي شيرت، جراب جوال، كوب – أضف نصوصك وألوانك وصورتك",
        "hero_btn": "ابدأ التصميم",
        "section_featured": "منتجات مميزة",

        // ====== صفحة المنتجات ======
        "products_title": "جميع المنتجات",

        // ====== صفحة عن الموقع ======
        "about_title": "عن Custom Products",
        "about_hero_text": "نحن هنا لتحويل أفكارك إلى منتجات حقيقية. منذ البداية ونحن نؤمن بأن الإبداع يجب أن يكون في متناول الجميع.",
        "about_story_title": "قصتنا",
        "about_story_p1": "انطلقنا عام 2023 بفكرة بسيطة: منح الناس حرية تصميم منتجاتهم بأنفسهم. من تي شيرت بسيط إلى جراب جوال مميز، نؤمن أن كل قطعة يمكن أن تعكس شخصية صاحبها.",
        "about_story_p2": "ما بدأ كحلم صغير أصبح اليوم منصة متكاملة تضم آلاف المستخدمين حول العالم. نعمل مع أفضل المصنعين لضمان جودة عالية، ونهتم بأدق التفاصيل لنقدم لك تجربة فريدة.",
        "about_story_p3": "نحن لا نصنع منتجات فقط، بل نساعدك في سرد قصتك من خلال تصميماتك الخاصة.",
        "about_values_title": "قيمنا",
        "value_creativity": "الإبداع",
        "value_creativity_desc": "نشجع كل فكرة جديدة ونساعدك في إخراجها إلى الواقع.",
        "value_quality": "الجودة",
        "value_quality_desc": "نستخدم أفضل المواد لضمان منتج يدوم طويلاً.",
        "value_trust": "الثقة",
        "value_trust_desc": "خدمة عملاء متميزة وشفافية في كل خطوة.",
        "value_sustainability": "الاستدامة",
        "value_sustainability_desc": "نتبنى ممارسات صديقة للبيئة في إنتاجنا.",
        "about_timeline_title": "رحلة التطور",
        "timeline_2023": "2023",
        "timeline_2023_title": "الانطلاقة",
        "timeline_2023_desc": "تأسيس المنصة بأربعة منتجات أساسية وخدمة التصميم المخصص.",
        "timeline_2024": "2024",
        "timeline_2024_title": "التوسع",
        "timeline_2024_desc": "إضافة 12 منتجاً جديداً ودخول أسواق جديدة في الشرق الأوسط وأوروبا.",
        "timeline_2025": "2025",
        "timeline_2025_title": "الابتكار",
        "timeline_2025_desc": "إطلاق تقنية المعاينة ثلاثية الأبعاد وتطبيق الهواتف الذكية.",
        "timeline_future": "المستقبل",
        "timeline_future_title": "رؤية 2030",
        "timeline_future_desc": "الوصول إلى مليون مستخدم وتوسيع نطاق المنتجات لتشمل الأثاث والإكسسوارات المنزلية.",
        "about_team_title": "فريقنا",
        "team_member_ceo": "المؤسس والمدير التنفيذي",
        "team_member_design": "رئيسة قسم التصميم",
        "team_member_tech": "مدير التكنولوجيا",
        "team_member_support": "خدمة العملاء",
        "about_contact_cta": "لديك فكرة؟ نريد أن نسمعها!",
        "about_contact_btn": "تواصل معنا",

        // ====== صفحة التصميم ثلاثي الأبعاد ======
        "customize_3d_title": "تخصيص ثلاثي الأبعاد",
        "product_type_label": "نوع المنتج",
        "product_color_label": "لون المنتج",
        "text_label": "النص (حتى 20 حرفاً)",
        "image_label": "صورة (اختياري)",
        "image_position_x": "موقع الصورة (أفقي)",
        "image_position_y": "موقع الصورة (عمودي)",
        "text_position_x": "موقع النص (أفقي)",
        "text_position_y": "موقع النص (عمودي)",
        "image_scale_label": "حجم الصورة (%)",
        "text_font_size_label": "حجم النص (px)",
        "full_image_label": "صورة كاملة على التي شيرت",
        "mirror_texture_label": "قلب النسيج كاملاً (أفقي)",
        "mirror_texture_v_label": "قلب النسيج عمودياً",
        "mirror_text_h_label": "قلب النص أفقياً",
        "mirror_text_v_label": "قلب النص عمودياً",
        "texture_preview_label": "معاينة النسيج",
        "add_to_cart_btn": "أضف إلى السلة",

        // ====== صفحة التصميم (القديمة) ======
        "customize_title": "صمم منتجك الخاص",
        "design_options_title": "خيارات التصميم",
        "product_type_old_label": "نوع المنتج",
        "text_old_label": "النص (حتى 20 حرفاً)",
        "text_color_label": "لون النص",
        "bg_color_label": "لون الخلفية / المنتج",
        "upload_image_label": "رفع صورة (اختياري)",
        "product_preview_title": "معاينة المنتج",

        // ====== صفحة السلة ======
        "cart_title": "سلة التسوق",
        "cart_empty": "السلة فارغة",
        "cart_total": "الإجمالي",
        "checkout_btn": "متابعة الدفع",
        "remove_item": "إزالة",

        // ====== صفحة إنهاء الطلب ======
        "checkout_title": "إنهاء الطلب",
        "shipping_info": "معلومات الشحن",
        "full_name": "الاسم الكامل",
        "email": "البريد الإلكتروني",
        "address": "العنوان",
        "phone": "رقم الهاتف",
        "order_summary": "ملخص الطلب",
        "submit_order": "إتمام الطلب",
        "order_success": "تم إنشاء الطلب بنجاح! شكراً لك.",

        // ====== صفحة الاتصال ======
        "contact_title": "اتصل بنا",
        "contact_name": "الاسم الكامل",
        "contact_email": "البريد الإلكتروني",
        "contact_message": "الرسالة",
        "contact_send": "إرسال الرسالة",
        "contact_success": "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
        "contact_error": "حدث خطأ، حاول مرة أخرى.",
        "contact_server_error": "خطأ في الاتصال بالخادم.",

        // ====== صفحة الأدمن ======
        "admin_title": "لوحة التحكم",
        "admin_tab_orders": "الطلبات",
        "admin_tab_messages": "رسائل الاتصال",
        "admin_no_orders": "لا توجد طلبات حتى الآن.",
        "admin_no_messages": "لا توجد رسائل حتى الآن.",
        "order_customer": "العميل",
        "order_items": "المنتجات",
        "order_total": "الإجمالي",

        // ====== الفوتر ======
        "footer_copyright": "© 2025 Custom Products. جميع الحقوق محفوظة.",

        // ====== رسائل عامة ======
        "add_to_cart_confirm": "هل أنت متأكد من إضافة \"{name}\" إلى السلة؟",
        "added_to_cart": "تمت الإضافة إلى السلة",
        "model_not_loaded": "النموذج لم يتم تحميله بعد. حاول مرة أخرى.",
        "added_fake": "تمت الإضافة (وهمي)",
        "order_failed": "حدث خطأ أثناء حفظ الطلب",
        "cart_empty_alert": "السلة فارغة!",
        "no_products": "لا توجد منتجات",
        "loading": "جاري التحميل...",
        "error_loading": "حدث خطأ في تحميل المنتجات. تأكد من تشغيل الباكند.",
        "model_load_error": "فشل تحميل النموذج. تأكد من وجود الملف في المسار الصحيح",
        "image_preview": "معاينة",
        "text_preview": "نص تجريبي",
        "product_custom": "مخصص 3D"
    },

    en: {
        // ====== Navbar ======
        "nav_home": "Home",
        "nav_about": "About",
        "nav_products": "Products",
        "nav_contact": "Contact",
        "nav_cart": "Cart",
        "lang_toggle": "العربية",

        // ====== Home page ======
        "hero_title": "Design Your Own Product",
        "hero_desc": "T-shirt, Phone Case, Mug – Add your text, colors, and image",
        "hero_btn": "Start Designing",
        "section_featured": "Featured Products",

        // ====== Products page ======
        "products_title": "All Products",

        // ====== About page ======
        "about_title": "About Custom Products",
        "about_hero_text": "We are here to turn your ideas into real products. From the start, we believe creativity should be accessible to everyone.",
        "about_story_title": "Our Story",
        "about_story_p1": "We launched in 2023 with a simple idea: give people the freedom to design their own products. From a simple t-shirt to a unique phone case, we believe every piece can reflect its owner's personality.",
        "about_story_p2": "What started as a small dream is now a comprehensive platform used by thousands of users worldwide. We work with the best manufacturers to ensure high quality, and we pay attention to the finest details to offer you a unique experience.",
        "about_story_p3": "We don't just make products; we help you tell your story through your own designs.",
        "about_values_title": "Our Values",
        "value_creativity": "Creativity",
        "value_creativity_desc": "We encourage every new idea and help you bring it to life.",
        "value_quality": "Quality",
        "value_quality_desc": "We use the best materials to ensure your product lasts.",
        "value_trust": "Trust",
        "value_trust_desc": "Outstanding customer service and transparency at every step.",
        "value_sustainability": "Sustainability",
        "value_sustainability_desc": "We adopt eco-friendly practices in our production.",
        "about_timeline_title": "Our Journey",
        "timeline_2023": "2023",
        "timeline_2023_title": "Launch",
        "timeline_2023_desc": "Launched the platform with four basic products and custom design service.",
        "timeline_2024": "2024",
        "timeline_2024_title": "Expansion",
        "timeline_2024_desc": "Added 12 new products and entered new markets in the Middle East and Europe.",
        "timeline_2025": "2025",
        "timeline_2025_title": "Innovation",
        "timeline_2025_desc": "Launched 3D preview technology and a mobile app.",
        "timeline_future": "Future",
        "timeline_future_title": "Vision 2030",
        "timeline_future_desc": "Reach one million users and expand product range to include furniture and home accessories.",
        "about_team_title": "Our Team",
        "team_member_ceo": "Founder & CEO",
        "team_member_design": "Head of Design",
        "team_member_tech": "CTO",
        "team_member_support": "Customer Support",
        "about_contact_cta": "Have an idea? We'd love to hear it!",
        "about_contact_btn": "Contact Us",

        // ====== 3D Customize page ======
        "customize_3d_title": "3D Customization",
        "product_type_label": "Product Type",
        "product_color_label": "Product Color",
        "text_label": "Text (max 20 chars)",
        "image_label": "Image (optional)",
        "image_position_x": "Image Position (Horizontal)",
        "image_position_y": "Image Position (Vertical)",
        "text_position_x": "Text Position (Horizontal)",
        "text_position_y": "Text Position (Vertical)",
        "image_scale_label": "Image Size (%)",
        "text_font_size_label": "Text Size (px)",
        "full_image_label": "Full Image on Shirt",
        "mirror_texture_label": "Mirror Texture (Horizontal)",
        "mirror_texture_v_label": "Mirror Texture (Vertical)",
        "mirror_text_h_label": "Mirror Text Horizontally",
        "mirror_text_v_label": "Mirror Text Vertically",
        "texture_preview_label": "Texture Preview",
        "add_to_cart_btn": "Add to Cart",

        // ====== Old Customize page ======
        "customize_title": "Design Your Own Product",
        "design_options_title": "Design Options",
        "product_type_old_label": "Product Type",
        "text_old_label": "Text (max 20 chars)",
        "text_color_label": "Text Color",
        "bg_color_label": "Background / Product Color",
        "upload_image_label": "Upload Image (optional)",
        "product_preview_title": "Product Preview",

        // ====== Cart page ======
        "cart_title": "Shopping Cart",
        "cart_empty": "Your cart is empty",
        "cart_total": "Total",
        "checkout_btn": "Proceed to Checkout",
        "remove_item": "Remove",

        // ====== Checkout page ======
        "checkout_title": "Checkout",
        "shipping_info": "Shipping Information",
        "full_name": "Full Name",
        "email": "Email",
        "address": "Address",
        "phone": "Phone Number",
        "order_summary": "Order Summary",
        "submit_order": "Place Order",
        "order_success": "Your order has been placed successfully! Thank you.",

        // ====== Contact page ======
        "contact_title": "Contact Us",
        "contact_name": "Full Name",
        "contact_email": "Email",
        "contact_message": "Message",
        "contact_send": "Send Message",
        "contact_success": "Your message has been sent successfully. We'll get back to you soon.",
        "contact_error": "An error occurred. Please try again.",
        "contact_server_error": "Server connection error.",

        // ====== Admin page ======
        "admin_title": "Admin Dashboard",
        "admin_tab_orders": "Orders",
        "admin_tab_messages": "Messages",
        "admin_no_orders": "No orders yet.",
        "admin_no_messages": "No messages yet.",
        "order_customer": "Customer",
        "order_items": "Items",
        "order_total": "Total",

        // ====== Footer ======
        "footer_copyright": "© 2025 Custom Products. All rights reserved.",

        // ====== General messages ======
        "add_to_cart_confirm": "Are you sure you want to add \"{name}\" to your cart?",
        "added_to_cart": "Added to cart",
        "model_not_loaded": "Model not loaded yet. Please try again.",
        "added_fake": "Added (demo)",
        "order_failed": "Failed to save order",
        "cart_empty_alert": "Your cart is empty!",
        "no_products": "No products",
        "loading": "Loading...",
        "error_loading": "Error loading products. Please make sure the backend is running.",
        "model_load_error": "Failed to load model. Make sure the file exists at the correct path.",
        "image_preview": "Preview",
        "text_preview": "Sample Text",
        "product_custom": "Custom 3D"
    }
};

// دالة مساعدة للحصول على الترجمة (اختياري)
function t(key, params = {}) {
    const lang = localStorage.getItem('lang') || 'ar';
    let text = translations[lang][key] || key;
    for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
    }
    return text;
}