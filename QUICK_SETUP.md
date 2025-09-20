# 🚀 Quick Setup - Gmail Booking System

## ✅ Đã hoàn thành:
- ✅ Form booking đơn giản (chỉ cần số điện thoại + dịch vụ + thời gian)
- ✅ API gửi email tự động qua Gmail
- ✅ Email đẹp với thông tin đầy đủ
- ✅ Error handling và confirmation

## 🔧 Setup Gmail (5 phút):

### Bước 1: Tạo file .env.local
Tạo file `.env.local` trong thư mục gốc với nội dung:
```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-password
```

### Bước 2: Lấy App Password từ Gmail
1. Vào https://myaccount.google.com/
2. Security → 2-Step Verification (bật nếu chưa có)
3. App Passwords → Generate password cho "Mail"
4. Copy password 16 ký tự (ví dụ: "abcd efgh ijkl mnop")
5. Paste vào .env.local

### Bước 3: Test
1. Chạy: `npm run dev`
2. Vào trang booking
3. Điền form và submit
4. Kiểm tra Gmail của bạn!

## 📧 Email sẽ gửi đến bạn:
- 📞 Số điện thoại khách hàng
- 💅 Dịch vụ đã chọn
- 📅 Ngày và giờ
- 📝 Ghi chú (nếu có)
- ⏰ Thời gian booking

## 🎯 Kết quả:
- Khách booking → Bạn nhận email ngay lập tức
- Email đẹp, dễ đọc
- 100% miễn phí
- Không cần setup phức tạp

**Chỉ cần thay email và password trong .env.local là xong!**
