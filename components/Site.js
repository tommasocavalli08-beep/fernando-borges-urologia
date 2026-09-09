'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Activity, ArrowDown, ArrowUpRight, Baby, Bot, Check, Circle, ClipboardCheck, Cross,
  Gem, HeartPulse, Instagram, MapPin, Microscope, Orbit, Phone, ScanLine,
  ShieldCheck, Sparkles, Stethoscope, Timer, UserRoundCheck,
} from 'lucide-react';
import Header from './Header';
import Reveal from './Reveal';
import PressFeatureCard from './PressFeatureCard';
import { treatments } from '@/lib/data';
import { pressFeatures } from '@/lib/press';

const mainWhatsApp = 'https://wa.me/5566981512722?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';
const treatmentIcons = { Activity, Baby, Bot, ClipboardCheck, Cross, Gem, HeartPulse, ScanLine, ShieldCheck, Sparkles, Timer, UserRoundCheck };

export default function Site() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <main>
    <motion.div className="progress" style={{ scaleX }} />
    <Header />
    <section className="hero">
      <div className="hero-noise" /><div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
      <div className="hero-copy">
        <motion.p className="overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>Instituto Fernando Borges</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>O homem por inteiro.<br /><em>Ciência e Tecnologia em Equilíbrio com Humanização e Cuidado.</em></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }}>Saúde masculina integral, urologia avançada, andrologia, medicina regenerativa e recuperação funcional, unindo experiência médica, humanização, cuidado, ciência e tecnologias de fronteira com ética, princípios e valores.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
          <a className="btn primary" href={mainWhatsApp} target="_blank" rel="noopener noreferrer">Agendar Avaliação <ArrowUpRight /></a>
          <a className="btn secondary" href="#tratamentos">Conhecer tratamentos <ArrowDown /></a>
        </motion.div>
      </div>
      <motion.div className="hero-logo hero-logo-approved" initial={{ opacity: 0, scale: .92, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .25 }}>
        <Image className="hero-logo-image" src="/ifb-logo-azul.webp" alt="Logotipo azul do Instituto Fernando Borges" width={960} height={960} priority sizes="(max-width: 580px) 250px, (max-width: 950px) 320px, 36vw" />
      </motion.div>
      <div className="ratio">
        <div><HeartPulse /><span><b>Saúde masculina integral</b>Sexualidade, hormônios, longevidade e regeneração funcional</span></div>
        <div><Bot /><span><b>Urologia avançada</b>Laser, robótica, uro-oncologia e alta complexidade</span></div>
      </div>
    </section>

    <section className="promise" id="instituto"><Reveal>
      <span className="overline dark">Um especialista com olhar integral do paciente</span>
      <blockquote><p>“Sua experiência de mais de 15 mil cirurgias e alta capacidade de conexão com seus pacientes permitem saber, com perspicácia, quando operar e quando não operar.</p><p>Algo fundamental nos dias atuais. Sua visão integral permite reconhecer quando o homem precisa de muito mais do que um especialista, uma cirurgia ou um procedimento de alta complexidade pode oferecer.”</p></blockquote>
    </Reveal></section>

    <section className="focus section"><div className="section-index">01 — Novo foco</div><div className="focus-grid">
      <Reveal><span className="overline dark">Saúde masculina integral</span><h2>Cuidar da função, da vitalidade e da <em>longevidade.</em></h2></Reveal>
      <Reveal delay={.1}>
        <p className="lead">Atuando desde a promoção de saúde e longevidade, na prevenção de doenças, no diagnóstico preciso, no tratamento especializado e na recuperação global da saúde do homem moderno.</p>
        <p>O Instituto reúne andrologia, saúde sexual, terapias hormonais, medicina regenerativa e urologia avançada. Quando a cirurgia é necessária, soma ampla experiência consolidada com tecnologias de ponta como laser, laparoscopia, cirurgia robótica e outras modalidades, sempre acompanhando o que há de mais moderno e eficiente em tratamentos cirúrgicos.</p>
        <div className="pillars"><div><Microscope /><b>Ciência</b><span>Protocolos e pesquisa clínica</span></div><div><Orbit /><b>Tecnologia</b><span>Recursos de fronteira</span></div><div><Stethoscope /><b>Experiência</b><span>Visão clínica e cirúrgica</span></div></div>
      </Reveal>
    </div></section>

    <section className="press-section section" id="imprensa"><div className="section-index light">02 — Na imprensa</div><Reveal>
      <span className="overline silver">Autoridade em pauta</span><div className="press-heading"><h2>Dr. Fernando Borges no <em>O Globo.</em></h2><p>{pressFeatures[0].description}</p></div><PressFeatureCard item={pressFeatures[0]} />
    </Reveal></section>

    <section className="treatments section" id="tratamentos"><div className="section-index light">03 — Tratamentos</div><Reveal>
      <span className="overline silver">Jornada individualizada</span><h2>Várias frentes e focos de trabalho.<br /><em>Um único olhar integral.</em></h2>
      <p className="section-intro">Informação médica clara para compreender cada condição, como funciona a avaliação e quais caminhos podem ser discutidos em consulta. As páginas permanecem preparadas para receber os próximos protocolos autorais do Dr. Fernando.</p>
    </Reveal><div className="treatment-grid">{treatments.map((t, i) => { const Icon = treatmentIcons[t.icon] || Circle; return <Reveal key={t.slug} delay={(i % 3) * .06}><Link href={`/tratamentos/${t.slug}`} className="treatment-card"><span className="number">{String(i + 1).padStart(2, '0')}</span><Icon /><small>{t.category}</small><h3>{t.title}</h3><p>{t.description}</p><span className="learn">Ver página dedicada <ArrowUpRight /></span></Link></Reveal>; })}</div></section>

    <section className="doctor section" id="especialista"><div className="section-index">04 — O especialista</div><div className="doctor-grid">
      <Reveal className="doctor-mark"><Image className="doctor-photo" src="/dr-fernando-borges-portrait.webp" alt="Dr. Fernando Borges Ribeiro, médico urologista" width={1122} height={1402} sizes="(max-width: 950px) 100vw, 38vw" /><div className="credentials">CRM-MT 4737 • CRM-SP 155372<br />RQE 1451 • RQE 1713</div></Reveal>
      <Reveal><span className="overline dark">Dr. Fernando Borges Ribeiro</span><h2>Experiência cirúrgica.<br /><em>Visão integrativa.</em></h2><p className="lead">Médico dedicado à saúde masculina integral, com experiência consolidada em urologia.</p><ul>{['Atuação em andrologia, saúde sexual e recuperação funcional.','Interesse e atuação em medicina regenerativa.','Desenvolvimento de protocolos e pesquisas clínicas.','Experiência cirúrgica em laser, laparoscopia e robótica.','Acompanhamento do diagnóstico ao tratamento de alta complexidade.'].map(item => <li key={item}><Check />{item}</li>)}</ul><Link className="btn dark-btn" href="/sobre">Conhecer formação e trajetória <ArrowUpRight /></Link></Reveal>
    </div></section>

    <section className="surgery"><Reveal><span className="overline silver">Quando operar é a melhor escolha</span><h2>Alta complexidade com precisão e experiência.</h2><p>Cirurgia a laser, laparoscopia, cirurgia robótica e uro-oncologia permanecem como pilares importantes — agora integrados a uma visão mais ampla da saúde do homem.</p></Reveal><div className="surgery-lines"><span>Laser</span><span>Laparoscopia</span><span>Robótica</span><span>Uro-oncologia</span></div></section>

    <section className="units section" id="unidades"><div className="section-index">05 — Unidades</div><Reveal><span className="overline dark">Atendimento presencial</span><h2>São Paulo e <em>Rondonópolis.</em></h2></Reveal><div className="unit-grid">
      <Reveal className="unit featured"><small>São Paulo — SP</small><MapPin /><h3>Instituto RegeneraDOR</h3><p>Av. Jamaris, 100 — Conjunto 1301, Moema, São Paulo — SP, CEP 04078-000.</p><div className="unit-links"><a href="https://maps.google.com/?q=Av.+Jamaris+100+Conjunto+1301+Moema+S%C3%A3o+Paulo+SP" target="_blank" rel="noopener noreferrer">Ver no mapa <MapPin /></a><a href="https://wa.me/5511998400066?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20em%20S%C3%A3o%20Paulo." target="_blank" rel="noopener noreferrer">Agendar avaliação <ArrowUpRight /></a><a href="https://www.instagram.com/instituto_regenerador/" target="_blank" rel="noopener noreferrer">Instituto no Instagram <Instagram /></a></div></Reveal>
      <Reveal className="unit" delay={.1}><small>Rondonópolis — MT</small><MapPin /><h3>Instituto Fernando Borges</h3><p>Rua José Salmen, 603 — Vila Birigui, Rondonópolis — MT, CEP 78705-057.</p><div className="unit-links"><a href="https://maps.google.com/?q=Rua+Jos%C3%A9+Salmen+603+Vila+Birigui+Rondon%C3%B3polis+MT+78705-057" target="_blank" rel="noopener noreferrer">Ver no mapa <MapPin /></a><a href="https://wa.me/5566981512722?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20Rondon%C3%B3polis." target="_blank" rel="noopener noreferrer">Agendar avaliação <ArrowUpRight /></a><a href="https://www.instagram.com/fernandoborges.uro/" target="_blank" rel="noopener noreferrer">Instagram do médico <Instagram /></a></div></Reveal>
    </div></section>

    <section className="closing"><Reveal><span className="logo-monogram" /><p>Seu cuidado pode começar agora.</p><h2>Converse com nossa equipe.</h2><a className="btn primary" href={mainWhatsApp} target="_blank" rel="noopener noreferrer">Agendar Avaliação <ArrowUpRight /></a></Reveal></section>
    <Footer />
  </main>;
}

function Footer() { return <footer><div className="footer-brand"><span className="logo-monogram" /><div><b>Instituto Fernando Borges</b><small>Saúde Masculina • Andrologia • Urologia Avançada</small></div></div><div><h4>Contato e informações</h4><a href="tel:+5566981512722"><Phone /> +55 (66) 98151-2722</a><a href="https://www.instagram.com/fernandoborges.uro/" target="_blank" rel="noopener noreferrer"><Instagram /> @fernandoborges.uro</a><Link href="/conteudos">Conteúdos médicos</Link><Link href="/politica-de-privacidade">Política de privacidade</Link></div><div className="legal">Dr. Fernando Borges Ribeiro<br />CRM-MT 4737 • CRM-SP 155372<br />RQE 1451 • RQE 1713<br />© {new Date().getFullYear()} Instituto Fernando Borges</div></footer>; }
