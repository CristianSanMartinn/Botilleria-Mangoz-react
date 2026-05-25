import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "#inicio",      label: "Inicio" },
  { href: "#ofertas",     label: "Ofertas" },
  { href: "#productos",   label: "Catálogo" },
  { href: "#eventos",     label: "Eventos" },
  { href: "#nosotros",    label: "Sobre Nosotros" },
  { href: "#contacto",    label: "Contacto" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook",  emoji: "📘" },
  { href: "#", label: "Instagram", emoji: "📸" },
  { href: "#", label: "TikTok",    emoji: "🎵" },
  { href: "#", label: "WhatsApp",  emoji: "💬" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Línea superior decorativa */}
      <div className={styles.topRule} aria-hidden="true" />

      <div className={styles.container}>

        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <img src="/img/logon.jpg" alt="Logo Botillería Mangoz" className={styles.logoImg} />
            <div>
              <div className={styles.brandName}>Mangoz</div>
              <div className={styles.brandSub}>Botillería</div>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Tu tienda de confianza para bebidas, licores y más en Melipilla.
            Precios justos y atención que nos caracteriza.
          </p>
          {/* Sociales en brand column */}
          <div className={styles.socialRow}>
            {SOCIAL_LINKS.map(({ href, label, emoji }) => (
              <a
                key={label}
                href={href}
                className={styles.socialBtn}
                aria-label={label}
                title={label}
              >
                {emoji}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>
            <span className={styles.colTitleLine} />
            Navegación
          </h4>
          <ul className={styles.linkList}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={styles.navLink}>
                  <span className={styles.linkArrow} aria-hidden="true">›</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Horario */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>
            <span className={styles.colTitleLine} />
            Horarios
          </h4>
          <ul className={styles.scheduleList}>
            {[
              { day: "Lunes – Viernes", hours: "9:00 – 22:00" },
              { day: "Sábado",          hours: "10:00 – 22:00" },
              { day: "Domingo",         hours: "11:00 – 20:00" },
              { day: "Feriados",        hours: "12:00 – 18:00" },
            ].map(({ day, hours }) => (
              <li key={day} className={styles.scheduleItem}>
                <span className={styles.scheduleDay}>{day}</span>
                <span className={styles.scheduleHours}>{hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Historia */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>
            <span className={styles.colTitleLine} />
            Nuestra Historia
          </h4>
          <p className={styles.historyText}>
            Botillería Mangoz nació para convertirse en el punto de encuentro
            de Melipilla. Con más de 20 años de trayectoria, seguimos
            ofreciendo precios justos y atención cercana que nos caracteriza.
          </p>
          <a
            href={`https://wa.me/56912345678`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappCta}
          >
            💬 Escríbenos por WhatsApp
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Botillería Mangoz — Todos los derechos reservados.</p>
        <p className={styles.bottomRight}>Hecho con ❤️ en Melipilla</p>
      </div>
    </footer>
  );
};

export default Footer;