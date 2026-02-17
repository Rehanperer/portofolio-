import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import React from 'react';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
    const { name, email, message, category } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        console.log(`Processing contact request from ${name} (${email}) for category: ${category}`);



        // 1. Send Admin Notification (Critical)
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.YOUR_EMAIL || 'rehanbusiness007@gmail.com',
            subject: `New Project Inquiry: ${category} from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}`,
        });

        if (adminError) {
            console.error('Admin Email Failed:', adminError);
            return res.status(500).json({ error: 'Failed to send notification email', details: adminError });
        }



        res.status(200).json({ success: true, message: 'Message sent successfully', data: adminData });


    } catch (error) {
        console.error('System error sending emails:', error);
        res.status(500).json({ error: 'Failed to send emails due to internal error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
