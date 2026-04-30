import Link from 'next/link';
import { ArrowRight, ClipboardList, ShieldCheck } from 'lucide-react';
import SiteNav from '../components/SiteNav';

const jobberRequestUrl = 'https://clienthub.getjobber.com/hubs/4dddfa75-84ac-4cd0-b8af-250b1a49d53c/public/requests/304805/new';

export default function RequestWorkPage() {
  return (
    <main>
      <section className="pageHero requestHero">
        <SiteNav />
        <div className="wrap pageHeroInner">
          <p className="eyebrow">Request work</p>
          <h1 className="serif">Tell us what your property needs.</h1>
          <p className="lead">Use the Georgian Edge request form to share your property details, photos, timing, and the outdoor work or property management support you want quoted.</p>
        </div>
      </section>

      <section className="requestPanel wrap">
        <div className="requestPhoto" aria-hidden="true"></div>
        <div className="requestCard">
          <ClipboardList size={34} />
          <h2 className="serif">Start a request through Jobber</h2>
          <p>For now, Georgian Edge is using Jobber to collect work requests while the custom CRM is being built. This keeps quote requests organized and makes sure nothing gets missed.</p>
          <a className="btn primary requestButton" href={jobberRequestUrl} target="_blank" rel="noopener noreferrer">
            Open request form <ArrowRight size={18} />
          </a>
          <p className="smallNote">The form opens securely on Jobber in a new tab.</p>
        </div>
        <div className="requestSteps">
          <div><span>1</span><p>Describe the cleanup, landscape build or refresh, planting, pruning, pond-edge repair, inspection, seasonal support, or property care you need.</p></div>
          <div><span>2</span><p>Add your contact info, property address, timing, and photos if helpful.</p></div>
          <div><span>3</span><p>Georgian Edge reviews the request and follows up with the next step.</p></div>
        </div>
      </section>

      <section className="trustStrip wrap">
        <ShieldCheck size={22} />
        <p>Temporary Jobber form now. Custom Georgian Edge CRM later — same website flow, cleaner backend when ready.</p>
      </section>

      <section className="cta wrap">
        <h2 className="serif">Not ready to fill out the form?</h2>
        <p>You can still email directly and we’ll point you in the right direction.</p>
        <Link className="btn primary" href="mailto:georgianedgelandscaping@gmail.com">Email Georgian Edge</Link>
      </section>
    </main>
  );
}
