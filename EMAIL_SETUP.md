# Email Setup Instructions

## Gmail Configuration for Booking Notifications

### Step 1: Create Environment Variables
Create a file named `.env.local` in the root directory with:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here
```

### Step 2: Setup Gmail App Password

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/
   - Click on "Security" in the left sidebar

2. **Enable 2-Step Verification** (if not already enabled)
   - Click on "2-Step Verification"
   - Follow the setup process

3. **Generate App Password**
   - Go back to Security page
   - Click on "App passwords"
   - Select "Mail" as the app
   - Copy the 16-character password (e.g., "abcd efgh ijkl mnop")

4. **Update .env.local**
   - Replace `your-email@gmail.com` with your actual Gmail address
   - Replace `your-app-password-here` with the 16-character password

### Step 3: Test the Setup
1. Start the development server: `npm run dev`
2. Go to the booking page
3. Fill out the form and submit
4. Check your Gmail for the booking notification

### Troubleshooting
- Make sure 2-Step Verification is enabled
- Use App Password, not your regular Gmail password
- Check that the .env.local file is in the root directory
- Restart the development server after creating .env.local
