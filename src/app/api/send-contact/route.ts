import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await request.json()

    // Tạo transporter với Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // binb53339@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD // App Password từ Gmail
      }
    })

    // Tạo email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Gửi cho chính mình
      subject: `📧 NEW CONTACT MESSAGE - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #ec4899, #f97316); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 NEW CONTACT MESSAGE</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Mynail Salon</p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #ec4899; margin-top: 0; border-bottom: 2px solid #fce7f3; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">👤 Name:</strong>
              <p style="margin: 5px 0; font-size: 18px; color: #1f2937; font-weight: 600;">${firstName} ${lastName}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">📧 Email:</strong>
              <p style="margin: 5px 0; font-size: 16px; color: #1f2937;">${email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">📞 Phone:</strong>
              <p style="margin: 5px 0; font-size: 16px; color: #1f2937;">${phone}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">📋 Subject:</strong>
              <p style="margin: 5px 0; font-size: 16px; color: #1f2937;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">💬 Message:</strong>
              <div style="margin: 10px 0; padding: 15px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #ec4899;">
                <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background: #fce7f3; border-radius: 8px; border-left: 4px solid #ec4899;">
              <p style="margin: 0; color: #831843; font-weight: 600;">
                ⚡ Message received at: ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>This is an automated message from Mynail Salon contact system.</p>
            <p>Please respond to the customer at: <strong>${email}</strong></p>
          </div>
        </div>
      `
    }

    // Gửi email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Contact message sent successfully!' 
    })

  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send contact message',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
