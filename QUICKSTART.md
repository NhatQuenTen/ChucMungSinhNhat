# 🎂 Hướng Dẫn Nhanh - Quick Start Guide 🎂

## ⚡ Bắt Đầu Trong 2 Phút!

### Bước 1: Mở Trang Web
- Tìm file `index.html` 
- Click chuột phải → Mở bằng → Trình duyệt (Chrome, Firefox, Safari, Edge)
- **Xong!** Trang web đã sẵn sàng 🎉

### Bước 2: Tùy Chỉnh Nhanh (Tùy Chọn)

#### 🖼️ Thay Ảnh Chính
1. Chuột phải lên ảnh → **"Inspect"** hoặc **F12**
2. Tìm dòng chứa `<img src=...>`
3. Đổi `src=""` thành link ảnh mới
4. Reload trang (Ctrl+R)

**Hoặc dễ hơn:** Upload ảnh lên [imgur.com](https://imgur.com) → Copy link → Dán vào

#### ✏️ Thay Tên & Lời Chúc
1. Mở `index.html` bằng **Notepad** hoặc **VS Code**
2. Tìm từ cần thay (Ctrl+F)
3. Thay đổi text
4. Lưu (Ctrl+S) → Reload trang

#### 🎵 Thay Nhạc
1. Tìm link bài hát trên [YouTube](https://youtube.com)
2. Lên [y2mate.com](https://y2mate.com) hoặc tương tự để tải MP3
3. Upload lên [file sharing](https://drive.google.com) hoặc [wetransfer.com](https://wetransfer.com)
4. Lấy link → Thay `src` trong `<audio>`

---

## 🎨 Thay Đổi Màu Nhanh

Mở `styles.css`, tìm từ `pink-` hoặc `rose-` và thay bằng:

| Màu | Class |
|-----|-------|
| 🔵 Xanh | `blue-`, `cyan-` |
| 💜 Tím | `purple-`, `violet-` |
| 🟡 Cam | `orange-`, `yellow-` |
| 🟢 Xanh lá | `green-`, `emerald-` |
| ❤️ Đỏ | `red-`, `rose-` |

Ví dụ: `from-pink-500` → `from-blue-500`

---

## 🎯 Các Tính Năng & Cách Dùng

| Tính Năng | Cách Dùng |
|-----------|----------|
| 🎵 Phát Nhạc | Click nút âm thanh ở top |
| 💌 Mở Thư | Click vào con dấu sáp hình trái tim |
| 🔥 Thổi Nến | Click vào những ngọn nến |
| ✨ Pháo Giấy | Thổi hết 3 nến rồi click nút sinh nhật |
| 👆 Cuộn Trang | Scroll để thấy các section khác |

---

## 🚀 Share Trang Web Này

### Cách 1: Gửi File
- Zip 3 file (HTML, CSS, JS)
- Gửi qua Zalo, Telegram, Gmail
- Người khác giải nén → Mở `index.html`

### Cách 2: Upload Lên Web (Miễn Phí)
1. Vào [GitHub Pages](https://pages.github.com) hoặc [Netlify](https://netlify.com)
2. Upload 3 file
3. Lấy link → Chia sẻ
4. Người khác mở link trong trình duyệt (không cần tải gì)

---

## ⚙️ Chỉnh Sửa Chi Tiết

### 📸 Thêm Ảnh Kỷ Niệm
Trong HTML tìm section `<!-- SECTION 2: MEMORY LANE -->`, thêm:
```html
<div class="memory-card" data-aos="fade-up" data-aos-delay="400">
    <div class="relative group">
        <img src="[LINK ẢNH]" alt="Memory" class="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:rotate-2 group-hover:scale-105 transition-all duration-300">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
            <p class="text-white italic font-pacifico text-center">Ghi chú</p>
        </div>
    </div>
    <p class="mt-4 text-gray-700 italic text-center font-quicksand">Mô tả kỷ niệm</p>
</div>
```

### 💬 Thêm Dòng Chúc Mới
Tìm section `<!-- SECTION 3: THE LETTER -->` → Thêm `<p>` mới trong phần chúc

### 🎊 Thay Đổi Hiệu Ứng Pháo
Tìm `script.js` → Tìm `confetti({` → Chỉnh sửa:
- `particleCount` (tăng = nhiều pháo hơn)
- `colors` (đổi màu pháo)
- `spread` (góc lan tỏa)

---

## 💡 Tips Hay

✅ **Ảnh đẹp** = Trang web đẹp → Chọn ảnh sáng, rõ ràng, khuôn mặt lớn

✅ **Nhạc vui** = Trang web vui → Chọn bài vui, nhịp nhàng, không quá dài

✅ **Lời chúc chân thành** = Người ấy sẽ nhớ mãi → Viết từ trái tim, kể kỷ niệm

✅ **Thêm emoji** = Làm nổi bật → 💖✨🌸🎉🎂 hãy dùng thật nhiều!

✅ **Test trước** = Tránh lỗi → Thử từng tính năng trước khi gửi

---

## 🆘 Gặp Vấn Đề?

| Vấn Đề | Giải Pháp |
|--------|----------|
| File HTML không mở | Chuột phải → Mở bằng → Chọn trình duyệt |
| Ảnh không hiển thị | Kiểm tra URL ảnh, thử ảnh khác |
| Nhạc không phát | Kiểm tra URL nhạc, reload trang |
| Chữ bị lỗi | File → Lưu dưới dạng UTF-8 |
| Hiệu ứng không chạy | Refresh trang (Ctrl+Shift+R), xóa cache |

---

## 📚 File Cần Biết

| File | Dùng Để |
|------|---------|
| `index.html` | Nội dung & Cấu trúc |
| `styles.css` | Màu & Hiệu ứng |
| `script.js` | Tương tác & Sự kiện |
| `README.md` | Hướng dẫn chi tiết |

---

## 🎉 Khi Hoàn Thành

✨ Thử mọi tính năng:
- [ ] Phát nhạc
- [ ] Mở thư
- [ ] Thổi nến
- [ ] Xem pháo giấy
- [ ] Cuộn xem các ảnh

✨ Chia sẻ lên mạng:
- [ ] Gửi file qua chat
- [ ] Gửi link web (nếu upload)
- [ ] Lấy phản ứng từ người ấy 💖

---

## 🌟 Chúc Bạn Thành Công!

Hãy tạo một trang web chúc mừng sinh nhật thật lộng lẫy! 🎂✨

Người yêu bạn nhất sẽ yêu nó vì nó được tạo với tình yêu của bạn! 💕

**Happy Birthday! 🎉🎊🎈**

---

*Nếu cần giúp: Đọc `README.md` để hướng dẫn chi tiết hơn*
