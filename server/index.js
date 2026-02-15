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

        // Send both emails using Resend batch API
        const response = await resend.batch.send([
            {
                from: 'Portfolio <onboarding@resend.dev>',
                to: process.env.YOUR_EMAIL || 'rehanbusiness007@gmail.com',
                subject: `New Project Inquiry: ${category} from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}`,
            },
            {
                from: 'Rehan Perera <onboarding@resend.dev>',
                to: email,
                subject: 'Message Received - Rehan Perera',
                html: emailHtml,
            }
        ]);

        console.log('Resend Response:', response);

        if (response.error) {
            console.error('Resend Error:', response.error);
            return res.status(500).json({ error: 'Failed to send emails via Resend' });
        }

        res.status(200).json({ success: true, message: 'Emails sent successfully', data: response.data });
    } catch (error) {
        console.error('System error sending emails:', error);
        res.status(500).json({ error: 'Failed to send emails due to internal error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
