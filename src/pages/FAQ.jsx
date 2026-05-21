import { faqs } from '../data/mockData';

export default function FAQ() {
  return (
    <div>
      <h1 className="page-title">Frequently Asked Questions</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        {faqs.map(faq => (
          <div key={faq.id} className="card">
            <h3 style={{ color: 'var(--primary-red)' }}>{faq.question}</h3>
            <p style={{ marginTop: '0.5rem' }}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}