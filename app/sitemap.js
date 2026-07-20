import { treatments } from '@/lib/data';
export default function sitemap(){ const base='https://fernandoborgesribeiro.com.br'; return [{url:base,lastModified:new Date(),changeFrequency:'weekly',priority:1},...treatments.map(t=>({url:`${base}/tratamentos/${t.slug}`,lastModified:new Date(),changeFrequency:'monthly',priority:.8}))] }
