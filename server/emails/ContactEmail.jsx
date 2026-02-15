import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Img,
} from '@react-email/components';
import * as React from 'react';

export const ContactEmail = ({ name }) => (
    <Html>
        <Head />
        <Preview>Thanks for reaching out, {name}!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={h1}>Message Received</Heading>
                </Section>
                <Section style={section}>
                    <Text style={text}>Hi {name},</Text>
                    <Text style={text}>
                        Thank you for reaching out to me through my portfolio. I've received your message and will get back to you as soon as possible (usually within 24 hours).
                    </Text>
                    <Text style={text}>
                        In the meantime, feel free to check out my latest work on GitHub or connect with me on LinkedIn.
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Rehan Perera — Full-Stack Developer
                        <br />
                        Colombo, Sri Lanka
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default ContactEmail;

const main = {
    backgroundColor: '#020617',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
};

const header = {
    padding: '32px 0',
    textAlign: 'center',
};

const h1 = {
    color: '#3b82f6',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
};

const section = {
    padding: '24px',
    backgroundColor: '#0f172a',
    borderRadius: '16px',
    border: '1px solid #1e293b',
};

const text = {
    color: '#cbd5e1',
    fontSize: '16px',
    lineHeight: '26px',
};

const hr = {
    borderColor: '#1e293b',
    margin: '20px 0',
};

const footer = {
    color: '#64748b',
    fontSize: '12px',
    textAlign: 'center',
};
