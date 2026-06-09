import { useState } from 'react';
import { faqs } from '../data/mockData';
import PageHero from '../components/ui/PageHero';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Supporter Info"
        title="Frequently asked"
        spark="questions"
        sub="Matchdays, tickets, tryouts and the story behind the badge — everything you need to follow the Inferno."
      />

      <section className="section--tight">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.id} className={`faq ${isOpen ? 'open' : ''}`}>
                  <button className="faq__q" aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.question}
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                  <div className="faq__a" style={{ maxHeight: isOpen ? '320px' : '0' }}>
                    <div className="faq__a-inner">{f.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
