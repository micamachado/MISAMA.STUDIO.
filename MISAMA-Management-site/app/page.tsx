import Image from "next/image";

const brands = [
  { name: "Maanos", tag: "Expériences", text: "Le massage sur mesure, pensé comme un rituel de récupération profondément personnel.", url: "https://www.maanos.com", logo: "/images/maanos-logo-white.png", logoClass: "maanos" },
  { name: "MOLM", tag: "Gifting", text: "Le cadeau bien-être qui met le choix, l'attention et l'expérience au centre.", url: "https://www.molm-care.com", logo: "/images/molm-logo-white.png", logoClass: "molm" },
  { name: "My Massage Shop", tag: "Commerce", text: "La destination e-commerce des produits et équipements dédiés au massage.", url: "https://www.mymassageshop.com", logo: "/images/mymassageshop-logo-white.png", logoClass: "mymassageshop" },
  { name: "Smooden", tag: "Produits", text: "Des huiles de massage naturelles développées pour le geste, la peau et les sens.", url: "https://www.smooden.com", logo: "/images/smooden-logo-white.png", logoClass: "smooden" },
];

const pillars = [
  { number: "01", title: "Observer", text: "Nous étudions l'évolution des modes de vie, des comportements et des attentes pour identifier les besoins auxquels les modèles existants ne répondent plus suffisamment." },
  { number: "02", title: "Repenser", text: "Nous remettons en question les habitudes et les codes établis pour imaginer des expériences plus simples, plus personnelles et plus adaptées à la vie contemporaine." },
  { number: "03", title: "Développer", text: "Nous transformons ces idées en marques, services et produits concrets, puis nous les faisons évoluer durablement au rythme de leurs clients et de leur marché." },
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
        <a className="navCta" href="mailto:contact@misama.studio">Contact <Arrow /></a>
      </header>

      <section className="hero shell">
        <div className="heroCopy">
          <p className="kicker">Brand studio · Luxembourg</p>
          <h1>Nous repensons le bien-être pour le monde <em>d'aujourd'hui.</em></h1>
          <div className="heroStatement">
            <p>MISAMA.STUDIO est un studio luxembourgeois spécialisé dans la création et le développement de marques wellness et self-care, à travers les services, les produits, le retail et l'e-commerce.</p>
            <a href="#studio">Découvrir le studio <span>↓</span></a>
          </div>
        </div>
        <div className="heroVisual" role="img" aria-label="Rituel de soin et de bien-être" />
      </section>

      <section className="manifesto" id="studio">
        <div className="shell manifestoGrid">
          <p className="sectionLabel">01 — Le studio</p>
          <div>
            <p className="lead">Le bien-être n'est pas une notion figée. Nos rythmes de vie évoluent, nos besoins changent et les modèles d'hier ne répondent pas toujours aux réalités d'aujourd'hui.</p>
            <div className="manifestoText">
              <p>MISAMA observe l'évolution des usages pour identifier ce qui peut être simplifié, amélioré ou rendu plus accessible. Nous développons ensuite des expériences, des services et des produits capables d'apporter une réponse concrète aux besoins du moment.</p>
              <p>Chaque marque possède son identité, mais toutes partagent la même philosophie : comprendre le monde dans lequel nous vivons afin d'y réadapter le bien-être, sans jamais banaliser la qualité de l'expérience.</p>
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
            <h2>Comprendre aujourd'hui.<br/><em>Imaginer demain.</em></h2>
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
          <p>Des expériences, des produits et des services complémentaires, conçus autour d'une même volonté : rendre le bien-être plus pertinent, plus personnel et plus accessible.</p>
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
        <p className="sectionLabel">04 — Maanos, depuis 2015</p>
        <div><h2>Du massage sur mesure<br/>à une <em>nouvelle norme.</em></h2>
          <div className="caseText">
            <p>Lorsque nous avons créé Maanos en 2015, le massage était encore souvent proposé à travers des protocoles prédéfinis. Le client choisissait une durée ou une technique, mais l'expérience laissait peu de place à ses besoins réels, à son état physique ou à ses préférences personnelles.</p>
            <p>Nous avons développé une approche pionnière autour du massage sur mesure. Chaque soin est construit autour de la personne, de ses tensions, de ses attentes et de ce dont elle a besoin au moment de sa visite. Encore rare en 2015, cette personnalisation est progressivement devenue une nouvelle référence du secteur.</p>
            <p>Nous avons aussi voulu sortir le massage d'un univers parfois considéré comme occasionnel, intimidant ou réservé à une clientèle privilégiée. En le rendant plus lisible, plus contemporain et plus accessible, Maanos a contribué à le démocratiser comme pratique régulière de récupération, de prévention et de bien-être.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactPhoto" aria-hidden="true" />
        <div className="contactCopy">
          <p className="sectionLabel">05 — Notre vision</p>
          <h2>Repenser les usages.<br/><em>Faire évoluer le bien-être.</em></h2>
          <p>Nous voulons contribuer à faire évoluer le bien-être au même rythme que la société, en créant des concepts plus humains, plus intuitifs et plus accessibles. MISAMA.STUDIO développe aujourd'hui les usages qui nous sembleront naturels demain.</p>
          <a href="mailto:contact@misama.studio">contact@misama.studio <Arrow/></a>
          <address>26, avenue de la Faïencerie<br/>L-1510 Luxembourg</address>
        </div>
      </section>

      <footer className="shell"><Image className="siteLogo footerLogo" src="/images/logo-misama-studio-v2.png" alt="MISAMA Studio" width={1266} height={373} /><p>Wellness · Self-care · Beauty · Commerce</p><a href="#top">Retour en haut ↑</a></footer>
    </main>
  );
}
