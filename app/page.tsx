import Image from 'next/image';

export default function Home() {
  return (
    <main className="maintenancePage">
      <section className="maintenanceCard" aria-label="Georgian Edge website under maintenance">
        <Image
          src="/brand/georgian-edge-primary-white.png"
          alt="Georgian Edge Inc."
          width={520}
          height={190}
          priority
          className="maintenanceLogo"
        />
        <p className="maintenanceEyebrow">Website refresh in progress</p>
        <h1 className="serif">We&rsquo;re building something sharper for Georgian Bay properties.</h1>
        <p className="maintenanceText">
          Georgian Edge Inc. is updating our online home. We&rsquo;ll be back soon with a cleaner look,
          updated services, and an easier way to request property care.
        </p>
        <div className="maintenanceFooter">
          <span>Premium property care • Landscapes • Cottage support</span>
        </div>
      </section>
    </main>
  );
}
