'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

// Simple Input Component
function SimpleInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
    );
}

// Simple Textarea Component
function SimpleTextarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
    );
}

export function ContactForm() {
    const t = useTranslations('Pages.Contact.form');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('name')}
                </label>
                <SimpleInput
                    id="name"
                    placeholder={t('namePlaceholder')}
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('email')}
                </label>
                <SimpleInput
                    id="email"
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('message')}
                </label>
                <SimpleTextarea
                    id="message"
                    placeholder={t('messagePlaceholder')}
                    className="min-h-[120px]"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                />
            </div>

            <Button className="w-full" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('loading')}
                    </>
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" /> {t('submit')}
                    </>
                )}
            </Button>

            {status === 'success' && (
                <p className="text-sm font-medium text-green-500 mt-2 animate-in fade-in slide-in-from-top-1">
                    {t('success')}
                </p>
            )}
            {status === 'error' && (
                <p className="text-sm font-medium text-destructive mt-2 animate-in fade-in slide-in-from-top-1">
                    {t('error')}
                </p>
            )}
        </form>
    );
}
