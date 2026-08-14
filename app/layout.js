import './globals.css';

const base='https://fernando-borges-urologia.vercel.app';
const portrait=`${base}/dr-fernando-borges-portrait.webp`;

export const metadata={
 metadataBase:new URL(base),
 title:{default:'Instituto Fernando Borges | Urologista em Rondonópolis',template:'%s | Instituto Fernando Borges'},
 description:'Dr. Fernando Borges Ribeiro, urologista em Rondonópolis e São Paulo. Saúde masculina, disfunção erétil, testosterona, próstata, cálculos renais e cirurgia robótica.',
 applicationName:'Instituto Fernando Borges',authors:[{name:'Dr. Fernando Borges Ribeiro',url:`${base}/sobre`}],creator:'Instituto Fernando Borges',publisher:'Instituto Fernando Borges',category:'Saúde',
 keywords:['urologista em Rondonópolis','urologista São Paulo','saúde masculina integral','andrologia','disfunção erétil','reposição de testosterona','doença de Peyronie','ejaculação precoce','câncer de próstata','câncer de rim','cálculos renais','cirurgia robótica urológica','Clube do Check-Up'],
 alternates:{canonical:'/',languages:{'pt-BR':'/'}},
 openGraph:{type:'website',locale:'pt_BR',url:base,siteName:'Instituto Fernando Borges',title:'Instituto Fernando Borges | Saúde masculina e urologia',description:'Informação médica e atendimento em saúde masculina integral, andrologia e urologia em Rondonópolis e São Paulo.',images:[{url:portrait,width:1122,height:1402,alt:'Dr. Fernando Borges Ribeiro'}]},
 twitter:{card:'summary_large_image',title:'Instituto Fernando Borges',description:'Saúde masculina integral, andrologia e urologia avançada.',images:[portrait]},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
};

const physicianId=`${base}/sobre#physician`;
const clinicMtId=`${base}/#clinic-rondonopolis`;
const clinicSpId=`${base}/#clinic-sao-paulo`;
const mediaId=`${base}/#destaque-o-globo-testosterona`;
const schema={'@context':'https://schema.org','@graph':[
 {'@type':['Person','Physician'],'@id':physicianId,name:'Dr. Fernando Borges Ribeiro',jobTitle:'Médico Urologista',description:'Médico urologista dedicado à saúde masculina integral, andrologia, saúde sexual, uro-oncologia, cálculos renais e cirurgia urológica.',url:`${base}/sobre`,image:{'@type':'ImageObject',url:portrait,width:1122,height:1402},telephone:'+5566981512722',medicalSpecialty:'https://schema.org/Urologic',identifier:[{'@type':'PropertyValue',name:'CRM-MT',value:'4737'},{'@type':'PropertyValue',name:'CRM-SP',value:'155372'},{'@type':'PropertyValue',name:'RQE Urologia',value:'1713'},{'@type':'PropertyValue',name:'RQE Cirurgia Geral',value:'1451'}],knowsAbout:['Saúde masculina integral','Andrologia','Disfunção erétil','Doença de Peyronie','Ejaculação precoce','Testosterona','Câncer de próstata','Câncer de rim','Cálculos renais','Cirurgia robótica urológica'],workLocation:[{'@id':clinicMtId},{'@id':clinicSpId}],subjectOf:{'@id':mediaId},sameAs:['https://www.instagram.com/fernandoborges.uro/']},
 {'@type':['MedicalClinic','LocalBusiness'],'@id':clinicMtId,name:'Instituto Fernando Borges',alternateName:'Instituto Fernando Borges — Saúde Masculina, Andrologia e Urologia Avançada',url:base,description:'Atendimento médico em saúde masculina integral e urologia.',telephone:'+5566981512722',address:{'@type':'PostalAddress',streetAddress:'Rua José Salmen, 603 — Vila Birigui',addressLocality:'Rondonópolis',addressRegion:'MT',postalCode:'78705-057',addressCountry:'BR'},areaServed:{'@type':'City',name:'Rondonópolis'},medicalSpecialty:'https://schema.org/Urologic',founder:{'@id':physicianId},sameAs:['https://www.instagram.com/fernandoborges.uro/']},
 {'@type':['MedicalClinic','LocalBusiness'],'@id':clinicSpId,name:'Instituto RegeneraDOR',url:'https://institutoregenerador.com/',description:'Local de atendimento presencial do Dr. Fernando Borges Ribeiro em São Paulo.',telephone:'+5566981512722',address:{'@type':'PostalAddress',streetAddress:'Avenida Jamaris, 100 — Conjunto 1301',addressLocality:'São Paulo',addressRegion:'SP',postalCode:'04078-000',addressCountry:'BR'},areaServed:{'@type':'City',name:'São Paulo'},medicalSpecialty:'https://schema.org/Urologic',employee:{'@id':physicianId},sameAs:['https://www.instagram.com/instituto_regenerador/']},
 {'@type':'WebSite','@id':`${base}/#website`,url:base,name:'Instituto Fernando Borges',description:'Saúde masculina integral, andrologia e urologia avançada.',inLanguage:'pt-BR',publisher:{'@id':clinicMtId}},
 {'@type':'WebPage','@id':`${base}/#webpage`,url:base,name:'Instituto Fernando Borges',isPartOf:{'@id':`${base}/#website`},about:{'@id':physicianId},primaryImageOfPage:{'@type':'ImageObject',url:portrait},citation:{'@id':mediaId},inLanguage:'pt-BR'},
 {'@type':'CreativeWork','@id':mediaId,name:'Dr. Fernando Borges Ribeiro alerta para a queda da testosterona no homem moderno',description:'Destaque no O Globo sobre queda progressiva da testosterona e saúde masculina integral.',about:{'@id':physicianId},publisher:{'@type':'NewsMediaOrganization',name:'O Globo',url:'https://oglobo.globo.com/'},sameAs:'https://www.instagram.com/p/DZncVuLFFbM/',inLanguage:'pt-BR'}
]};

export default function RootLayout({children}){return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>{children}</body></html>}
