import Image from "next/image";

const brands = [
  { name: "Maanos", tag: "Expériences", text: "Le massage sur mesure, pensé comme un rituel de récupération profondément personnel.", url: "https://www.maanos.com", logo: "/images/maanos-logo-white.png", logoClass: "maanos" },
  { name: "MOLM", tag: "Gifting", text: "Le cadeau bien-être qui met le choix, l'attention et l'expérience au centre.", url: "https://www.molm-care.com", logo: "/images/molm-logo-white.png", logoClass: "molm" },
  { name: "My Massage Shop", tag: "Commerce", text: "La destination e-commerce des produits et équipements dédiés au massage.", url: "https://www.mymassageshop.com", logo: "/images/mymassageshop-logo-white.png", logoClass: "mymassageshop" },
  { name: "Smooden", tag: "Produits", text: "Des huiles de massage naturelles développées pour le geste, la peau et les sens.", url: "https://www.smooden.com", logo: "/images/smooden-logo-white.png", logoClass: "smooden" },
];

const pillars = [
  { number: "01", title: "Développer", text: "Nous transformons une intuition en une marque désirable : positionnement, identité, offre et expérience." },
  { number: "02", title: "Commercialiser", text: "Nous construisons les bons canaux, du lieu physique au digital, pour rapprocher chaque marque de son public." },
  { number: "03", title: "Faire grandir", text: "Nous mutualisons stratégie, opérations et savoir-faire pour créer une croissance cohérente et durable." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <a href="#top" aria-label="MISAMA Studio, accueil"><Image className="siteLogo" src="/images/logo-misama-studio-v2.png" alt="MISAMA Studio" width={1266} height={373} priority /></a>
        <nav aria-label="Navigation principale">
          <a href="#studio">Le studio</a><a href="#expertise">Notre savoir-faire</a><a href="#marques">Nos marques</a>
        </nav>
        <a className="navCta" href="mailto:contact@misama-management.com">Parlons-nous <Arrow /></a>
      </header>

      <section className="hero shell">
        <div className="heroCopy">
          <p className="kicker">Brand studio · Luxembourg</p>
          <h1>Nous créons les marques qui font du <em>bien.</em></h1>
          <div className="heroStatement">
            <p>MISAMA est un studio spécialisé dans le développement, la commercialisation et le commerce de marques de bien-être, wellness et self-care.</p>
            <a href="#studio">Découvrir le studio <span>↓</span></a>
          </div>
        </div>
        <div className="heroVisual" role="img" aria-label="Rituel de soin et de bien-être" />
      </section>

      <section className="manifesto" id="studio">
        <div className="shell manifestoGrid">
          <p className="sectionLabel">01 — Le studio</p>
          <div>
            <p className="lead">Nous croyons que prendre soin de soi n'est plus un luxe. C'est une nouvelle façon de vivre, de consommer et de créer du lien.</p>
            <div className="manifestoText">
              <p>MISAMA imagine, lance et développe des concepts qui placent le mieux-être au cœur du quotidien. Nous réunissons sous un même studio des expériences, des produits, des services et des lieux.</p>
              <p>Chaque marque conserve sa personnalité. Toutes bénéficient d'une vision commune, d'une exigence partagée et d'un écosystème conçu pour accélérer leur développement.</p>
            </div>
          </div>
        </div>
        <div className="imageRibbon shell" aria-hidden="true">
          <div className="ribbonImage ritual"/><div className="ribbonQuote">Feel better.<br/><em>Live better.</em></div><div className="ribbonImage texture"/>
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="shell">
          <div className="sectionHead">
            <p className="sectionLabel">02 — Notre savoir-faire</p>
            <h2>De l'idée au marché,<br/><em>un seul studio.</em></h2>
          </div>
          <div className="pillarGrid">
            {pillars.map((pillar) => <article key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="portfolio" id="marques">
        <div className="shell portfolioHead">
          <p className="sectionLabel">03 — Notre écosystème</p>
          <h2>Des marques singulières.<br/><em>Une vision partagée.</em></h2>
          <p>Un portefeuille construit autour des nouveaux usages du soin, de la beauté, du bien-être et de leurs espaces.</p>
        </div>
        <div className="brandGrid shell">
          {brands.map((brand, index) => (
            <a className="brandCard" href={brand.url} target="_blank" rel="noreferrer" key={brand.name}>
              <div className="cardTop"><span>{String(index+1).padStart(2,"0")}</span><Arrow/></div>
              <div className={`brandLogoWrap ${brand.logoClass}`}>
                <Image className="brandLogo" src={brand.logo} alt={`${brand.name} — ouvrir le site`} fill sizes="(max-width: 620px) 70vw, 34vw" />
              </div>
              <div className="cardCopy"><p>{brand.tag}</p><h3>{brand.name}</h3><div className="line"/><p className="description">{brand.text}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="platform shell">
        <p className="sectionLabel">04 — La plateforme</p>
        <div><h2>Le wellness,<br/>sous toutes ses formes.</h2>
          <div className="platformRows"><span>Expériences & services</span><span>Produits & formulation</span><span>E-commerce & distribution</span><span>Retail & lieux</span></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactPhoto" aria-hidden="true" />
        <div className="contactCopy">
          <p className="sectionLabel">05 — Construisons ensemble</p>
          <h2>Une marque à révéler.<br/><em>Une idée à faire grandir.</em></h2>
          <p>Entrepreneurs, partenaires, talents ou propriétaires : parlons de ce que nous pourrions construire ensemble.</p>
          <a href="mailto:contact@misama-management.com">contact@misama-management.com <Arrow/></a>
          <address>26, avenue de la Faïencerie<br/>L-1510 Luxembourg</address>
        </div>
      </section>

      <footer className="shell"><Image className="siteLogo footerLogo" src="/images/logo-misama-studio-v2.png" alt="MISAMA Studio" width={1266} height={373} /><p>Wellness · Self-care · Beauty · Commerce</p><a href="#top">Retour en haut ↑</a></footer>
    </main>
  );
}
