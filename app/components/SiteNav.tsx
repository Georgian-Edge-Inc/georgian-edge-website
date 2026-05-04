import Image from 'next/image';
import Link from 'next/link';

export default function SiteNav({ light = false }: { light?: boolean }) {
  return (
    <nav className={`nav wrap ${light ? 'navDark' : ''}`} aria-label="Primary navigation">
      <Link href="/" aria-label="Georgian Edge home">
        <Image src={light ? "/brand/georgian-edge-primary-black.png" : "/brand/georgian-edge-primary-white.png"} alt="Georgian Edge Inc." width={180} height={90} className="logo" priority />
      </Link>
      <div className="navlinks">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/request-work">Request Work</Link>
        <a href="tel:+17054411215">705-441-1215</a>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
