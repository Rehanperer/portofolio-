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
    Button,
} from '@react-email/components';
import * as React from 'react';

export const ContactEmail = ({ name }) => (
    <Html>
        <Head />
        <Preview>Thank you for connecting with Rehan Perera</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={h1}>Message Received</Heading>
                </Section>
                <Section style={section}>
                    <Text style={text}>Hi {name},</Text>
                    <Text style={text}>
                        Thank you for reaching out. I truly appreciate you taking the time to connect.
                    </Text>
                    <Text style={text}>
                        I have received your message and will review it shortly. You can expect a personal response from me within 24 hours.
                    </Text>
                    <Text style={text}>
                        In the meantime, I invite you to explore my latest projects or connect with me professionally:
                    </Text>

                    <Section style={buttonContainer}>
                        <Button style={button} href="https://github.com/Rehanperer">
                            View GitHub
                        </Button>
                        <Button style={buttonSecondary} href="https://www.linkedin.com/in/rehan-perera-09a9752b6/">
                            Connect on LinkedIn
                        </Button>
                    </Section>

                    <Hr style={hr} />
                    <Text style={footer}>
                        Best Regards,
                        <br />
                        <strong>Rehan Perera</strong>
                        <br />
                        Full-Stack Developer | Colombo, Sri Lanka
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
    letterSpacing: '-0.5px',
};

const section = {
    padding: '32px',
    backgroundColor: '#0f172a',
    borderRadius: '20px',
    border: '1px solid #1e293b',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
};

const text = {
    color: '#cbd5e1',
    fontSize: '16px',
    lineHeight: '26px',
    marginBottom: '20px',
};

const buttonContainer = {
    padding: '12px 0 0',
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
};

const button = {
    backgroundColor: '#3b82f6',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    padding: '12px 24px',
    marginRight: '12px',
};

const buttonSecondary = {
    backgroundColor: 'transparent',
    borderRadius: '12px',
    border: '1px solid #3b82f6',
    color: '#3b82f6',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    padding: '12px 24px',
};

const hr = {
    borderColor: '#1e293b',
    margin: '32px 0 24px',
};

const footer = {
    color: '#64748b',
    fontSize: '14px',
    lineHeight: '22px',
    textAlign: 'center',
};
