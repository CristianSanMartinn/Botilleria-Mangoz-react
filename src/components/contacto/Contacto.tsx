import styles from "./Contacto.module.css";
import { useContactoData } from "../../hooks/contacto/useContactoDate";

const INFO_CARDS = [
  {
    emoji: "📍",
    label: "Dirección",
    lines: ["Calle Falsa 123, Melipilla"],
  },
  {
    emoji: "📞",
    label: "Teléfono",
    lines: ["123-456-7890"],
  },
  {
    emoji: "✉️",
    label: "Correo electrónico",
    lines: ["contacto@botilleriamangoz.com"],
  },
  {
    emoji: "🕐",
    label: "Horario de Atención",
    lines: ["Lun – Vie: 9:00 AM – 6:00 PM", "Sábado: 10:00 AM – 4:00 PM"],
  },
];

export const Contacto = () => {
  const { form, error, success, handleChange, handleSubmit } = useContactoData();

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Estamos para ayudarte</span>
          <h2 className={styles.titulo}>Contáctanos</h2>
          <div className={styles.titleRule} />
          <p className={styles.subtitle}>
            ¿Tienes preguntas o necesitas ayuda? Completa el formulario y
            te respondemos a la brevedad.
          </p>
        </div>

        <div className={styles.contentGrid}>

          {/* Formulario */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="nombre" className={styles.label}>Nombre</label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Correo electrónico</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                className={styles.textarea}
                required
              />
            </div>

            {error   && <p className={styles.error}   role="alert">{error}</p>}
            {success && <p className={styles.success} role="status">{success}</p>}

            <button type="submit" className={styles.submitBtn}>
              Enviar mensaje
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>

          {/* Cards de contacto */}
          <div className={styles.contactInfo}>
            {INFO_CARDS.map(({ emoji, label, lines }) => (
              <div key={label} className={styles.card}>
                <div className={styles.cardIconWrap} aria-hidden="true">
                  {emoji}
                </div>
                <div className={styles.cardText}>
                  <h3>{label}</h3>
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacto;