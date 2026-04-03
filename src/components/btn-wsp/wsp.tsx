"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./wsp.module.css";

export default function WhatsAppButton() {
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        const handler = () => {
            setShowHint(true);
            setTimeout(() => setShowHint(false), 2500);
        };

        window.addEventListener("show-whatsapp-hint", handler);
        return () => window.removeEventListener("show-whatsapp-hint", handler);
    }, []);

    return (
        <div className={styles.wrapper}>
            {showHint && (
                <div className={styles.hint}>
                    💬 Habla directamente con nosotros por WhatsApp
                </div>
            )}

            <a
                href="https://wa.me/569XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                aria-label="WhatsApp"
            >
                <FaWhatsapp color="#fff" />
            </a>
        </div>
    );
}