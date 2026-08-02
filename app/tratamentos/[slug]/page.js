import {notFound} from 'next/navigation';import TreatmentPage from '@/components/TreatmentPage';import {treatments} from '@/lib/data';
export function generateStaticParams(){return treatments.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const t=treatments.find(x=>x.slug===slug);if(!t)return{};return{title:t.title,description:t.description,alternates:{canonical:`/tratamentos/${t.slug}`}}}
export default async function Page({params}){const {slug}=await params;const t=treatments.find(x=>x.slug===slug);if(!t)notFound();return <TreatmentPage treatment={t}/>}
