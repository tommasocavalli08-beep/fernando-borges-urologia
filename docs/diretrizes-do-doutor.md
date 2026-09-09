# Diretrizes permanentes — Instituto Fernando Borges

Estas orientações devem ser consultadas antes de qualquer alteração futura no site.

## Posicionamento e linguagem

- Posicionar o Instituto em saúde masculina integral, urologia avançada, andrologia, medicina regenerativa e recuperação funcional.
- Equilibrar ciência e tecnologia com humanização, cuidado, ética, princípios e valores.
- Comunicar a visão integral do paciente e a capacidade de reconhecer quando operar e quando não operar.
- Evitar promessas de resultado, superlativos não comprovados e credenciais não confirmadas.
- Manter CRM, RQE, telefone, endereços e nomes das unidades idênticos em todas as páginas.

## Conversão e experiência

- CTA principal: **Agendar Avaliação**.
- WhatsApp principal: **+55 (66) 98151-2722**.
- Exibir um botão flutuante de WhatsApp em todas as páginas, sempre vinculado ao número principal.
- Para a unidade de São Paulo, o CTA específico de agendamento deve usar **+55 (11) 99840-0066**.
- Preferir ícones e linguagem visual aos percentuais abstratos.
- Preservar elegância, legibilidade, velocidade e acabamento mobile de alto nível.
- Usar a fotografia aprovada do Dr. Fernando na seção do especialista até receber novo material oficial.
- Usar na área visual inicial o logotipo azul aprovado pelo médico (`ifb-logo-azul.webp`).

## Conteúdo confirmado

- Dr. Fernando informa experiência superior a 15 mil cirurgias.
- Clube do Check-Up: programas completos, logística coordenada e concierge premium para otimizar tempo, saúde e agenda.
- Rondonópolis: Rua José Salmen, 603, Vila Birigui, CEP 78705-057.
- São Paulo: Instituto RegeneraDOR, Avenida Jamaris, 100, Conjunto 1301, Moema, CEP 04078-000.
- O texto geral da grade de tratamentos deve ser: **“Várias frentes e focos de trabalho. Um único olhar integral.”** Evitar fixar o número de frentes no título.
- Manter uma página própria para cada frente de cuidado e acrescentar **Fertilidade Masculina**.
- A página de Reposição Hormonal e Testosterona deve seguir o documento editorial aprovado pelo médico: diagnóstico antes da prescrição, causas, sintomas, fertilidade, segurança, acompanhamento, FAQ e referências.
- A página Sobre deve usar a biografia profissional fornecida em `BIO IFB`, incluindo os eixos Medicina, Urologia, inovação, longevidade, gestão, FreeDocs e família.
- Texto regulatório preferencial: **“As especialidades registradas são Cirurgia Geral e Urologia, conforme os RQEs informados nesta página. Formações e aperfeiçoamentos complementares não representam novo título de especialista.”**

## SEO e GEO obrigatórios

- Home: `Physician`, `MedicalClinic`/`LocalBusiness`, `WebSite` e `WebPage` em JSON-LD.
- Rappresentare il medico con il tipo multiplo `Person` + `Physician`; usare `https://schema.org/Urologic` come valore enumerato di `medicalSpecialty`.
- Cada página de tratamento: `MedicalWebPage`, `MedicalProcedure`, `BreadcrumbList` e `FAQPage` próprios.
- Vincular procedimentos ao médico e às unidades por `@id` estável.
- Manter metadados únicos, canonical, sitemap, robots e `llms.txt` atualizados.
- Validar JSON-LD sintaticamente após cada alteração e testar as URLs publicadas no Rich Results Test e no Schema Markup Validator quando acessíveis.
- Não inventar dados ausentes: solicitar confirmação ao cliente antes de publicar.

## Imprensa e autoridade editorial

- Destacar aparições confirmadas na imprensa com fonte, tema e link verificável, sem reproduzir integralmente conteúdo protegido.
- Relacionar cada menção ao médico no JSON-LD por `subjectOf`/`citation`, sem declarar o Instituto como autor ou editor da matéria externa.
- Quando a URL profunda da matéria não puder ser confirmada, usar uma publicação verificável do próprio médico e o domínio oficial da fonte; nunca inventar URL, data ou autoria.
- Menção confirmada: O Globo, 26/06/2026 — “Dr. Fernando Borges Ribeiro alerta para a queda da testosterona no homem moderno e os impactos da ‘Extinção Masculina’ global”. URL canônica: https://oglobo.globo.com/patrocinado/pulse-brand/noticia/2026/06/26/dr-fernando-borges-ribeiro-alerta-para-a-queda-da-testosterona-no-homem-moderno-e-os-impactos-da-extincao-masculina-global-1.ghtml
- Apresentar esta matéria com a imagem aprovada pelo médico dentro de uma card editorial responsiva e clicável; manter todo o card vinculado à URL canônica do O Globo.
