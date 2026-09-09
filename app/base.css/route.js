const source = 'https://raw.githubusercontent.com/tommasocavalli08-beep/fernando-borges-urologia/0ae22f83fc4892f62d6c3e79b251a32202711325/app/globals.css';

export const revalidate = 86400;

export async function GET() {
  const response = await fetch(source, { next: { revalidate: 86400 } });
  if (!response.ok) return new Response('/* base stylesheet unavailable */', { status: 502, headers: { 'content-type': 'text/css; charset=utf-8' } });
  return new Response(await response.text(), {
    headers: {
      'content-type': 'text/css; charset=utf-8',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
