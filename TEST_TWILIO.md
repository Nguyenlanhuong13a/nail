# 🧪 Test Twilio SMS (Không cần upgrade)

## ✅ Đã cập nhật code để test:

### **Tính năng mới:**
- ✅ **Detailed logging** - xem response từ Twilio
- ✅ **Error handling** - hiển thị lỗi cụ thể
- ✅ **Fallback** - nếu SMS fail thì email vẫn gửi

## 🔧 Setup để test:

### **Bước 1: Cập nhật .env**
```
# Gmail Configuration
GMAIL_USER=binb53339@gmail.com
GMAIL_APP_PASSWORD=ivrq xiqr rccj mwde

# Twilio SMS Configuration (từ Twilio Console)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token-here
TWILIO_PHONE_NUMBER=+15617943829
YOUR_PHONE_NUMBER=+84947993714
```

### **Bước 2: Test ngay**
1. **Restart server:** `npm run dev`
2. **Vào booking page:** http://localhost:3000/booking
3. **Submit form** với thông tin test
4. **Kiểm tra console** để xem response

## 📱 Kết quả có thể:

### **✅ Thành công:**
- SMS gửi được → Nhận SMS trên iPhone
- Console hiển thị: "SMS sent successfully"

### **❌ Bị block (A2P):**
- Console hiển thị: "A2P 10DLC registration required"
- Email vẫn gửi được
- Không mất tiền

### **❌ Lỗi khác:**
- Console hiển thị lỗi cụ thể
- Email vẫn gửi được

## 🎯 Mục đích test:
- **Xem SMS có gửi được không**
- **Nếu không được** → chỉ dùng Gmail
- **Nếu được** → có thể upgrade sau

**Test ngay để xem kết quả!**
