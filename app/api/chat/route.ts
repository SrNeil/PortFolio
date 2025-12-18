import { NextRequest, NextResponse } from 'next/server';
import { detectIntent } from '@/lib/chatbot-knowledge';
import { getTranslations } from 'next-intl/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message, locale = 'pt' } = body;

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Simulate a small delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Detect intent
        const intentResponse = detectIntent(message);

        // Get translations for the detected replyKey
        const t = await getTranslations({ locale, namespace: 'Components.ChatBot.replies' });
        const tSuggestions = await getTranslations({ locale, namespace: 'Components.ChatBot.suggestions' });

        // Build localized response
        const localizedReply = t(intentResponse.replyKey, {
            age: new Date().getFullYear() - 2003
        });

        // Localize suggestions if they are keys
        const localizedSuggestions = intentResponse.suggestions?.map(key => {
            try {
                // Check if it's a valid key in suggestions namespace
                return tSuggestions(key);
            } catch {
                // Fallback to the key itself if it's not a translation key
                return key;
            }
        });

        return NextResponse.json({
            ...intentResponse,
            reply: localizedReply,
            suggestions: localizedSuggestions
        });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
