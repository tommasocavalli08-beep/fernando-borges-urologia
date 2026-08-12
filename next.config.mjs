/** @type {import('next').NextConfig} */
const securityHeaders=[{key:'X-Content-Type-Options',value:'nosniff'},{key:'X-Frame-Options',value:'SAMEORIGIN'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},{key:'Strict-Transport-Security',value:'max-age=63072000; includeSubDomains; preload'}];
const nextConfig={output:'standalone',images:{unoptimized:true},poweredByHeader:false,async headers(){return[{source:'/(.*)',headers:securityHeaders}]},async redirects(){return[{source:'/sobre-mim',destination:'/sobre',permanent:true},{source:'/blog',destination:'/conteudos',permanent:true}]}};
export default nextConfig;
