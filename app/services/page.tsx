import Image from 'next/image';
import { Camera, CheckCircle2, Leaf, MapPin, Sprout, Trees } from 'lucide-react';
import SiteNav from '../components/SiteNav';

const services = [
  {
    icon: Leaf,
    title: 'Garden cleanups',
    text: 'Seasonal resets for beds, edges, weeds, debris, old growth, soil prep, and the detail work that makes a property feel cared for again.',
    bullets: ['Spring and fall garden resets', 'Bed cleanup and edging', 'Debris removal and prep for mulch or planting'],
  },
  {
    icon: Trees,
    title: 'Landscape builds & refreshes',
    text: 'Design-forward garden beds, planting areas, stone accents, edging, soil, mulch, refreshes, and finishing details that create a complete outdoor space.',
    bullets: ['New garden bed builds', 'Planting layouts and refreshes', 'Pond-edge and muskrat-damage repairs'], 
  },
  {
    icon: Sprout,
    title: 'Planting & pruning',
    text: 'Thoughtful planting, pruning, and ongoing garden maintenance that fits the property instead of fighting it.',
    bullets: ['Planting refreshes', 'Shrub and perennial pruning', 'Garden maintenance visits'],
  },
  {
    icon: MapPin,
    title: 'Property management',
    text: 'Reliable cottage and country property support for owners who need inspections, seasonal opening/closing help, outdoor care coordination, and details handled without chasing everything themselves.',
    bullets: ['Property inspections and check-ins', 'Seasonal opening and closing support', 'Outdoor care coordination'], 
  },
  {
    icon: Camera,
    title: 'Aerial property photography',
    text: 'Aerial property photography for progress, listings, seasonal records, transformations, and larger property planning.',
    bullets: ['Aerial before/after documentation', 'Property overview images', 'Progress and planning documentation'],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="pageHero servicesHero">
        <SiteNav />
        <div className="wrap pageHeroInner">
          <p className="eyebrow">Services</p>
          <h1 className="serif">Outdoor property care and management with a sharper Georgian Bay feel.</h1>
          <p className="lead">Georgian Edge focuses on garden cleanups, landscape builds and refreshes, planting, pruning, property inspections, aerial property photography, and property management — not basic lawn mowing.</p>
        </div>
      </section>

      <section className="serviceDetailGrid wrap">
        {services.map(({ icon: Icon, title, text, bullets }) => (
          <article className="serviceDetail" key={title}>
            <Icon size={30} />
            <h2>{title}</h2>
            <p>{text}</p>
            <ul>
              {bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={17} />{bullet}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="splitFeature wrap">
        <div>
          <p className="eyebrow">How it works</p>
          <h2 className="serif">Walk the property, choose the priorities, keep the place looked after.</h2>
          <p>Most jobs start with a simple property conversation: what needs attention now, what should be watched, what seasonal support is needed, and what would make the biggest visual difference. That can include quieter problem areas too, like pond-edge washouts or muskrat damage. From there Georgian Edge shapes a practical scope instead of forcing a generic package.</p>
          <a className="btn primary" href="/request-work">Request work</a>
        </div>
        <Image src="/photos/stephen-uploaded/georgian-edge-owned-01.jpg" alt="Freshly built garden bed with clean edges and landscape finishing" width={740} height={860} />
      </section>
    </main>
  );
}
