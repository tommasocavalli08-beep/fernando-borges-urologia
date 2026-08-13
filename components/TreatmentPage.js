import Link from 'next/link';
import {ArrowLeft,ArrowUpRight,CheckCircle2,MapPin} from 'lucide-react';
import Header from './Header';
export default function TreatmentPage({treatment:t}){
 const base='https://fernando-borges-urologia.vercel.app';
 const schema={'@context':'https://schema.org','@graph':[
  {'@type':'MedicalWebPage','@id':`${base}/tratamentos/${t.slug}#webpage`,url:`${base}/tratamentos/${t.slug}`,name:t.title,headline:t.title,description:t.description,inLanguage:'pt-BR',dateModified:'2026-08-13',lastReviewed:'2026-08-13',about:{'@id':`${base}/tratamentos/${t.slug}#procedure`},reviewedBy:{'@id':`${base}/sobre#physician`}},
  {'@type':'MedicalProcedure','@id':`${base}/tratamentos/${t.slug}#procedure`,url:`${base}/tratamentos/${t.slug}`,name:t.title,description:t.description,howPerformed:t.approach.join('; '),performer:{'@id':`${base}/sobre#physician`},provider:{'@id':`${base}/#clinic-rondonopolis`},areaServed:[{'@type':'City',name:'Rondonópolis'},{'@type':'City',name:'São Paulo'}]},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:base},{'@type':'ListItem',position:2,name:'Tratamentos',item:`${base}/#tratamentos`},{'@type':'ListItem',position:3,name:t.title,item:`${base}/tratamentos/${t.slug}`}]},
  {'@type':'FAQPage',mainEntity:t.faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
 ]};
 return <main className="detail"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/>
  <section className="detail-hero"><Link href="/#tratamentos"><ArrowLeft/> Todos os tratamentos</Link><span className="overline silver">{t.category}</span><h1>{t.title}</h1><p>{t.description}</p><div className="local-proof"><MapPin/> Atendimento em Rondonópolis - MT e São Paulo - SP</div></section>
  <section className="detail-body"><article><span className="overline dark">Informação médica revisada</span><h2>Entender antes de <em>decidir.</em></h2><p className="lead">{t.intro}</p><p>A consulta procura identificar causas, fatores associados e o impacto real dos sintomas na vida do paciente. A partir dessa avaliação, o Dr. Fernando Borges Ribeiro discute as alternativas possíveis, incluindo observação, mudanças de hábitos, tratamento clínico ou procedimento, quando indicado.</p>
   <h3>Como é feita a avaliação</h3><div className="approach-grid">{t.approach.map(x=><div key={x}><CheckCircle2/>{x}</div>)}</div>
   <p>Não existe um protocolo idêntico para todos. Exames e condutas são selecionados conforme idade, histórico, sintomas, objetivos e condições de saúde. Essa individualização evita tanto intervenções desnecessárias quanto atrasos em situações que exigem investigação.</p>
   <div className="expert-space"><span>Em atualização</span><h3>Notas e protocolo do Dr. Fernando</h3><p>Área reservada para os detalhes clínicos, tecnologias utilizadas, indicações específicas e orientações que serão fornecidas pelo médico.</p></div>
   <section className="faq"><span className="overline dark">Perguntas frequentes</span><h2>Dúvidas sobre {t.title.toLowerCase()}</h2>{t.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
   <p className="medical-notice">{t.notice}</p></article>
   <aside><h3>Atendimento individualizado</h3><div><CheckCircle2/> Avaliação médica completa</div><div><CheckCircle2/> Conduta baseada em evidências</div><div><CheckCircle2/> Plano definido para cada paciente</div><a className="btn primary" href={`https://wa.me/5566981512722?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20sobre%20${encodeURIComponent(t.title)}.`}>Agendar Avaliação <ArrowUpRight/></a><small>Dr. Fernando Borges Ribeiro<br/>CRM-MT 4737 | RQE 1713 Urologia</small></aside>
  </section><section className="detail-next"><span>Instituto Fernando Borges</span><h2>Saúde masculina por inteiro.</h2><a href="https://wa.me/5566981512722">Conversar com a equipe <ArrowUpRight/></a></section>
 </main>
}
