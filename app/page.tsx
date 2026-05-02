import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Leaf, MapPin, Sprout, Trees } from 'lucide-react';
import SiteNav from './components/SiteNav';

const services = [
  { icon: Leaf, title: 'Garden cleanups', text: 'Seasonal resets, bed cleanup, edging, soil prep, and detail work that makes the whole property feel cared for.' },
  { icon: Trees, title: 'Landscape builds & refreshes', text: 'Design-forward garden beds, planting areas, stone accents, edging, soil, mulch, refreshes, and finishing details that create a complete outdoor space.' },
  { icon: Sprout, title: 'Planting & pruning', text: 'Thoughtful planting, pruning, and ongoing garden maintenance that fits the property instead of fighting it.' },
  { icon: MapPin, title: 'Property management', text: 'Reliable cottage and country property support: inspections, seasonal opening/closing help, outdoor care coordination, and details handled without chasing everything yourself.' },
  { icon: Camera, title: 'Aerial property photography', text: 'Aerial property photography for progress, listings, seasonal records, transformations, and larger property planning.' },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <SiteNav />
        <div className="heroInner wrap">
          <div className="heroCopy">
            <p className="eyebrow">Georgian Edge Inc.</p>
            <h1 className="serif">Premium property care and management for Georgian Bay homes and cottages.</h1>
            <p className="lead">Garden cleanups, design-forward landscape builds and refreshes, planting, pruning, property management, aerial property photography, and owner support with a clean, established Georgian Bay feel.</p>
            <div className="actions"><a className="btn light" href="#contact">Request a quote <ArrowRight size={18}/></a><a className="textLink" href="#work">See recent work</a></div>
          </div>
          <div className="heroCard"><Image src="/photos/stephen-uploaded/georgian-edge-owned-03.jpg" alt="Large Georgian Bay property with landscaped gardens and open lawn" fill priority /></div>
        </div>
      </section>

      <section className="intro wrap">
        <div><p className="eyebrow">Properties, handled properly</p><h2 className="serif">Not just outdoor work — a sharper, calmer property.</h2></div>
        <p>Georgian Edge helps bring structure back to gardens, paths, beds, seasonal outdoor spaces, and the property itself. The focus is practical, polished care for owners who want reliable inspections, coordination, and eyes on the place when needed.</p>
      </section>

      <section id="services" className="services wrap">
        {services.map(({ icon: Icon, title, text }) => <article className="service" key={title}><Icon size={25}/><h3>{title}</h3><p>{text}</p></article>)}
      </section>
      <div className="wrap centerLink"><Link className="btn primary" href="/services">View all services</Link></div>

      <section id="about" className="homeAbout wrap">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="serif">A local property care team focused on cleaner, calmer homes, cottages, and outdoor spaces.</h2>
        </div>
        <div>
          <p>Georgian Edge Inc. works with country homes, cottages, and Georgian Bay properties that need detailed outdoor care and management: garden cleanups, landscape builds and refreshes, planting, pruning, property inspections, seasonal support, and owner peace of mind.</p>
          <Link className="btn primary" href="/about">Learn more about Georgian Edge</Link>
        </div>
      </section>

      <section id="work" className="work">
        <div className="wrap workHead"><p className="eyebrow">Recent refresh</p><h2 className="serif">A broader look at gardens, beds, stonework, planting, and cared-for Georgian Bay properties.</h2></div>
        <div className="gallery wrap">
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-02.jpg" alt="Natural stone patio and garden edging completed by Georgian Edge" width={600} height={760}/>
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-10.jpg" alt="Gravel garden refresh with decorative stone features" width={600} height={760}/>
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-04.jpg" alt="Clean curved garden bed edge around mature trees" width={600} height={760}/>
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-07.jpg" alt="Foundation garden bed with shrubs and dark mulch" width={600} height={760}/>
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-08.jpg" alt="Fresh lawn edge and walkway after property maintenance" width={600} height={760}/>
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-09.jpg" alt="Decorative stone feature in a gravel garden" width={600} height={760}/>
        </div>
      </section>

      <section id="contact" className="cta wrap">
        <Image src="/brand/georgian-edge-brandmark-black.png" alt="" width={86} height={86}/>
        <h2 className="serif">Ready to clean up, refresh, inspect, or manage your property?</h2>
        <p>Tell us what your property needs and we’ll help shape the next step.</p>
        <a className="btn primary" href="/request-work">Request work</a>
      </section>
    </main>
  );
}
