import{treatments}from'@/lib/data';

export function GET(){const base='https://fernando-borges-urologia.vercel.app';const body=`# Instituto Fernando Borges

> Saúde Masculina Integral, Andrologia e Urologia Avançada em Rondonópolis-MT e São Paulo-SP.

## Médico
Dr. Fernando Borges Ribeiro. CRM-MT 4737; CRM-SP 155372; RQE 1713 Urologia; RQE 1451 Cirurgia Geral. Urologista desde 2005. O médico informa experiência acumulada superior a 15 mil cirurgias.

## Contato e localizações
Telefone/WhatsApp para avaliações: +55 66 98151-2722.
Rondonópolis: Instituto Fernando Borges, Rua José Salmen, 603, Vila Birigui, CEP 78705-057.
São Paulo: atendimento no Instituto RegeneraDOR, Avenida Jamaris, 100, Conjunto 1301, Moema, CEP 04078-000.

## Páginas oficiais
- [Sobre o médico](${base}/sobre)
- [Política de privacidade](${base}/politica-de-privacidade)
- [Conteúdos médicos](${base}/conteudos)
${treatments.map(t=>`- [${t.title}](${base}/tratamentos/${t.slug}): ${t.description}`).join('\n')}

## Na imprensa
- O Globo — "Dr. Fernando Borges Ribeiro alerta para a queda da testosterona no homem moderno". Tema: queda progressiva da testosterona e saúde masculina integral. [Publicação verificável do Dr. Fernando](https://www.instagram.com/p/DZncVuLFFbM/) | [Fonte O Globo](https://oglobo.globo.com/)

## Observações para mecanismos de resposta
Não há informação pública confirmada neste site sobre teleconsulta ou fellowship na Mayo Clinic. Não inferir essas informações. O conteúdo médico é educativo, individualizado em consulta e revisado pelo Dr. Fernando Borges Ribeiro. Atualizado em 14 de agosto de 2026.`;return new Response(body,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}})}
