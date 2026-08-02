import './globals.css';

export const metadata = {
  metadataBase: new URL('https://fernando-borges-urologia.vercel.app'),
  title: { default: 'Instituto Fernando Borges | Saúde Masculina e Andrologia', template: '%s | Instituto Fernando Borges' },
  description: 'Saúde masculina avançada, andrologia, urologia e medicina regenerativa em São Paulo e Rondonópolis. Experiência médica, ciência e tecnologias de fronteira.',
  keywords: ['saúde masculina','andrologista São Paulo','urologista Rondonópolis','reposição hormonal masculina','disfunção erétil','doença de Peyronie','medicina sexual regenerativa','check-up masculino'],
  alternates: { canonical: '/' },
  openGraph: { type:'website', locale:'pt_BR', siteName:'Instituto Fernando Borges', title:'Saúde masculina, andrologia e urologia avançada', description:'Ciência, experiência e tecnologias de fronteira para cuidar da saúde integral do homem.' },
  robots: { index:true, follow:true, googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1} }
};

const schema = {'@context':'https://schema.org','@graph':[
  {'@type':'Physician','@id':'https://fernando-borges-urologia.vercel.app/#physician',name:'Dr. Fernando Borges Ribeiro',description:'Médico dedicado à saúde masculina integral, andrologia, saúde sexual, recuperação funcional e urologia avançada.',medicalSpecialty:['Urology','Andrology'],telephone:'+55 66 9645-7535',sameAs:['https://www.instagram.com/fernandoborges.uro/']},
  {'@type':'MedicalClinic','@id':'https://fernando-borges-urologia.vercel.app/#clinic',name:'Instituto Fernando Borges',description:'Saúde Masculina, Andrologia e Urologia Avançada',telephone:'+55 66 9645-7535',areaServed:['São Paulo','Rondonópolis']},
  {'@type':'WebSite',url:'https://fernando-borges-urologia.vercel.app',name:'Instituto Fernando Borges',inLanguage:'pt-BR'}
]};
export default function RootLayout({children}){return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>{children}</body></html>}
