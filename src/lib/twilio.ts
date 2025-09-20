// Twilio SMS utility using REST API
export async function sendSMS(phone: string, service: string, date: string, time: string, notes?: string) {
  try {
    const smsMessage = `🎉 NEW BOOKING - Mynail Salon
📞 Phone: ${phone}
💅 Service: ${service}
📅 Date: ${new Date(date).toLocaleDateString()}
⏰ Time: ${time}
${notes ? `📝 Notes: ${notes}` : ''}
🕐 Booked: ${new Date().toLocaleString()}`

    const accountSid = process.env.TWILIO_ACCOUNT_SID!
    const authToken = process.env.TWILIO_AUTH_TOKEN!
    const fromNumber = process.env.TWILIO_PHONE_NUMBER!
    const toNumber = process.env.YOUR_PHONE_NUMBER!

    console.log('Attempting to send SMS:', {
      from: fromNumber,
      to: toNumber,
      message: smsMessage.substring(0, 50) + '...'
    })

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          From: fromNumber,
          To: toNumber,
          Body: smsMessage,
        }),
      }
    )

    const responseText = await response.text()
    console.log('Twilio response:', response.status, responseText)

    if (!response.ok) {
      // Parse error response
      let errorMessage = `Twilio API error: ${response.status} ${response.statusText}`
      try {
        const errorData = JSON.parse(responseText)
        if (errorData.message) {
          errorMessage += ` - ${errorData.message}`
        }
      } catch (e) {
        errorMessage += ` - ${responseText}`
      }
      
      console.error('SMS failed:', errorMessage)
      return { success: false, error: errorMessage }
    }

    const result = JSON.parse(responseText)
    console.log('SMS sent successfully:', result.sid)
    return { success: true, messageId: result.sid }
  } catch (error) {
    console.error('SMS sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
