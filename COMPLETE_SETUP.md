# 🎉 Complete Setup - Email + SMS Booking System

## ✅ Đã hoàn thành:
- ✅ Form booking đơn giản (chỉ cần số điện thoại + dịch vụ + thời gian)
- ✅ Gmail email notification
- ✅ Twilio SMS notification (sử dụng REST API)
- ✅ Error handling hoàn chỉnh
- ✅ Build thành công

## 🔧 Setup Twilio (5 phút):

### Bước 1: Lấy Twilio Credentials
1. **Vào Twilio Console:** https://console.twilio.com/
2. **Copy Account SID:** Từ "Account Info" (bắt đầu bằng AC...)
3. **Copy Auth Token:** Click "Show" và copy (bắt đầu bằng auth...)
4. **Copy Phone Number:** Vào "Phone Numbers" → "Manage" → "Active numbers"

### Bước 2: Cập nhật file .env
Thêm vào file `.env`:
```
# Gmail Configuration
GMAIL_USER=binb53339@gmail.com
GMAIL_APP_PASSWORD=ivrq xiqr rccj mwde

# Twilio SMS Configuration
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token-here
TWILIO_PHONE_NUMBER=+1234567890
YOUR_PHONE_NUMBER=+84947993714
```

### Bước 3: Test
1. **Restart server:** `npm run dev`
2. **Vào booking page:** http://localhost:3000/booking
3. **Submit form** với thông tin test
4. **Kiểm tra:**
   - Email trong Gmail
   - SMS trên iPhone

## 📱 SMS sẽ gửi đến iPhone:
```
🎉 NEW BOOKING - Mynail Salon
📞 Phone: 0947 993 714
💅 Service: Classic Manicure
📅 Date: 1/15/2025
⏰ Time: 2:00 PM
📝 Notes: First time customer
🕐 Booked: 1/14/2025, 10:30:00 AM
```

## 💰 Chi phí:
- **Free trial:** $15 credit
- **SMS to Vietnam:** $0.0075/SMS (~170 VND)
- **Khoảng 2000 SMS miễn phí!**

## 🚀 Ready to test!
Chỉ cần cập nhật .env với Twilio credentials là xong!
