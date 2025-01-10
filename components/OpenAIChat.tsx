'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function OpenAIChat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }]
        })
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await res.json();
      setResponse(data.choices[0]?.message?.content || 'No response');
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <Input 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          disabled={loading}
        />
        <Button 
          onClick={handleSendMessage} 
          disabled={loading}
          className="mt-2"
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </div>
      {response && (
        <div className="mt-4 p-3 border rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
