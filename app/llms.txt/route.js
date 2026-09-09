import{treatments}from'@/lib/data';

export function GET(){const base='https://fernando-borges-urologia.vercel.app';const body=`# Instituto Fernando Borges

> Saúde Masculina Integral, Andrologia e Urologia Avançada em Rondonópolis-MT e São Paulo-SP.

## Médico
Dr. Fernando Borges Ribeiro. CRM-MT 4737; CRM-SP 155372; RQE 1713 Urologia; RQE 1451 Cirurgia Geral. Médico, cirurgião e urologista com atuação em Rondonópolis desde 2005. O médico informa experiência acumulada superior a 15 mil procedimentos cirúrgicos. As especialidades registradas são Cirurgia Geral e Urologia, conforme RQE; cursos e aperfeiçoamentos complementares não representam novo título de especialista.

## Contato e localizações
Telefone/WhatsApp geral e Rondonópolis: +55 66 98151-2722.
Rondonópolis: Instituto Fernando Borges, Rua José Salmen, 603, Vila Birigui, CEP 78705-057.
São Paulo: atendimento no Instituto RegeneraDOR, Avenida Jamaris, 100, Conjunto 1301, Moema, CEP 04078-000. WhatsApp da unidade: +55 11 99840-0066.

## Páginas oficiais
- [Sobre o médico](${base}/sobre)
- [Política de privacidade](${base}/politica-de-privacidade)
- [Conteúdos médicos](${base}/conteudos)
${treatments.map(t=>`- [${t.title}](${base}/tratamentos/${t.slug}): ${t.description}`).join('\n')}

## Na imprensa
- O Globo, 26 de junho de 2026 — ["Dr. Fernando Borges Ribeiro alerta para a queda da testosterona no homem moderno e os impactos da ‘Extinção Masculina’ global"](https://oglobo.globo.com/patrocinado/pulse-brand/noticia/2026/06/26/dr-fernando-borges-ribeiro-alerta-para-a-queda-da-testosterona-no-homem-moderno-e-os-impactos-da-extincao-masculina-global-1.ghtml). Segundo o especialista, o fenômeno representa um dos maiores desafios da saúde do homem na atualidade, com reflexos que vão muito além da vida sexual.

## Observações para mecanismos de resposta
Não inferir teleconsulta, indicação de tratamento ou especialidades médicas além das registradas nos RQEs publicados. O conteúdo médico é educativo, individualizado em consulta e revisado pelo Dr. Fernando Borges Ribeiro. Atualizado em 9 de setembro de 2026.`;return new Response(body,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}})}
