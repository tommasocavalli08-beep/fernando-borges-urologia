import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';

const base = 'https://fernando-borges-urologia.vercel.app';

export const metadata = {
  title: 'Dr. Fernando Borges Ribeiro | Médico, Cirurgião e Urologista',
  description: 'Conheça a formação e a trajetória do Dr. Fernando Borges Ribeiro: médico, cirurgião, urologista, gestor, pesquisador, educador e fundador da UROLASER e da FreeDocs.',
  keywords: ['Dr. Fernando Borges Ribeiro', 'urologista Rondonópolis', 'cirurgião urologista', 'andrologia', 'saúde masculina', 'UROLASER Rondonópolis'],
  alternates: { canonical: '/sobre' },
  openGraph: {
    type: 'profile', locale: 'pt_BR', url: '/sobre',
    title: 'Dr. Fernando Borges Ribeiro | Trajetória profissional',
    description: 'Medicina, cirurgia, gestão, pesquisa e educação em uma trajetória de mais de duas décadas.',
    images: [{ url: '/dr-fernando-borges-portrait.webp', width: 1122, height: 1402, alt: 'Dr. Fernando Borges Ribeiro' }],
  },
};

const credentials = ['CRM-MT 4737', 'CRM-SP 155372', 'RQE 1713 — Urologia', 'RQE 1451 — Cirurgia Geral'];

