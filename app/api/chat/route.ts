import { NextRequest, NextResponse } from 'next/server';
import { detectIntent } from '@/lib/chatbot-knowledge';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message } = body;

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Simulate a small delay to make it feel more realistic
        await new Promise(resolve => setTimeout(resolve, 500));

        // Detect intent and get simulated response
        const response = detectIntent(message);

        return NextResponse.json(response);
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
