import styles from "./Contacto.module.css";
import { useContactoData } from "../../hooks/contacto/useContactoDate";

export const Contacto = () => {
  const { form, error, success, handleChange, handleSubmit } = useContactoData();

  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2 className={styles.title}>Contacto</h2>
            <p className={styles.subtitle}>
            ¿Tienes alguna pregunta o necesitas ayuda? ¡Estamos aquí para ayudarte! Completa el formulario y nos pondremos en contacto contigo.
            </p>

            <div className={styles.contentGrid}>
              {/* Formulario */}
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <label>
                  Nombre
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </label>

                <label>
                  Correo electrónico
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </label>

                <label>
                  Mensaje
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje..."
                    rows={5}
                    required
                  />
                </label>

                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}

                <button type="submit" className={styles.submitBtn}>
                  Enviar mensaje
                </button>
              </form>

              {/* Casillas de contacto */}
              <div className={styles.contactInfo}>
                <div className={styles.card}>
                  <img src="/img/contactos/ubicacion.png" alt="Ubicación" className={styles.icon} />
                  <div>
                    <h3>Dirección</h3>
                    <p>Calle Falsa 123, Ciudad Ejemplo</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src="/img/contactos/telefono.png" alt="Teléfono" className={styles.icon} />
                  <div>
                    <h3>Teléfono</h3>
                    <p>123-456-7890</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src="/img/contactos/correo.png" alt="Email" className={styles.icon} />
                  <div>
                    <h3>Correo electrónico</h3>
                    <p>contacto@botilleriamangoz.com</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src="/img/contactos/horario.png" alt="Horario" className={styles.icon} />
                  <div>
                    <h3>Horario de Atención</h3>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábado: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Contacto;
