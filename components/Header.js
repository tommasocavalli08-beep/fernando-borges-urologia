'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="brand" aria-label="Instituto Fernando Borges — página inicial">
        <span className="logo-monogram" />
        <span><b>Instituto Fernando Borges</b><small>Saúde Masculina • Andrologia • Urologia Avançada</small></span>
      </Link>
      <nav className={open ? 'open' : ''} aria-label="Navegação principal">
        <Link href="/sobre" onClick={closeMenu}>O médico</Link>
        <Link href="/#tratamentos" onClick={closeMenu}>Tratamentos</Link>
        <Link href="/conteudos" onClick={closeMenu}>Conteúdos</Link>
        <Link href="/#unidades" onClick={closeMenu}>Unidades</Link>
        <a className="nav-cta" href="https://wa.me/5566981512722?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">Agendar Avaliação <ArrowUpRight /></a>
      </nav>
      <button type="button" className="menu" onClick={() => setOpen(value => !value)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
