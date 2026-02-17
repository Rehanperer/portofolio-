import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import React from 'react';
import { render } from '@react-email/components';
import { ContactEmail } from './emails/ContactEmail.jsx';

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

        // Render the React Email template
        const emailHtml = await render(React.createElement(ContactEmail, { name }));

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

        // 2. Send Auto-Reply (Optional - might fail on free tier if email unverified)
        try {
            await resend.emails.send({
                from: 'Rehan Perera <onboarding@resend.dev>',
                to: email,
                subject: 'Message Received - Rehan Perera',
                html: emailHtml,
            });
        } catch (autoReplyError) {
            console.warn('Auto-reply failed (likely unverified email on free tier):', autoReplyError);
            // We do NOT fail the request here, as the main message was sent.
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
