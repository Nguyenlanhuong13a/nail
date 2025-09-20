# 📱 Twilio SMS Setup

## 🔧 Cập nhật file .env

Thêm các dòng sau vào file `.env`:

```
# Gmail Configuration
GMAIL_USER=binb53339@gmail.com
GMAIL_APP_PASSWORD=ivrq xiqr rccj mwde

# Twilio SMS Configuration
TWILIO_ACCOUNT_SID=your-account-sid-here
TWILIO_AUTH_TOKEN=your-auth-token-here
TWILIO_PHONE_NUMBER=+1234567890
YOUR_PHONE_NUMBER=+84947993714
```

## 📋 Lấy Twilio Credentials:

### 1. Vào Twilio Console
- Đăng nhập vào https://console.twilio.com/
- Vào Dashboard

### 2. Lấy Account SID & Auth Token
- **Account SID**: Copy từ "Account Info" (bắt đầu bằng AC...)
- **Auth Token**: Click "Show" và copy (bắt đầu bằng auth...)

### 3. Lấy Phone Number
- Vào "Phone Numbers" → "Manage" → "Active numbers"
- Copy số điện thoại Twilio (format: +1234567890)

### 4. Cập nhật .env
- Thay `your-account-sid-here` = Account SID
- Thay `your-auth-token-here` = Auth Token  
- Thay `+1234567890` = Số Twilio
- `+84947993714` = Số điện thoại của bạn (đã đúng)

## ✅ Test:
1. Restart server: `npm run dev`
2. Vào booking page
3. Submit form
4. Kiểm tra:
   - Email trong Gmail
   - SMS trên iPhone

## 💰 Chi phí:
- Free trial: $15 credit
- SMS to Vietnam: $0.0075/SMS
- Khoảng 2000 SMS miễn phí!
