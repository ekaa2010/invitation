# دعوة زفاف أحمد وملك — النسخة الثانية (v2)

نسخة ثانية محسّنة من دعوة الزفاف، منشورة في فولدر `v2/` جوه نفس ريبو النسخة الأصلية (`ekaa2010/invitation`) عشان تتقارن بيها من غير ما ملفات الأصلية تتغيّر.

**أحمد وملك — السبت 13 مارس 2027، الساعة 7:30 مساءً، قاعة الفيولا، جاردينيا هاوس، دار الحرب الكيمياوية**

## اللينكات

- الدعوة (النسخة الثانية): https://ekaa2010.github.io/invitation/v2/
- صفحة الإهداءات (للأدمن بس): https://ekaa2010.github.io/invitation/v2/admin.html
- النسخة الأصلية: https://ekaa2010.github.io/invitation/

## إيه اللي اتغيّر عن النسخة الأولى؟

- الصفحة بقت ملف واحد ثابت ومباشر — شيلنا طريقة التحميل من كوميت قديم والباتشات اللي كانت بتتعمل وقت الفتح.
- **مفيش قسم Dress Code خالص.**
- **برنامج الحفل بقى 4 نقاط:** بداية الحفل 7:30 مساءً — كتب الكتاب 8:00 مساءً — العشاء 9:30 مساءً — نهاية الحفل 11:00 مساءً.
  - ⚠️ مواعيد **كتب الكتاب (8:00)** و**العشاء (9:30)** مواعيد مبدئية قابلة للتعديل بسهولة في `index.html`.
  - مفيش زفة ولا فقرات تانية مقصود — عشان ترتيب اليوم ممكن يتغيّر.
- لينك اتجاهات الوصول بقى لينك خرائط جوجل المختصر المباشر لدار جاردينيا.
- بيانات مشاركة (Open Graph) عشان بريفيو اللينك على واتساب يبقى أنضف. ملحوظة: مفيش `og:image` لأن صور الدعوة مدمجة Base64 جوه الصفحة نفسها.
- الموسيقى: زرار دهبي عائم لتشغيل/إيقاف الموسيقى، ومفيش تحميل مسبق للملف الصوتي (`preload="none"`) توفيراً للداتا.
- صور "لحظاتنا" وصورة البطل بتتكبّر بضغطة واحدة (Lightbox).
- فورم الإهداءات شغال زي ما هو على نفس مشروع Supabase ونفس جدول `dedications` — والإهداءات من النسختين بتتجمع في نفس المكان. صفحة الضيوف مبقاش فيها لينك الأدمن الصغير.

## صفحة الأدمن

`admin.html` — الدخول بنفس اسم المستخدم وكلمة السر بتوع النسخة الأولى بالظبط (Supabase Auth، اسم المستخدم بيتحوّل لإيميل `@invitation.example.com`). فيها عدّاد الإهداءات وبحث بالاسم أو بكلمة في نص الإهداء.

## الملفات

| الملف | الوصف |
|---|---|
| `index.html` | الدعوة نفسها (ملف مستقل كامل) |
| `hero.txt` | صورة البطل (Base64 WebP) — الصفحة بتحمّلها وقت الفتح، لازم تفضل موجودة |
| `dedications.js` | فورم "اترك إهداءك" المتصل بـ Supabase |
| `music.js` | مشغّل الموسيقى + زرار التشغيل/الإيقاف |
| `lightbox.js` | تكبير الصور |
| `admin.html` | صفحة الإهداءات للأدمن |

---

## English (brief)

Second, polished version of Ahmed & Malak's wedding invitation (Saturday 13 March 2027, 7:30pm, Viola Hall, Gardenia House, Dar El Harb El Kimaweya), published in the `v2/` folder of the original repo for side-by-side comparison; the original files are unchanged. Live at https://ekaa2010.github.io/invitation/v2/ (admin: https://ekaa2010.github.io/invitation/v2/admin.html). No dress-code section; celebration timeline is Start 7:30pm → Katb El-Kitab 8:00pm (editable placeholder) → Dinner 9:30pm (editable placeholder) → End 11:00pm. Dedications still post to the same Supabase project/table, and `admin.html` uses the same username/password login as v1.
