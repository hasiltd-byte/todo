"use client";

import {FormEvent, useState} from "react";
import {
  ArrowLeft,
  Candy,
  Check,
  ChevronDown,
  CupSoda,
  Gift,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  PartyPopper,
  Phone,
  ShoppingBag,
  Sparkles,
  Store,
  Wine,
  X,
} from "lucide-react";
import {siteConfig, whatsappUrl} from "@/lib/site";
import Image from "next/image";

const categories = [
  {
    icon: Candy,
    title: "ממתקים",
    text: "שוקולדים, גומי, סוכריות והפתעות מתוקות לכל מצב רוח.",
    className: "pink",
  },
  {
    icon: CupSoda,
    title: "שתייה קלה",
    text: "משקאות קרים, פחיות, בקבוקים ועוד דברים טובים לדרך.",
    className: "blue",
  },
  {
    icon: Wine,
    title: "משקאות אלכוהוליים",
    text: "מבחר משקאות למבוגרים לערב, אירוח וחגיגה.",
    note: "מכירה מגיל 18 ומעלה בלבד",
    className: "purple",
  },
  {
    icon: PartyPopper,
    title: "בלונים ויום הולדת",
    text: "בלונים, קישוטים, הפתעות ודברים קטנים שעושים חגיגה גדולה.",
    className: "yellow",
  },
  {
    icon: Gift,
    title: "מתנות קטנות",
    text: "צריכים משהו לילדים או מתנה ברגע האחרון? מתחילים כאן.",
    className: "mint",
  },
  {
    icon: Package,
    title: "פיצוחים ונשנושים",
    text: "מלוח, קראנצ'י, מתוק  כל מה שמתאים לדרך, לאירוח ולבית.",
    className: "orange",
  },
];

const faq = [
  [
    "אפשר למצוא אצלכם דברים ליום הולדת ברגע האחרון?",
    "כן. הרעיון של TODO הוא לרכז במקום אחד ממתקים, בלונים, מתנות קטנות, שתייה ונשנושים כדי שתוכלו לסגור את הפינה במהירות.",
  ],
  [
    "יש גם שתייה אלכוהולית?",
    "כן, לצד השתייה הקלה יש גם משקאות אלכוהוליים. המכירה היא לבני 18 ומעלה בלבד ובהתאם לחוק.",
  ],
  [
    "איפה החנות נמצאת?",
    "TODO נמצאת בקניון נחמיה. אפשר להגיע, להסתובב, לבחור במקום ולצאת עם כל מה שצריך.",
  ],
];

function CandyJar() {
  return (
    <div className="candy-jar" aria-hidden="true">
      <div className="jar-lid" />
      <div className="jar-glass">
        <span className="candy candy-1" />
        <span className="candy candy-2" />
        <span className="candy candy-3" />
        <span className="candy candy-4" />
        <span className="candy candy-5" />
        <span className="candy candy-6" />
        <span className="candy candy-7" />
        <span className="candy candy-8" />
        <div className="jar-label">TODO</div>
      </div>
    </div>
  );
}

function SodaCan() {
  return (
    <div className="soda-can" aria-hidden="true">
      <div className="can-top" />
      <div className="can-copy">
        <small>ICE COLD</small>
        <strong>POP!</strong>
      </div>
      <span className="can-bubble b1" />
      <span className="can-bubble b2" />
      <span className="can-bubble b3" />
    </div>
  );
}

function BalloonCluster() {
  return (
    <div className="balloon-cluster" aria-hidden="true">
      <span className="balloon balloon-a" />
      <span className="balloon balloon-b" />
      <span className="balloon balloon-c" />
      <span className="balloon balloon-d" />
      <span className="balloon-string string-a" />
      <span className="balloon-string string-b" />
      <span className="balloon-string string-c" />
    </div>
  );
}

