# 📱 Responsive Design Test Guide

## 🖥️ **Desktop (1920x1080)**
- **Navbar:** Full horizontal layout
- **Hero Section:** 2-column grid (text + image)
- **Services:** 3-4 columns grid
- **Footer:** Full width layout

## 💻 **Laptop (1366x768)**
- **Navbar:** Full horizontal layout
- **Hero Section:** 2-column grid
- **Services:** 2-3 columns grid
- **Footer:** Full width layout

## 📱 **Tablet (768x1024)**
- **Navbar:** Hamburger menu (mobile)
- **Hero Section:** Single column stack
- **Services:** 2 columns grid
- **Footer:** 2 columns layout

## 📱 **Mobile (375x667)**
- **Navbar:** Hamburger menu
- **Hero Section:** Single column stack
- **Services:** Single column
- **Footer:** Single column

## 🧪 **Test Steps:**

### **1. Chrome DevTools:**
1. **F12** → **Toggle device toolbar**
2. **Test các breakpoints:**
   - Mobile: 375px
   - Tablet: 768px
   - Laptop: 1024px
   - Desktop: 1920px

### **2. Test Pages:**
- **Homepage:** http://localhost:3000
- **Services:** http://localhost:3000/services
- **Contact:** http://localhost:3000/contact
- **Booking:** http://localhost:3000/booking

### **3. Test Elements:**
- **Navbar:** Menu collapse/expand
- **Buttons:** Touch targets (44px+)
- **Forms:** Input fields readable
- **Images:** Proper scaling
- **Text:** Readable font sizes

## 🎯 **Expected Results:**

### **✅ Mobile (375px):**
- Hamburger menu works
- Single column layout
- Touch-friendly buttons
- Readable text

### **✅ Tablet (768px):**
- 2-column layouts
- Proper spacing
- Good readability

### **✅ Desktop (1920px):**
- Multi-column layouts
- Full navbar
- Optimal spacing

## 🐛 **Common Issues to Check:**

1. **Text too small** on mobile
2. **Buttons too close** together
3. **Images not scaling** properly
4. **Menu not working** on mobile
5. **Forms hard to use** on touch

**Test ngay với Chrome DevTools!**
