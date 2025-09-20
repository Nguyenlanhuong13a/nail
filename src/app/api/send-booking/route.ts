import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { phone, service, date, time, notes } = await request.json()

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
      subject: '🎉 NEW BOOKING - Mynail Salon',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #ec4899, #f97316); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎉 NEW BOOKING RECEIVED!</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Mynail Salon</p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #ec4899; margin-top: 0; border-bottom: 2px solid #fce7f3; padding-bottom: 10px;">Booking Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">📞 Phone Number:</strong>
              <p style="margin: 5px 0; font-size: 18px; color: #1f2937; font-weight: 600;">${phone}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">💅 Service:</strong>
              <p style="margin: 5px 0; font-size: 16px; color: #1f2937;">${service}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">📅 Date:</strong>
              <p style="margin: 5px 0; font-size: 16px; color: #1f2937;">${new Date(date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">⏰ Time:</strong>
              <p style="margin: 5px 0; font-size: 16px; color: #1f2937;">${time}</p>
            </div>
            
            ${notes ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151; font-size: 16px;">📝 Notes:</strong>
              <p style="margin: 5px 0; font-size: 16px; color: #1f2937;">${notes}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 25px; padding: 15px; background: #fce7f3; border-radius: 8px; border-left: 4px solid #ec4899;">
              <p style="margin: 0; color: #831843; font-weight: 600;">
                ⚡ Booked at: ${new Date().toLocaleString('en-US', {
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
            <p>This is an automated message from Mynail Salon booking system.</p>
            <p>Please call the customer to confirm the appointment.</p>
          </div>
        </div>
      `
    }

    // Gửi email
    await transporter.sendMail(mailOptions)

    // SMS temporarily disabled - using email only
    console.log('SMS disabled - using email notification only')

    return NextResponse.json({ 
      success: true, 
      message: 'Booking email sent successfully!' 
    })

  } catch (error) {
    console.error('Error sending booking email:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send booking email',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
