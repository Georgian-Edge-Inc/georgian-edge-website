type PageHeroVideoProps = {
  name: string;
  poster: string;
  webm: string;
  mp4: string;
};

export default function PageHeroVideo({ name, poster, webm, mp4 }: PageHeroVideoProps) {
  return (
    <div className="pageHeroVideo" aria-hidden="true" style={{ backgroundImage: `url(${poster})` }}>
      <video autoPlay muted loop playsInline preload="metadata" poster={poster}>
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
        {name}
      </video>
    </div>
  );
}
