export default function PageHero({ eyebrow, title, spark, sub }) {
  return (
    <header className="page-hero">
      <div className="page-hero__bg" />
      <div className="wrap">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title} {spark && <span className="spark">{spark}</span>}</h1>
        {sub && <p className="lede">{sub}</p>}
      </div>
    </header>
  );
}
