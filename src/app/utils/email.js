import nodemailer from 'nodemailer'

export const sendEmail = ({ from, recipients = [], subject, text }) => {
  try {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'imsufyansikander@gmail.com',
          pass: 'hzgy vtrk zuwp fixt',
        },
      })

      const mailOptions = {
        from: from,
        to: recipients.join(','), // Comma-separated list of recipients
        subject: subject,
        text: text,
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error occurred:', error.message)
          reject({ succes: false, message: error.message })
        } else {
          console.log('Email sent successfully:', info.response)
          resolve({ succes: true, message: info.response })
        }
      })
    })
  } catch (error) {
    throw error
  }
}
