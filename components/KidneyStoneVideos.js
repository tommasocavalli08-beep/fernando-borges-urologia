const videos=['qnNrjsxUP-c','PKGFpuVaePw','xv0m00Qj-H4','pP2-mg8RhTU'];

export default function KidneyStoneVideos(){
 return <section className="kidney-videos" id="videos-calculos" aria-labelledby="kidney-videos-title">
  <div className="kidney-videos-heading"><span>O médico explica</span><h2 id="kidney-videos-title">Vídeos sobre cálculos renais</h2><p>Assista aos vídeos compartilhados pelo Dr. Fernando Borges. Para aprofundar dúvidas sobre sintomas e tratamento, converse com o urologista.</p></div>
  <div className="kidney-videos-grid">{videos.map((id,i)=><article key={id}>
   <div className="kidney-video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={`Dr. Fernando Borges: vídeo ${i+1} sobre cálculos renais`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div>
   <div className="kidney-video-caption"><span>Vídeo {String(i+1).padStart(2,'0')}</span><a href={`https://youtu.be/${id}`} target="_blank" rel="noopener noreferrer">Assistir no YouTube ↗</a></div>
  </article>)}</div>
 </section>;
}
