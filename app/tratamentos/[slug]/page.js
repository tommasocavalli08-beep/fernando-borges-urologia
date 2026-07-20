import { notFound } from 'next/navigation';
import { treatments } from '@/lib/data';
import TreatmentPage from '@/components/TreatmentPage';
export function generateStaticParams(){return treatments.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params; const t=treatments.find(x=>x.slug===slug); if(!t)return{};return{title:t.title,description:t.desc,alternates:{canonical:`/tratamentos/${t.slug}`},openGraph:{title:`${t.title} | Dr. Fernando Borges Ribeiro`,description:t.desc}}}
export default async function Page({params}){const {slug}=await params;const t=treatments.find(x=>x.slug===slug);if(!t)notFound();return <TreatmentPage treatment={t}/>}
