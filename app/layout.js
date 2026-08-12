import './globals.css';

const base = 'https://fernando-borges-urologia.vercel.app';

export const metadata = {
  metadataBase: new URL(base),
  title: { default: 'Instituto Fernando Borges | Urologista em Rondonópolis', template: '%s | Instituto Fernando Borges' },
  description: 'Dr. Fernando Borges Ribeiro, urologista em Rondonópolis e São Paulo. Saúde masculina, disfunção erétil, testosterona, próstata, cálculos renais e cirurgia robótica.',
  applicationName: 'Instituto Fernando Borges',
  authors: [{ name: 'Dr. Fernando Borges Ribeiro', url: `${base}/sobre` }],
  creator: 'Instituto Fernando Borges', publisher: 'Instituto Fernando Borges', category: 'Saúde',
  keywords: ['urologista em Rondonópolis','urologista São Paulo','saúde masculina','andrologia','disfunção erétil','reposição de testosterona','doença de Peyronie','ejaculação precoce','câncer de próstata','câncer de rim','cálculos renais','cirurgia robótica urológica','check-up masculino'],
  alternates: { canonical: '/', languages: { 'pt-BR': '/' } },
  openGraph: { type:'website', locale:'pt_BR', url:base, siteName:'Instituto Fernando Borges', title:'Instituto Fernando Borges | Saúde masculina e urologia', description:'Informação médica e atendimento em saúde masculina, andrologia e urologia em Rondonópolis e São Paulo.' },
  twitter: { card:'summary', title:'Instituto Fernando Borges', description:'Saúde masculina, andrologia e urologia avançada.' },
  robots: { index:true, follow:true, googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1} },
};

const physicianId = `${base}/sobre#physician`, clinicId = `${base}/#clinic`;
const schema = {'@context':'https://schema.org','@graph':[
  {'@type':'Physician','@id':physicianId,name:'Dr. Fernando Borges Ribeiro',jobTitle:'Médico Urologista',description:'Médico urologista dedicado à saúde masculina, saúde sexual, uro-oncologia, cálculos renais e cirurgia urológica.',url:`${base}/sobre`,telephone:'+556696457535',medicalSpecialty:'Urology',identifier:[{'@type':'PropertyValue',name:'CRM-MT',value:'4737'},{'@type':'PropertyValue',name:'CRM-SP',value:'155372'},{'@type':'PropertyValue',name:'RQE Urologia',value:'1713'},{'@type':'PropertyValue',name:'RQE Cirurgia Geral',value:'1451'}],knowsAbout:['Saúde masculina','Disfunção erétil','Doença de Peyronie','Ejaculação precoce','Testosterona','Câncer de próstata','Câncer de rim','Cálculos renais','Cirurgia robótica urológica'],worksFor:{'@id':clinicId},sameAs:['https://www.instagram.com/fernandoborges.uro/']},
  {'@type':'MedicalClinic','@id':clinicId,name:'Instituto Fernando Borges',alternateName:'Instituto Fernando Borges — Saúde Masculina, Andrologia e Urologia Avançada',url:base,description:'Atendimento médico em saúde masculina e urologia.',telephone:'+556696457535',address:{'@type':'PostalAddress',streetAddress:'Rua José Salmen, 603',addressLocality:'Rondonópolis',addressRegion:'MT',postalCode:'78705-057',addressCountry:'BR'},areaServed:[{'@type':'City',name:'Rondonópolis'},{'@type':'City',name:'São Paulo'}],medicalSpecialty:'Urology',founder:{'@id':physicianId}},
  {'@type':'WebSite','@id':`${base}/#website`,url:base,name:'Instituto Fernando Borges',description:'Saúde masculina, andrologia e urologia avançada.',inLanguage:'pt-BR',publisher:{'@id':clinicId}},
  {'@type':'WebPage','@id':`${base}/#webpage`,url:base,name:'Instituto Fernando Borges',isPartOf:{'@id':`${base}/#website`},about:{'@id':physicianId},inLanguage:'pt-BR'}
]};
export default function RootLayout({children}){return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>{children}</body></html>}