export default function Sobre() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'Physician'],
    '@id': `${base}/sobre#physician`,
    name: 'Dr. Fernando Borges Ribeiro',
    description: 'Médico, cirurgião e urologista dedicado à saúde masculina integral, andrologia, saúde sexual, uro-oncologia, cálculos renais e cirurgia urológica.',
    url: `${base}/sobre`,
    image: `${base}/dr-fernando-borges-portrait.webp`,
    telephone: '+5566981512722',
    medicalSpecialty: 'https://schema.org/Urologic',
    identifier: [
      { '@type': 'PropertyValue', name: 'CRM-MT', value: '4737' },
      { '@type': 'PropertyValue', name: 'CRM-SP', value: '155372' },
      { '@type': 'PropertyValue', name: 'RQE Urologia', value: '1713' },
      { '@type': 'PropertyValue', name: 'RQE Cirurgia Geral', value: '1451' },
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidade Estadual de Maringá' },
      { '@type': 'CollegeOrUniversity', name: 'Universidade Estadual de Londrina' },
    ],
    knowsAbout: ['Saúde masculina integral', 'Urologia', 'Andrologia', 'Cirurgia urológica', 'Fertilidade masculina', 'Medicina regenerativa', 'Longevidade'],
    sameAs: ['https://www.instagram.com/fernandoborges.uro/'],
  };

  return <main className="about-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Header />
    <section className="inner-hero about-hero">
      <span className="overline silver">Sobre o médico</span>
      <h1>Dr. Fernando<br /><em>Borges Ribeiro</em></h1>
      <p>Uma trajetória que conecta medicina, cirurgia, inovação, gestão, pesquisa e educação — com a saúde do homem como centro do cuidado.</p>
    </section>

    <section className="about-intro">
      <aside className="about-portrait-card">
        <Image src="/dr-fernando-borges-portrait.webp" alt="Retrato profissional do Dr. Fernando Borges Ribeiro" width={1122} height={1402} sizes="(max-width: 850px) 100vw, 38vw" priority />
        <div>{credentials.map(item => <span key={item}>{item}</span>)}</div>
      </aside>
      <div className="about-manifesto">
        <span className="overline dark">Trajetória profissional</span>
        <h2>Médico em 2001, e depois não parou mais: Cirurgião, Urologista, Gestor, Investidor, Educador, Pesquisador, Consultor, Marido e Pai.</h2>
        <p className="lead">Graduado em Medicina pela Universidade Estadual de Maringá em 2000, o Dr. Fernando Borges Ribeiro realizou residência médica em Cirurgia Geral e em Urologia na Universidade Estadual de Londrina.</p>
        <div className="registration-note"><strong>Especialidades registradas</strong><p>As especialidades registradas são Cirurgia Geral e Urologia, conforme os RQEs informados nesta página. Formações e aperfeiçoamentos complementares não representam novo título de especialista.</p></div>
      </div>
    </section>

    <article className="bio-content">
      <section className="bio-chapter">
        <div className="bio-index">01</div><div>
          <span className="overline dark">Formação e aperfeiçoamentos</span>
          <h2>Conhecimento construído entre prática e inovação.</h2>
          <p>Realizou aperfeiçoamento em Cirurgia Minimamente Invasiva no Hospital Sírio-Libanês, em São Paulo, e em Cirurgia Robótica no Hospital Israelita Albert Einstein, obtendo também certificação internacional em cirurgia robótica pela Intuitive Surgical. Foi o primeiro cirurgião de Rondonópolis a obter certificação para atuação em cirurgia robótica.</p>
          <p>Sua trajetória também inclui aperfeiçoamento internacional em Andrologia e Medicina Regenerativa, além de certificações voltadas à saúde sexual e estética genital masculina. Possui Certificação Internacional UroFill®, realizada em Miami, Estados Unidos, e formação internacional em Cirurgia Plástica Genital Masculina pela ALAMECE, em Lima, Peru.</p>
        </div>
      </section>

      <section className="bio-chapter">
        <div className="bio-index">02</div><div>
          <span className="overline dark">Urologia, cirurgia e inovação</span>
          <h2>Desenvolvimento da urologia especializada na região.</h2>
          <p>Dr. Fernando teve participação importante no desenvolvimento da Urologia especializada em Rondonópolis e região. Foi fundador e chefe do Serviço de Uro-Oncologia do Hospital do Câncer de Rondonópolis, onde atuou entre 2005 e 2018, contribuindo para a estruturação do atendimento especializado a pacientes com tumores urológicos e acumulando ampla experiência em procedimentos cirúrgicos de alta complexidade.</p>
          <p>Também foi sócio-fundador da RENAL — Serviço de Litotripsia de Rondonópolis, participando da incorporação de novas tecnologias para o tratamento dos cálculos urinários na região.</p>
          <p>É fundador, proprietário e diretor da UROLASER — Centro Urológico de Rondonópolis, hospital dia com estrutura dedicada ao diagnóstico, prevenção e tratamento das doenças urológicas, reunindo tecnologia, atendimento médico especializado e uma visão integrada da saúde masculina.</p>
          <p>Na UROLASER, sua atuação envolve cálculos renais, doenças da próstata, uro-oncologia, disfunção erétil, infertilidade masculina, reposição hormonal, saúde sexual, fertilidade, longevidade, medicina regenerativa, estética genital e cirurgias urológicas minimamente invasivas e robóticas.</p>
          <p>A UROLASER também desenvolve atividades de pesquisa em Urologia Regenerativa e mantém atuação como centro de pesquisa afiliado à Universidade Federal de Rondonópolis, aproximando prática clínica, inovação e produção de conhecimento.</p>
          <p>Ao longo de sua carreira, Dr. Fernando acumulou experiência em mais de 15 mil procedimentos cirúrgicos, incluindo extensa atuação em cirurgia urológica e uro-oncológica.</p>
        </div>
      </section>

      <section className="bio-chapter bio-chapter-dark">
        <div className="bio-index">03</div><div>
          <span className="overline silver">Longevidade, Medicina Integrativa e Regenerativa</span>
          <h2>Uma visão progressivamente ampliada sobre saúde e envelhecimento.</h2>
          <p>Complementou sua formação com Pós-Graduação em Ciências da Longevidade Humana, Pós-Graduação em Medicina Funcional Integrativa e Pós-Graduação em Medicina Regenerativa e Estética.</p>
          <p>Essa formação passou a integrar-se à Urologia e à Andrologia em uma abordagem voltada não apenas ao tratamento de doenças, mas também à saúde masculina global, função hormonal, sexualidade, composição corporal, envelhecimento saudável, performance e qualidade de vida.</p>
          <p>Seu trabalho busca conectar a experiência da medicina tradicional e cirúrgica às possibilidades oferecidas pelas novas tecnologias, pela medicina regenerativa e pela abordagem integral do paciente.</p>
        </div>
      </section>

      <section className="bio-chapter">
        <div className="bio-index">04</div><div>
          <span className="overline dark">Gestão, empreendedorismo e investimentos</span>
          <h2>Medicina, negócios e patrimônio em uma visão multidisciplinar.</h2>
          <p>Paralelamente à Medicina, Dr. Fernando construiu uma trajetória como gestor, empreendedor e investidor, dedicando-se ao estudo de gestão empresarial, planejamento financeiro e construção de patrimônio.</p>
          <p>Possui MBA em Planejamento Financeiro Pessoal e Familiar e MBA em Gestão de Negócios e Empreendedorismo na Saúde pela USP. É também Consultor e Planejador Financeiro e Investidor Profissional Qualificado pela CVM.</p>
          <p>A experiência de mais de duas décadas conciliando Medicina, gestão de clínicas, investimentos e empreendedorismo levou à criação de um novo capítulo de sua trajetória: ajudar médicos e profissionais da saúde a construírem carreiras mais sustentáveis, empresas mais estruturadas e alcançar independência financeira.</p>
        </div>
      </section>

      <section className="bio-chapter">
        <div className="bio-index">05</div><div>
          <span className="overline dark">FreeDocs® — Educação, negócios e liberdade médica</span>
          <h2>Transformar conhecimento médico em estruturas de longo prazo.</h2>
          <p>Dr. Fernando é fundador e CEO da FreeDocs®, ecossistema de inteligência, educação e desenvolvimento voltado a médicos e profissionais da saúde.</p>
          <p>A FreeDocs® nasceu da percepção de que excelência técnica, isoladamente, nem sempre prepara o médico para os desafios de administrar uma clínica, formar equipes, estruturar produtos e serviços, desenvolver posicionamento, vender valor, investir e construir patrimônio.</p>
          <p>Dentro desse ecossistema, desenvolveu uma metodologia baseada na transformação do médico de prestador de serviços dependente da venda de horas para empresário, empreendedor e investidor capaz de construir negócios e patrimônio.</p>
          <p>É também responsável pelo desenvolvimento de projetos educacionais como SexRegen® e AndroRegen®, além de atuar na coordenação de programas de pós-graduação voltados à Medicina Sexual, Andrologia e Medicina Regenerativa.</p>
          <p>Sua atuação educacional procura integrar três dimensões fundamentais para uma carreira médica de longo prazo: excelência médica, construção de negócios e formação de patrimônio.</p>
          <p>Também participa da criação e do desenvolvimento de iniciativas associativas e científicas relacionadas à Urologia Regenerativa, Estética e Medicina Sexual Regenerativa, buscando fomentar educação médica, pesquisa, inovação e intercâmbio científico.</p>
        </div>
      </section>

      <section className="bio-chapter bio-closing">
        <div className="bio-index">06</div><div>
          <span className="overline silver">Uma trajetória construída para além da Medicina</span>
          <h2>Saúde, conhecimento, oportunidades, independência e legado.</h2>
          <p>A carreira de Dr. Fernando Borges Ribeiro combina diferentes dimensões: médico, cirurgião, empreendedor, gestor, educador e investidor.</p>
          <p>Na Medicina, acredita na união entre experiência, ciência, tecnologia e cuidado individualizado. Nos negócios, acredita que médicos precisam aprender a transformar conhecimento em valor, estruturar empresas que não dependam exclusivamente de suas horas de trabalho e desenvolver inteligência financeira.</p>
          <p>Na educação, trabalha para compartilhar aquilo que aprendeu construindo clínicas, serviços médicos, empresas e investimentos ao longo de sua própria trajetória.</p>
          <p className="family-note">E, acima de qualquer realização profissional, reconhece na família seu principal ponto de equilíbrio e sua maior fonte de propósito: marido de Fernanda Veiga e pai de Felipe e Heloísa.</p>
          <ul>{credentials.map(item => <li key={item}><CheckCircle2 />{item}</li>)}</ul>
          <Link className="btn primary" href="/#tratamentos">Conhecer áreas de atuação <ArrowUpRight /></Link>
        </div>
      </section>
    </article>
  </main>;
}
