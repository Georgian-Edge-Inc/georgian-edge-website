import Image from 'next/image';
import Link from 'next/link';

const facebookUrl = 'https://www.facebook.com/GeorgianEdgeLandscaping/';
const instagramUrl = 'https://www.instagram.com/georgianedgeinc/';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.91h2.77l-.44 2.91h-2.33V22A10.02 10.02 0 0 0 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.05-2.65a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
    </svg>
  );
}

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
        <a className="socialIcon" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Georgian Edge on Facebook">
          <FacebookIcon />
        </a>
        <a className="socialIcon" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Georgian Edge on Instagram">
          <InstagramIcon />
        </a>
      </div>
    </nav>
  );
}
