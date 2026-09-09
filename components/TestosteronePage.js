import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleGauge,
  Dna,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Header from './Header';

const base = 'https://fernando-borges-urologia.vercel.app';
const path = '/tratamentos/reposicao-hormonal-testosterona';
const whatsapp = 'https://wa.me/5566981512722?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20sobre%20sa%C3%BAde%20hormonal%20e%20testosterona.';

const symptoms = [
  ['Queda da libido', HeartPulse],
  ['Menos ereções espontâneas', Activity],
  ['Cansaço e menor disposição', CircleGauge],
  ['Perda de força e massa muscular', Sparkles],
  ['Aumento de gordura corporal', Activity],
  ['Alterações de humor e concentração', Dna],
  ['Redução da densidade óssea', ShieldCheck],
  ['Infertilidade', Users],
];

const causes = [
  ['Alterações nos testículos', 'Quadros de hipogonadismo primário podem reduzir a produção hormonal.'],
  ['Alterações no comando hormonal', 'Hipotálamo e hipófise participam do eixo que estimula os testículos.'],
  ['Obesidade e metabolismo', 'Composição corporal e alterações metabólicas podem interferir nos níveis hormonais.'],
  ['Sono inadequado', 'Privação de sono e distúrbios como apneia precisam entrar na investigação.'],
  ['Medicamentos e doenças', 'Condições clínicas e alguns medicamentos podem contribuir para os sintomas.'],
  ['Uso prévio de anabolizantes', 'O eixo hormonal pode permanecer suprimido e exigir avaliação específica.'],
];

const diagnosis = [
  ['01', 'Consulta médica', 'Sintomas, histórico, medicamentos, sono, sexualidade e objetivos.'],
  ['02', 'Testosterona', 'Coleta correta e confirmação laboratorial quando necessária.'],
  ['03', 'Eixo hormonal', 'LH, FSH, prolactina e exames adicionais conforme cada caso.'],
  ['04', 'Segurança', 'Hemograma, próstata, pressão, risco cardiovascular, metabolismo e fertilidade.'],
  ['05', 'Estratégia', 'Plano individualizado, com indicação real, metas e acompanhamento.'],
];

const treatments = [
  ['Causas reversíveis', 'Peso e composição corporal, atividade física, sono, metabolismo, doenças e medicamentos devem ser considerados antes ou junto de qualquer terapia.'],
  ['Testosterona', 'Quando existe diagnóstico adequado e não há contraindicações, gel ou formas injetáveis podem ser discutidos para restaurar níveis fisiológicos — nunca buscar níveis supranormais.'],
  ['Fertilidade', 'Para quem pretende ter filhos, a estratégia muda. Testosterona externa pode interromper temporariamente a produção de espermatozoides.'],
  ['Monitoramento', 'Sintomas, testosterona, hemoglobina, hematócrito, pressão, próstata, saúde metabólica e possíveis efeitos adversos precisam de seguimento.'],
];

const faq = [
  ['Qual testosterona é considerada baixa?', 'Não existe um número isolado que resolva todos os casos. O resultado precisa ser interpretado com sintomas, horário da coleta, repetição do exame, SHBG ou testosterona livre quando indicados e contexto clínico.'],
  ['Em qual idade devo começar a reposição?', 'Não existe uma idade automática. A indicação depende de sintomas compatíveis, deficiência confirmada, investigação da causa, segurança e objetivos individuais.'],
  ['Reposição de testosterona melhora a libido?', 'Pode melhorar a libido em homens com deficiência verdadeira, mas desejo sexual também depende de saúde emocional, sono, relacionamento, medicamentos e outras condições.'],
  ['Reposição de testosterona melhora a ereção?', 'Nem sempre. A disfunção erétil é multifatorial e pode envolver circulação, metabolismo, neurologia, medicamentos e fatores emocionais.'],
  ['Testosterona pode aumentar o hematócrito?', 'Pode. Por isso hemoglobina e hematócrito fazem parte do acompanhamento e podem exigir ajuste ou interrupção da estratégia.'],
  ['Testosterona prejudica a fertilidade?', 'A testosterona externa pode reduzir ou interromper temporariamente a produção de espermatozoides. O desejo reprodutivo deve ser discutido antes do tratamento.'],
  ['Testosterona faz mal ao coração?', 'A avaliação cardiovascular é individual. Risco, benefícios e segurança devem ser discutidos conforme histórico, exames e acompanhamento.'],
  ['Reposição de testosterona causa câncer de próstata?', 'A reposição fisiológica não deve ser tratada como causa automática, mas avaliação da próstata e acompanhamento permanecem importantes conforme idade e risco.'],
  ['Injeção ou gel: qual é melhor?', 'Não existe uma opção universalmente melhor. Perfil clínico, preferência, adesão, estabilidade dos níveis, custo e acompanhamento orientam a escolha.'],
  ['E o chamado “chip de testosterona”?', 'Qualquer implante ou formulação hormonal exige análise de indicação, dose, possibilidade de ajuste, evidência, segurança e regularização. Soluções padronizadas não substituem avaliação médica.'],
];

