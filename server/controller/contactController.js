const Contact = require('../models/contactSchema')
const nodemailer = require('nodemailer')
exports.saveContact = async (req, res) => {

    const { name, email, subject, description } = req.body

    console.log(req.body)

    if (!name || !email || !subject || !description) {
        return res.status(422).json({ status: 'error', message: 'Please fill all the fields' })
    }

    try {
        const data = await new Contact({
            name,
            email,
            subject,
            description
        })
        await data.save()


        // Email Sending Functianily >>>>>


        // Connect with SMTP Server

        // Sending mail to my personal account 
        const transporter = nodemailer.createTransport({// For Us
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USERNAME,
                pass: process.env.GMAIL_PASS
            }
        });

        const MyOptions = {         // For Us
            from: "karanpal.softdev@gmail.com",
            to: "karanpal03040@gmail.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `
            
            Dear Boss,<br><br>
You’ve received a new message from your portfolio website contact form. Here are the details:<br><br>

Client's Name: ${name}<br><br>
Client's Email: ${email}<br><br>
Subject: ${subject}<br><br>

Message: ${description}<br><br>

Please respond at your earliest convenience.<br><br>

Best regards,<br>
Your Portfolio Website
            `
        }

        await new Promise((resolve, reject) => {
            transporter.sendMail(MyOptions, (error, info) => {     // For Us 
                if (error) {
                    console.log('Error', error.message)
                    reject(error);
                } else {
                    resolve(info);
                }
            })
        })

        // Sending mail to the client

        // Options for sending mail to the user
        const UserOptions = {         //For USer
            from: "karanpal03040@gmail.com",
            to: email,
            subject: 'Thank You for Your Inquiry - Karan Pal',
            html: `
      <p>
      Dear ${name},<br><br>
Thank you for your message. I appreciate your interest and will respond within 24 hours.<br><br>
If your matter is urgent, feel free to drop the email with concern at karanpal.softdev@gmail.com .<br><br>
Best regards,<br><br>
Karan Pal<br>
Software Developer<br>
karanpal.softdev@gmail.com<br>
      `
        }

        await new Promise((resolve, reject) => {
            transporter.sendMail(UserOptions, (error, info) => {   // For User
                if (error) {
                    console.log('Error', error.message)
                    reject(err);
                } else {
                    // console.log('Email Sent Successfully To The User', info.response)
                    resolve(info);
                }
            })
        })





        return res.status(200).json({ status: 'success', message: 'Thanks for conatcting ❤' })
    } catch (error) {
        res.status(422).json({ error: error.message, message: 'Getting error while calling contact api' })
    }
}