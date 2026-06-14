'use client';

import { useState } from 'react';

const TEAL = '#07e4c6';

const SYSTEM_OPTIONS = [
  'Standard Intelligent Website Chat System',
  'Customer Chat System — Service Business',
  'Customer Chat System — Retail and E-Commerce',
  'Internal Chat System',
  'Custom Chat System',
  'Not sure yet — help me decide',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputBase: React.CSSProperties = {
  width: '100%',
  background: '#000',
  border: '1px solid rgba(7,228,198,0.25)',
  color: '#fff',
  fontSize: '16px',
  padding: '14px 16px',
  borderRadius: '4px',
  outline: 'none',
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: TEAL,
  marginBottom: '8px',
};

const fieldWrap: React.CSSProperties = {
  marginBottom: '20px',
};

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [systemType, setSystemType] = useState('');
  const [comments, setComments] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, systemType, comments }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setMessage(data?.error || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setMessage('Thanks — we got your message. We will reply within one business day.');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSystemType('');
      setComments('');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again or email connect@output.systems.');
    }
  }

  const submitting = status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#0d1f1a',
        border: '1px solid rgba(7,228,198,0.2)',
        borderRadius: '6px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: TEAL }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div>
          <label htmlFor="firstName" style={labelStyle}>First Name *</label>
          <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputBase}
            disabled={submitting}
          />
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>Last Name *</label>
          <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputBase}
            disabled={submitting}
          />
        </div>
      </div>

      <div style={fieldWrap}>
        <label htmlFor="email" style={labelStyle}>Email *</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputBase}
          disabled={submitting}
        />
      </div>

      <div style={fieldWrap}>
        <label htmlFor="phone" style={labelStyle}>Phone (optional)</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputBase}
          disabled={submitting}
        />
      </div>

      <div style={fieldWrap}>
        <label htmlFor="systemType" style={labelStyle}>System Interest *</label>
        <select
          id="systemType"
          required
          value={systemType}
          onChange={(e) => setSystemType(e.target.value)}
          style={inputBase}
          disabled={submitting}
        >
          <option value="">Select a system...</option>
          {SYSTEM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div style={fieldWrap}>
        <label htmlFor="comments" style={labelStyle}>Comments</label>
        <textarea
          id="comments"
          rows={5}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          style={{ ...inputBase, resize: 'vertical', minHeight: '120px' }}
          disabled={submitting}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          background: TEAL,
          color: '#000',
          fontWeight: 800,
          fontSize: '14px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          padding: '16px 32px',
          border: 'none',
          borderRadius: '4px',
          cursor: submitting ? 'not-allowed' : 'pointer',
          opacity: submitting ? 0.6 : 1,
          width: '100%',
        }}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(7,228,198,0.1)', border: `1px solid ${TEAL}`, borderRadius: '4px', color: TEAL, fontSize: '15px' }}>
          {message}
        </div>
      )}
      {status === 'error' && (
        <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.6)', borderRadius: '4px', color: '#ff8080', fontSize: '15px' }}>
          {message}
        </div>
      )}
    </form>
  );
}
