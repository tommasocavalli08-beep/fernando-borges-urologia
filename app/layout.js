import './globals.css';

export const metadata = {
  metadataBase: new URL('https://fernandoborgesribeiro.com.br'),
  title: { default: 'Dr. Fernando Borges Ribeiro | Urologista e Cirurgião Robótico', template: '%s | Dr. Fernando Borges Ribeiro' },
  description: 'Urologista em Rondonópolis e São Paulo, referência em cirurgia robótica, uro-oncologia, cálculos renais e longevidade. CRM-MT 4737 | RQE 1713.',
  keywords: ['urologista Rondonópolis','cirurgia robótica Rondonópolis','urologista São Paulo','câncer de próstata','cálculo renal','uro-oncologia'],
  alternates: { canonical: '/' },
  openGraph: { type:'website', locale:'pt_BR', siteName:'Dr. Fernando Borges Ribeiro', title:'Urologia de alta precisão, com um olhar integral', description:'Tecnologia, experiência e cuidado humano em urologia e cirurgia robótica.' },
  twitter: { card:'summary_large_image', title:'Dr. Fernando Borges Ribeiro | Urologista', description:'Urologia, cirurgia robótica e cuidado integral.' },
  robots: { index:true, follow:true, googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1} },
};

const schema = {
  '@context':'https://schema.org','@graph':[
    {'@type':'Physician','@id':'https://fernandoborgesribeiro.com.br/#physician',name:'Dr. Fernando Borges Ribeiro',description:'Médico urologista e cirurgião robótico.',medicalSpecialty:['Urology','Oncologic'],telephone:'+55 66 9645-7535',email:'contato@fernandoborgesribeiro.com.br',url:'https://fernandoborgesribeiro.com.br',sameAs:['https://www.instagram.com/fernandoborges.uro/'],identifier:[{ '@type':'PropertyValue',name:'CRM-MT',value:'4737'},{'@type':'PropertyValue',name:'RQE Urologia',value:'1713'}],worksFor:{'@id':'https://fernandoborgesribeiro.com.br/#clinic'}},
    {'@type':['MedicalClinic','LocalBusiness'],'@id':'https://fernandoborgesribeiro.com.br/#clinic',name:'UROLASER Centro Urológico de Rondonópolis',address:{'@type':'PostalAddress',streetAddress:'Rua José Salmen, 603 - Vila Birigui',addressLocality:'Rondonópolis',addressRegion:'MT',postalCode:'78705-057',addressCountry:'BR'},telephone:'+55 66 3426-8651',url:'https://fernandoborgesribeiro.com.br'},
    {'@type':'WebSite','@id':'https://fernandoborgesribeiro.com.br/#website',url:'https://fernandoborgesribeiro.com.br',name:'Dr. Fernando Borges Ribeiro',inLanguage:'pt-BR'}
  ]
};

export default function RootLayout({children}) { return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />{children}</body></html> }
