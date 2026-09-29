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
        {card.image && <figure>{card.panel ? <a className="visual-panel-link" href={card.image} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar infográfico original: ${card.title}`}><span className="visual-panel-crop" style={{'--panel-x':card.panel[0],'--panel-y':card.panel[1]}}><Image src={card.image} alt={card.title} width={1672} height={941} sizes="(max-width: 800px) 300vw, 135vw" loading="lazy"/></span></a> : <Image src={card.image} alt={card.title} width={1586} height={992} sizes="(max-width: 800px) 100vw, 45vw" loading="lazy"/>}<figcaption>Ilustração educativa · {String(index + 1).padStart(2, '0')}{card.panel && ' · Toque para ampliar'}</figcaption></figure>}
        <div><span>{String(index + 1).padStart(2, '0')} / {String(section.cards.length).padStart(2, '0')}</span><h3>{card.title}</h3><p>{card.text}</p>{card.sections?.map((part)=><div className="visual-explainer-detail" key={part.title}><h4>{part.title}</h4><p>{part.text}</p></div>)}{card.closing&&<p className="visual-explainer-closing">{card.closing}</p>}</div>
      </article>
    )}</div>
  </section>;
}
