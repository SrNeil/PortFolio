import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY?.trim();
        const contactEmail = process.env.CONTACT_EMAIL?.trim() || 'neilsen777@gmail.com';

        // Enhanced Environment Variable Logging
        console.log("--- Contact API Request Started ---");
        console.log(`Environment Check:`);
        console.log(`- RESEND_API_KEY exists: ${!!apiKey}`);
        console.log(`- RESEND_API_KEY length: ${apiKey?.length}`);
        // Log first/last chars safely if key exists
        if (apiKey && apiKey.length > 5) {
             console.log(`- RESEND_API_KEY prefix: ${apiKey.substring(0, 4)}...`);
        }
        console.log(`- CONTACT_EMAIL: ${contactEmail}`);

        if (!apiKey) {
            console.error('CRITICAL: RESEND_API_KEY is missing or empty');
            return NextResponse.json(
                { error: 'Email service not configured. Please add RESEND_API_KEY to .env.local' },
                { status: 500 }
            );
        }

        const body = await request.json();
        const { name, email, message } = body;

        console.log(`Request Payload: Name=${name}, Email=${email}, MessageLength=${message?.length}`);

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email and message are required' },
                { status: 400 }
            );
        }

        const resend = new Resend(apiKey);

        console.log(`Attempting to send email via Resend...`);
        console.log(`From: onboarding@resend.dev`);
        console.log(`To: ${contactEmail}`);
        console.log(`Reply-To: ${email}`);

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: contactEmail,
            subject: `Novo Contato do Portfólio: ${name}`,
            text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
            replyTo: email
        });

        if (error) {
            console.error('❌ Resend SDK Error:', JSON.stringify(error, null, 2));
            return NextResponse.json(
                { 
                    error: `Resend Error: ${error.message}`, 
                    details: error,
                    name: error.name
                },
                { status: 500 }
            );
        }

        console.log('✅ Email sent successfully. Resend ID:', data?.id);

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully',
            id: data?.id
        });
    } catch (error: any) {
        console.error('🔥 Contact API Unexpected Error:', error);
        console.error('Full Error Object:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
        return NextResponse.json(
            { error: 'Internal server error', message: error.message },
            { status: 500 }
        );
    }
}