export default function LandingClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function closeMenu() {
    setMenuOpen(false);
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "");

    if (!siteConfig.phoneInternational) {
      window.alert(
        "לפני פרסום האתר יש לעדכן את מספר ה-WhatsApp בקובץ lib/site.ts",
      );
      return;
    }

    const text = [
      `היי TODO, שמי ${name}`,
      topic ? `אני מתעניין/ת ב: ${topic}` : "",
      message ? `הודעה: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${siteConfig.phoneInternational}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main id="top">
      <div className="announcement">
        <Sparkles size={16} aria-hidden="true" />
        <span>TODO בקניון נחמיה כל מה שצריך במקום אחד</span>
        <Sparkles size={16} aria-hidden="true" />
      </div>

      <header className="header">
        <div className="site-shell header-inner">
          <a
            href="#top"
            className="brand"
            aria-label="TODO - עמוד הבית"
            onClick={closeMenu}
          >
            <span className="brand-bubble" aria-hidden="true">T</span>
            <span className="brand-word">TODO</span>
          </a>

          <nav className="desktop-nav" aria-label="ניווט ראשי">
            <a href="#categories">מה יש אצלנו</a>
            <a href="#birthday">ימי הולדת</a>
            <a href="#story">הסיפור שלנו</a>
            <a href="#faq">שאלות</a>
            <a href="#contact">בואו לבקר</a>
          </nav>

          <a className="button button-dark header-cta" href={whatsappUrl}>
            <MessageCircle size={18} />
            דברו איתנו
          </a>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="site-shell mobile-menu-inner">
            <a href="#categories" onClick={closeMenu}>
              מה יש אצלנו
            </a>
            <a href="#birthday" onClick={closeMenu}>
              ימי הולדת
            </a>
            <a href="#story" onClick={closeMenu}>
              הסיפור שלנו
            </a>
            <a href="#faq" onClick={closeMenu}>
              שאלות
            </a>
            <a href="#contact" onClick={closeMenu}>
              בואו לבקר
            </a>
          </div>
        </div>
      </header>

      <section className="hero section-pad">
        <div className="hero-sprinkle sprinkle-one" />
        <div className="hero-sprinkle sprinkle-two" />
        <div className="hero-sprinkle sprinkle-three" />
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <Store size={17} /> חנות קטנה ומטריפה בקניון נחמיה
            </div>
            <h1>
              מתחשק לכם משהו
              <span> מתוק, קר או חגיגי?</span>
            </h1>
            <p>
              ב-TODO תמצאו ממתקים, פיצוחים, שתייה קלה, משקאות אלכוהוליים, בלונים
              ומתנות לילדים כדי שלא תצטרכו להתרוצץ בין כמה חנויות.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#categories">
                מה מחכה בחנות <ArrowLeft size={18} />
              </a>
              <a className="button button-light" href="#contact">
                <MapPin size={18} /> קניון נחמיה
              </a>
            </div>
            <div className="hero-trust">
              <span>
                <Check size={16} /> קנייה מהירה
              </span>
              <span>
                <Check size={16} /> הרבה קטגוריות במקום אחד
              </span>
              <span>
                <Check size={16} /> מתאים גם לרגע האחרון
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="איור צבעוני של מוצרי TODO">
            <div className="hero-image-wrap">
              <div className="hero-image-glow" aria-hidden="true" />

              <Image
                className="hero-product-image"
                src="/images/Candy-Celebration-Cluster.png"
                alt="ממתקים צבעוניים, שתייה קרה, בלונים ומתנה בחנות TODO"
                width={1448}
                height={1086}
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 532px) calc(89vw - 32px), (max-width: 640px) 442px, (max-width: 980px) 570px, (max-width: 1199px) calc(53vw - 52px), 595px"
              />
            </div>
          </div>
        </div>
        <div className="hero-wave" />
      </section>

      <section className="quick-categories" aria-label="קטגוריות מרכזיות">
        <div className="site-shell quick-categories-row">
          <a href="#categories">
            <Candy /> <span>ממתקים</span>
          </a>
          <a href="#categories">
            <CupSoda /> <span>שתייה</span>
          </a>
          <a href="#categories">
            <Wine /> <span>אלכוהול 18+</span>
          </a>
          <a href="#birthday">
            <PartyPopper /> <span>בלונים</span>
          </a>
          <a href="#categories">
            <Gift /> <span>מתנות</span>
          </a>
          <a href="#categories">
            <Package /> <span>פיצוחים</span>
          </a>
        </div>
      </section>

      <section id="categories" className="categories-section section-pad">
        <div className="site-shell">
          <div className="section-heading centered">
            <span className="kicker">TODO COLLECTION</span>
            <h2>נכנסים בשביל דבר אחד. יוצאים עם כל מה שצריך.</h2>
            <p>
              בחרנו את הקטגוריות שהכי שימושיות ביום-יום, באירוח ובחגיגות והכנסנו
              אותן לחנות אחת.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  className={`category-card ${category.className}`}
                  key={category.title}
                >
                  <div className="category-icon">
                    <Icon size={34} />
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                  {category.note ? <small>{category.note}</small> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="birthday" className="birthday-section section-pad">
        <div className="site-shell birthday-grid">
          <div className="birthday-art" aria-hidden="true">
            <div className="birthday-card card-back">
              <PartyPopper size={52} />
              <strong>
                HAPPY
                <br />
                BIRTHDAY
              </strong>
            </div>
            <div className="birthday-card card-front">
              <Candy size={64} />
              <span>ממתקים</span>
              <span>בלונים</span>
              <span>הפתעות</span>
            </div>
            <span className="confetti c1" />
            <span className="confetti c2" />
            <span className="confetti c3" />
            <span className="confetti c4" />
          </div>

          <div className="birthday-copy">
            <span className="kicker light">MAKE IT A PARTY</span>
            <h2>יום הולדת בעוד שעה? זה בדיוק הזמן ל-TODO.</h2>
            <p>
              מתנה לילדים, בלונים, משהו מתוק לשולחן, שתייה ונשנושים אפשר להרכיב
              קנייה זריזה ונכונה במקום אחד ולהמשיך ישר לחגיגה.
            </p>
            <div className="birthday-points">
              <span>
                <Check /> בלונים והפתעות
              </span>
              <span>
                <Check /> ממתקים ונשנושים
              </span>
              <span>
                <Check /> מתנות קטנות
              </span>
            </div>
            <a href="#contact" className="button button-yellow">
              בואו לסגור את הפינה <ArrowLeft size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="story-section section-pad">
        <div className="site-shell story-grid">
          <div className="story-copy">
            <span className="kicker">HELLO, TODO</span>
            <h2>מתחדשים ומחדשים בקניון נחמיה.</h2>
            <p className="story-lead">
              תכירו את TODO חנות נוחות צבעונית, קלילה ושימושית, שמרכזת את הדברים
              הקטנים שאנחנו תמיד צריכים בדיוק עכשיו.
            </p>
            <p>
              {siteConfig.ownerName} מזמין אתכם לעצור בדרך, לבחור מתנה לילדים,
              לקחת פיצוחים, שתייה קלה, ממתקים ועוד בלי להפוך את הקנייה למשימה.
            </p>
            <a href="#contact" className="text-link">
              מחכים לכם בקניון נחמיה <ArrowLeft size={17} />
            </a>
          </div>

          <div className="story-poster">
            <div className="poster-badge">
              NEW
              <br />
              SPOT
            </div>
            <ShoppingBag size={86} strokeWidth={1.4} />
            <strong>TODO</strong>
            <span>
              כל מה שצריך
              <br />
              במקום אחד
            </span>
            <div className="poster-dot dot-one" />
            <div className="poster-dot dot-two" />
            <div className="poster-dot dot-three" />
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="site-shell why-strip">
          <div>
            <strong>01</strong>
            <span>נכנסים מהר</span>
            <small>הכול ברור ונגיש</small>
          </div>
          <div>
            <strong>02</strong>
            <span>מוצאים יותר</span>
            <small>מתוק, שתייה, מתנות וחגיגה</small>
          </div>
          <div>
            <strong>03</strong>
            <span>יוצאים מוכנים</span>
            <small>לעבודה, לבית או ליום הולדת</small>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section section-pad">
        <div className="site-shell faq-grid">
          <div className="section-heading sticky-title">
            <span className="kicker">FAQ</span>
            <h2>שאלות ששווה לדעת לפני שקופצים.</h2>
            <p>האתר בנוי קצר ולעניין, בדיוק כמו הקנייה בחנות.</p>
          </div>
          <div className="faq-list">
            {faq.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  key={question}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{question}</span>
                    <ChevronDown size={22} />
                  </button>
                  <div className="faq-answer">
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="site-shell contact-card">
          <div className="contact-copy">
            <span className="kicker light">SEE YOU AT TODO</span>
            <h2>עוצרים בקניון נחמיה. יוצאים עם מצב רוח טוב.</h2>
            <p>
              רוצים לברר אם יש מוצר מסוים, בלונים או משהו ליום הולדת? השאירו
              הודעה או התקשרו.
            </p>
            <div className="location-chip">
              <MapPin size={18} /> {siteConfig.locationName}
            </div>
            {siteConfig.phoneDisplay ? (
              <a
                className="location-chip"
                href={`tel:${siteConfig.phoneInternational}`}
              >
                <Phone size={18} /> {siteConfig.phoneDisplay}
              </a>
            ) : null}
          </div>

          <form className="contact-form" onSubmit={submitContact}>
            <label>
              <span>שם</span>
              <input name="name" required placeholder="איך קוראים לך?" />
            </label>
            <label>
              <span>מה מחפשים?</span>
              <select name="topic" defaultValue="ממתקים / נשנושים">
                <option>ממתקים / נשנושים</option>
                <option>בלונים / יום הולדת</option>
                <option>מתנה לילדים</option>
                <option>שתייה קלה</option>
                <option>משקאות אלכוהוליים</option>
                <option>בירור כללי</option>
              </select>
            </label>
            <label>
              <span>הודעה</span>
              <textarea
                name="message"
                rows={4}
                placeholder="מה תרצו שנבדוק עבורכם?"
              />
            </label>
            <button
              className="button button-yellow submit-button"
              type="submit"
            >
              <MessageCircle size={18} /> שליחת הודעה ב-WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="site-shell footer-inner">
          <a href="#top" className="brand footer-brand">
            <span className="brand-bubble">T</span>
            <span className="brand-word">TODO</span>
          </a>
          <p>ממתקים • שתייה • בלונים • מתנות • פיצוחים • קניון נחמיה</p>
          <small>© {new Date().getFullYear()} TODO. כל הזכויות שמורות.</small>
        </div>
      </footer>
    </main>
  );
}
