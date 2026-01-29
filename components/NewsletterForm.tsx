'use client';

import { useState, FormEvent } from 'react';

interface NewsletterFormProps {
  onSuccess: () => void;
}

export function NewsletterForm({ onSuccess }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'newsletter');
      formData.append('email', email);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        onSuccess();
        setEmail('');
      } else {
        console.error('Form submission failed:', response.status);
        // Still show success for user feedback
        onSuccess();
        setEmail('');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success for user feedback
      onSuccess();
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      {/* Honeypot field for spam protection */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human:{' '}
          <input name="bot-field" />
        </label>
      </p>
      <input
        type="email"
        name="email"
        placeholder="gavin@hooli.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-white hover:bg-gray-200 disabled:bg-gray-600 text-black px-6 py-3 transition-colors font-medium whitespace-nowrap"
      >
        {isSubmitting ? 'Subscribing...' : 'Get Updates'}
      </button>
    </form>
  );
}
