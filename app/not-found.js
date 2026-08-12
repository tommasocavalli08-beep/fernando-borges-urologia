import Link from 'next/link';
export const metadata={title:'Página não encontrada',robots:{index:false,follow:true}};
export default function NotFound(){return <main className="not-found"><span>404</span><h1>Esta página não foi encontrada.</h1><p>O conteúdo pode ter mudado de endereço. Continue pela página inicial ou consulte as áreas de atendimento.</p><div><Link className="btn dark-btn" href="/">Voltar ao início</Link><Link className="btn outline-btn" href="/#tratamentos">Ver tratamentos</Link></div></main>}
