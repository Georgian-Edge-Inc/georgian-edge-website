import Image from 'next/image';
import SiteNav from '../components/SiteNav';

export default function AboutPage() {
  return (
    <main>
      <section className="pageHero aboutHero existingAboutHero">
        <SiteNav />
        <div className="wrap pageHeroInner">
          <p className="eyebrow">Meet the Georgian Edge team</p>
          <h1 className="serif">High-quality property care and landscapes since 2021.</h1>
          <p className="lead">A locally grown property care company serving Collingwood, Blue Mountain, Wasaga Beach, and the surrounding Georgian Bay area.</p>
        </div>
      </section>

      <section className="aboutStory wrap">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="serif">People who love what they do — and do what they love.</h2>
          <p>Georgian Edge started out as a small side business during the summer months and quickly scaled into a full-time landscaping business.</p>
          <p>Stephen graduated from Fleming College in 2015 from the Forestry Technician program, which quickly ignited his love for landscaping and gardening. If you ask him, this isn’t just a job — it’s a passion. He embodies the motto to “do what you love and you’ll never work a day,” and that shows in the work and in the appreciation of Georgian Edge clients.</p>
          <p>Kassidy grew up on her family farm just outside Rocklyn, Ontario. Years of watching her parents work hard, sacrifice, and grow thriving businesses from their passions helped fuel her own love for working outside and building something to be proud of.</p>
          <p>Together, with a combined 15+ years of experience, Stephen and Kassidy have grown a landscaping business they’re proud to put their name on. With satisfied clients and a hardworking crew, Georgian Edge is continuing to grow the quality, care, and service it brings to local properties.</p>
        </div>
        <Image src="/photos/existing-site/about-team.png" alt="Stephen and Kassidy from Georgian Edge Inc." width={900} height={920} />
      </section>

      <section className="values wrap">
        <article><h3>Gardens & outdoor care</h3><p>Clean, practical outdoor care that keeps properties looking sharp through the season.</p></article>
        <article><h3>Property management</h3><p>Inspections, check-ins, seasonal openings, seasonal closings, and owner support for cottages and country properties.</p></article>
        <article><h3>Landscape refreshes</h3><p>Landscape improvements, planting, hardscape details, and refreshes shaped around the property.</p></article>
      </section>

      <section className="splitFeature wrap aboutQuality">
        <Image src="/photos/existing-site/about-hero.png" alt="Georgian Edge landscaping project and team work" width={1200} height={620} />
        <div>
          <p className="eyebrow">Quality property care & maintenance</p>
          <h2 className="serif">Dedicated, experienced, and proud of the finished result.</h2>
          <p>Georgian Edge Inc. delivers quality services for landscaping, garden care, seasonal cleanup, design, installation, property inspections, seasonal openings and closings, and outdoor property maintenance. The team takes pride in helping home, cottage, and commercial properties feel clean, natural, watched-over, and well cared for.</p>
          <a className="btn primary" href="/services">View our services</a>
        </div>
      </section>

      <section className="cta wrap">
        <Image src="/brand/georgian-edge-brandmark-black.png" alt="" width={86} height={86}/>
        <h2 className="serif">Want the property looking sharper this season?</h2>
        <p>Send a note with what you want cleaned up, refreshed, planted, inspected, opened, closed, or managed.</p>
        <a className="btn primary" href="/request-work">Request work</a>
      </section>
    </main>
  );
}
