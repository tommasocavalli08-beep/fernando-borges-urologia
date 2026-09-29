import Image from 'next/image';
import content from '@/lib/visual-content.json';

export default function VisualExplainer({slug}) {
  const section = content[slug];
  if (!section) return null;
  return <section className="visual-explainer" aria-labelledby={`${slug}-visual-title`}>
    <div className="visual-explainer-heading">
      <span>{section.eyebrow}</span>
      <h2 id={`${slug}-visual-title`}>{section.heading}</h2>
      <p>Ilustrações educativas acompanhadas dos textos preparados para orientar a conversa com o médico. A conduta depende da avaliação individual.</p>
    </div>
    <div className="visual-explainer-list">{section.cards.map((card, index) =>
      <article className="visual-explainer-card" key={card.title}>
        {card.image && <figure><Image src={card.image} alt={card.title} width={1586} height={992} sizes="(max-width: 800px) 100vw, 45vw" loading="lazy"/><figcaption>Ilustração educativa · {String(index + 1).padStart(2, '0')}</figcaption></figure>}
        <div><span>{String(index + 1).padStart(2, '0')} / {String(section.cards.length).padStart(2, '0')}</span><h3>{card.title}</h3><p>{card.text}</p>{card.sections?.map((part)=><div className="visual-explainer-detail" key={part.title}><h4>{part.title}</h4><p>{part.text}</p></div>)}{card.closing&&<p className="visual-explainer-closing">{card.closing}</p>}</div>
      </article>
    )}</div>
  </section>;
}
