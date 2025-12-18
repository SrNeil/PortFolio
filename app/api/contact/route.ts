import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY?.trim();
        const contactEmail = process.env.CONTACT_EMAIL?.trim() || 'neilsen777@gmail.com';

        if (!apiKey) {
            console.error('CRITICAL: RESEND_API_KEY is missing or empty');
            return NextResponse.json(
                { error: 'Email service not configured. Please add RESEND_API_KEY to .env.local' },
                { status: 500 }
            );
        }

        // Debug log (masked)
        console.log(`API Key detected: ${apiKey.substring(0, 7)}...${apiKey.substring(apiKey.length - 4)} (Length: ${apiKey.length})`);

        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email and message are required' },
                { status: 400 }
            );
        }

        const resend = new Resend(apiKey);

        console.log(`Sending email from ${name} (${email}) to ${contactEmail}...`);

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: contactEmail,
            subject: `Novo Contato do Portfólio: ${name}`,
            text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
            replyTo: email
        });

        if (error) {
            console.error('Resend SDK Error:', error);
            return NextResponse.json(
                { error: `Resend Error: ${error.message}`, details: error },
                { status: 500 }
            );
        }

        console.log('Email sent successfully. Resend ID:', data?.id);

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully',
            id: data?.id
        });
    } catch (error: any) {
        console.error('Contact API Unexpected Error:', error);
        return NextResponse.json(
            { error: 'Internal server error', message: error.message },
            { status: 500 }
        );
    }
}