export default function TestosteronePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage', '@id': `${base}${path}#webpage`, url: `${base}${path}`,
        name: 'Reposição Hormonal Masculina e Testosterona',
        headline: 'Testosterona baixa? Reposição hormonal masculina começa pelo diagnóstico certo.',
        description: 'Entenda quando a testosterona baixa precisa de tratamento, sintomas, diagnóstico, reposição hormonal masculina, fertilidade, riscos e acompanhamento.',
        inLanguage: 'pt-BR', dateModified: '2026-09-09', lastReviewed: '2026-09-09',
        about: { '@id': `${base}${path}#condition` }, author: { '@id': `${base}/sobre#physician` },
      },
      {
        '@type': 'MedicalCondition', '@id': `${base}${path}#condition`, name: 'Hipogonadismo masculino',
        alternateName: 'Deficiência de testosterona',
        description: 'Condição clínica diagnosticada pela combinação de sintomas compatíveis, testosterona persistentemente baixa e investigação da causa.',
        possibleTreatment: { '@id': `${base}${path}#therapy` },
      },
      {
        '@type': 'MedicalTherapy', '@id': `${base}${path}#therapy`, name: 'Terapia de reposição de testosterona',
        description: 'Terapia individualizada que pode ser considerada após confirmação diagnóstica, avaliação de segurança, objetivos reprodutivos e discussão de riscos e benefícios.',
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: base },
          { '@type': 'ListItem', position: 2, name: 'Tratamentos', item: `${base}/#tratamentos` },
          { '@type': 'ListItem', position: 3, name: 'Reposição Hormonal e Testosterona', item: `${base}${path}` },
        ],
      },
      {
        '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({
          '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return <main className="testosterone-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Header />

    <section className="trt-hero">
      <div className="trt-copy">
        <Link className="trt-back" href="/#tratamentos"><ArrowLeft /> Todos os tratamentos</Link>
        <span className="trt-kicker">Saúde hormonal masculina</span>
        <h1>Testosterona baixa? <em>Reposição hormonal masculina</em> começa pelo diagnóstico certo.</h1>
        <p>Cansaço, queda da libido, perda de força, dificuldade sexual e mudanças na composição corporal podem estar relacionados à deficiência de testosterona. Mas esses mesmos sintomas também podem ocorrer por dezenas de outros motivos.</p>
        <p className="trt-question">Por isso, antes de pensar em “repor hormônios”, é preciso responder a uma pergunta mais importante: a sua testosterona realmente está baixa — e por quê?</p>
        <div className="trt-actions"><a className="trt-btn" href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar avaliação <ArrowUpRight /></a><a className="trt-btn trt-btn-ghost" href="#diagnostico">Entender o diagnóstico</a></div>
        <small>Diagnóstico <i /> Estratégia <i /> Acompanhamento</small>
      </div>
      <div className="trt-visual" aria-hidden="true"><div className="trt-orbit trt-orbit-a" /><div className="trt-orbit trt-orbit-b" /><div className="trt-signal"><FlaskConical /><span>Diagnóstico antes da prescrição</span><strong>01</strong></div><div className="trt-axis"><span>Cérebro</span><i /><span>LH / FSH</span><i /><span>Testículos</span><i /><span>Testosterona</span></div></div>
    </section>

    <section className="trt-truth"><h2>Um exame baixo não define sozinho deficiência de testosterona.</h2><div><span>Sintomas</span><span>Confirmação laboratorial</span><span>Identificação da causa</span><span>Estratégia</span></div></section>

    <section className="trt-section trt-definition" id="diagnostico">
      <div><span className="trt-kicker dark">Entender primeiro</span><h2>O que é deficiência de testosterona?</h2></div>
      <div><p className="trt-lead">A testosterona é produzida principalmente nos testículos e participa do desejo sexual, produção de espermatozoides, massa muscular, saúde óssea, glóbulos vermelhos e disposição.</p><p>Uma única testosterona baixa não confirma automaticamente deficiência. O diagnóstico de hipogonadismo geralmente combina sintomas compatíveis, testosterona persistentemente baixa e investigação da causa.</p><ul className="trt-checks"><li><Check />Não existe diagnóstico apenas pelo exame.</li><li><Check />Uma única testosterona baixa geralmente não é suficiente.</li><li><Check />Nem todo homem com sintomas precisa de reposição hormonal.</li><li><Check />Quando existe deficiência verdadeira, o tratamento pode fazer diferença.</li></ul></div>
    </section>

    <section className="trt-section trt-symptoms">
      <span className="trt-kicker dark">Sinais que merecem contexto</span><div className="trt-section-heading"><h2>Possíveis sintomas.</h2><p>Os sinais podem ter muitas causas. Eles orientam a investigação, mas não substituem o diagnóstico.</p></div>
      <div className="trt-card-grid">{symptoms.map(([label, Icon], index) => <article key={label}><span>{String(index + 1).padStart(2, '0')}</span><Icon /><h3>{label}</h3></article>)}</div>
      <p className="trt-note"><strong>Fertilidade:</strong> tomar testosterona não é tratamento de infertilidade e pode reduzir a produção de espermatozoides.</p>
    </section>

    <section className="trt-section trt-causes">
      <span className="trt-kicker">Investigar a origem</span><div className="trt-section-heading"><h2>Testosterona baixa pode ter causas diferentes.</h2><p>Descobrir a origem muda a estratégia e pode revelar fatores reversíveis.</p></div>
      <div className="trt-cause-grid">{causes.map(([title, text]) => <article key={title}><Microscope /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="trt-section trt-diagnosis">
      <span className="trt-kicker dark">Avaliação em etapas</span><h2>Do sintoma à estratégia.</h2>
      <div className="trt-path">{diagnosis.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      <div className="trt-ideal"><CircleGauge /><div><h3>Existe uma testosterona ideal?</h3><p>Não há um único número ideal para todos. Sintomas, horário da coleta, repetição do exame, SHBG ou testosterona livre quando necessários, idade, contexto clínico e provável causa precisam ser interpretados em conjunto. O objetivo não é apenas elevar um número.</p></div></div>
    </section>

    <section className="trt-section trt-options">
      <span className="trt-kicker dark">Possibilidades de cuidado</span><div className="trt-section-heading"><h2>Tratamento não é sinônimo de receita pronta.</h2><p>A melhor estratégia depende da causa, intensidade da deficiência, sintomas, idade, características individuais e objetivos de vida. Mais não é necessariamente melhor.</p></div>
      <div className="trt-option-grid">{treatments.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="trt-fertility"><div><Users /><span className="trt-kicker">Decisão que muda a estratégia</span><h2>Pretende ter filhos? Isso muda a estratégia hormonal.</h2><p>A testosterona externa pode reduzir ou interromper temporariamente a produção de espermatozoides. O desejo atual ou futuro de paternidade precisa ser discutido antes de iniciar qualquer terapia. Existem caminhos individualizados que dependem da avaliação hormonal e reprodutiva.</p><Link href="/tratamentos/fertilidade-masculina">Conhecer a página de fertilidade masculina <ArrowUpRight /></Link></div></section>

    <section className="trt-authority">
      <div className="trt-authority-photo"><Image src="/dr-fernando-borges-portrait.webp" alt="Dr. Fernando Borges Ribeiro" width={1122} height={1402} sizes="(max-width: 850px) 100vw, 40vw" /></div>
      <div><span className="trt-kicker dark">Informação médica com experiência clínica</span><h2>Dr. Fernando Borges Ribeiro</h2><p>Médico, cirurgião e urologista com atuação em saúde masculina, sexualidade, função hormonal e tratamentos urológicos. Sua proposta de avaliação combina consulta individual, sintomas, exames, saúde sexual, metabolismo, composição corporal e objetivos de vida.</p><p>Possui residência em Cirurgia Geral e Urologia, além de formação complementar em cirurgia minimamente invasiva, cirurgia robótica, longevidade, medicina integrativa, andrologia e medicina regenerativa. As especialidades registradas são Cirurgia Geral e Urologia, conforme RQE.</p><div className="trt-credentials"><span>CRM-MT 4737</span><span>CRM-SP 155372</span><span>RQE 1713 — Urologia</span><span>RQE 1451 — Cirurgia Geral</span></div><Link href="/sobre">Conhecer a trajetória completa <ArrowUpRight /></Link></div>
    </section>

    <section className="trt-attention">
      <article><HeartPulse /><span className="trt-kicker dark">Quando procurar avaliação</span><h2>Sintomas persistentes merecem ser compreendidos.</h2><p>Vale conversar com um médico diante de queda persistente da libido, redução de ereções espontâneas, cansaço sem explicação, perda de força ou massa muscular, mudanças de composição corporal, alterações de humor, infertilidade, exame prévio baixo ou recuperação após uso de anabolizantes.</p></article>
      <article><ShieldCheck /><span className="trt-kicker">Atenção durante o uso</span><h2>Sinais agudos exigem assistência imediata.</h2><p>Dor no peito, falta de ar, inchaço ou dor na perna, alterações neurológicas súbitas, dor de cabeça intensa com pressão muito elevada ou outro sintoma agudo importante devem ser avaliados sem demora em um serviço de urgência.</p></article>
    </section>

    <section className="trt-section trt-faq">
      <span className="trt-kicker dark">Mitos e perguntas frequentes</span><h2>Decisões melhores começam com perguntas melhores.</h2>
      <div>{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="trt-sources">
      <span className="trt-kicker">Referências científicas e regulatórias</span><h2>Conteúdo orientado por fontes reconhecidas.</h2>
      <ul><li>European Association of Urology — Guidelines on Sexual and Reproductive Health: Male Hypogonadism.</li><li>Endocrine Society — Testosterone Therapy in Men With Hypogonadism.</li><li>U.S. Food and Drug Administration — Testosterone Information and Labeling Updates.</li><li>Lincoff AM et al. Cardiovascular Safety of Testosterone-Replacement Therapy. NEJM, 2023.</li><li>Sociedade Brasileira de Urologia — posicionamento sobre deficiência e reposição de testosterona.</li><li>Conselho Federal de Medicina — Resolução CFM nº 2.333/2023.</li></ul>
      <p>Conteúdo educativo. Não substitui consulta, exame físico ou diagnóstico médico. Indicação, contraindicações e acompanhamento dependem da avaliação individual.</p>
    </section>

    <section className="trt-final"><span className="trt-kicker">Saúde hormonal masculina</span><h2>Antes de repor, investigue.</h2><p>Uma avaliação individualizada ajuda a entender a causa, confirmar o diagnóstico e escolher uma estratégia coerente com sua saúde e seus objetivos.</p><a className="trt-btn" href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar avaliação <ArrowUpRight /></a></section>
    <a className="trt-mobile-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar avaliação <ArrowUpRight /></a>
  </main>;
}
