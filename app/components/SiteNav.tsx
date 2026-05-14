import Image from 'next/image';
import Link from 'next/link';

const googleBusinessProfileUrl = 'https://g.page/r/CUB04VSzUFVdEAE';
const facebookUrl = 'https://www.facebook.com/GeorgianEdgeLandscaping/';
const instagramUrl = 'https://www.instagram.com/georgianedgeinc/';

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12.24 10.29v3.92h5.56c-.24 1.27-.97 2.35-2.07 3.08v2.56h3.35c1.96-1.79 3.09-4.43 3.09-7.55 0-.72-.07-1.41-.2-2.01h-9.73Z" />
      <path d="M12.24 22c2.8 0 5.15-.91 6.87-2.48l-3.35-2.56c-.93.61-2.12.98-3.52.98-2.7 0-4.98-1.8-5.8-4.22H2.98v2.64A10.38 10.38 0 0 0 12.24 22Z" />
      <path d="M6.44 13.72a6.1 6.1 0 0 1 0-3.9V7.18H2.98a10.17 10.17 0 0 0 0 9.18l3.46-2.64Z" />
      <path d="M12.24 5.6c1.52 0 2.88.52 3.96 1.53l2.97-2.93C17.37 2.54 15.03 1.5 12.24 1.5a10.38 10.38 0 0 0-9.26 5.68l3.46 2.64c.82-2.42 3.1-4.22 5.8-4.22Z" />
    </svg>
  );
}

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
      <div className="navTopRow">
        <Link href="/" aria-label="Georgian Edge home">
          <Image src={light ? "/brand/georgian-edge-primary-black.png" : "/brand/georgian-edge-primary-white.png"} alt="Georgian Edge Inc." width={180} height={90} className="logo" priority />
        </Link>
        <div className="navContact">
          <a className="navPhone" href="tel:+17054411215">705-441-1215</a>
          <a className="socialIcon" href={googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="Georgian Edge Google Business Profile">
            <GoogleIcon />
          </a>
          <a className="socialIcon" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Georgian Edge on Facebook">
            <FacebookIcon />
          </a>
          <a className="socialIcon" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Georgian Edge on Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="navlinks">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/request-work">Request Work</Link>
      </div>
    </nav>
  );
}
