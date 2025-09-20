# 🚀 Deploy Guide - Mynail Salon

## 📋 **Deploy Checklist:**

### **1. Environment Variables Setup:**

**Vercel:**
1. Vào Vercel Dashboard → Project Settings → Environment Variables
2. Add các variables:
   ```
   GMAIL_USER=binb53339@gmail.com
   GMAIL_APP_PASSWORD=ivrq xiqr rccj mwde
   ```

**Netlify:**
1. Vào Netlify Dashboard → Site Settings → Environment Variables
2. Add các variables tương tự

### **2. Build Settings:**

**Vercel:**
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Netlify:**
- Build Command: `npm run build`
- Publish Directory: `.next`
- Node Version: 18.x

### **3. Common Issues:**

**❌ 404 Error:**
- Check environment variables
- Verify build logs
- Check API routes

**❌ Build Failed:**
- Check Node.js version (18.x recommended)
- Verify all dependencies installed
- Check TypeScript errors

**❌ API Routes Not Working:**
- Verify environment variables
- Check serverless function limits
- Test locally first

### **4. Testing After Deploy:**

1. **Homepage:** `https://your-domain.com`
2. **Services:** `https://your-domain.com/services`
3. **Contact:** `https://your-domain.com/contact`
4. **Booking:** `https://your-domain.com/booking`

### **5. Email Testing:**

1. Fill contact form
2. Submit booking form
3. Check Gmail inbox: `binb53339@gmail.com`

## 🔧 **Troubleshooting:**

**If still getting 404:**
1. Check build logs in deployment platform
2. Verify all files pushed to GitHub
3. Check environment variables
4. Try redeploy

**Need help?** Check deployment platform documentation or contact support.
