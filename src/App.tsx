import { useState } from 'react'
import LinkButton from './components/LinkButton'
import styles from './App.module.css'

function App() {
    const [showModal, setShowModal] = useState(true);

    return (
        <main className={styles.main}>
            {/* NOTE: Mother's Day promotional ad campaign. To be removed after Mother's Day. */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setShowModal(false)}>
                            &times;
                        </button>
                        <img 
                            src="/pack_mama.jpeg" 
                            alt="Promoción Especial" 
                            className={styles.modalImage} 
                        />
                    </div>
                </div>
            )}

            <div className="container">
                {/* Header */}
                <header className={styles.header}>
                    <img
                        src="/DALogo2.png"
                        alt="DALogo2"
                        className={styles.logo}
                    />
                </header>

                {/* Buttons */}
                <div className={styles.grid}>
                    <LinkButton
                        id="menu"
                        href="/D&A_CartaMenu.pdf"
                        label="Ver Carta"
                        variant="primary"
                        icon="menu"
                    />





                    <LinkButton
                        id="horneado"
                        href="/Carta Servicios Horneado D&A.pdf"
                        label="Servicios de Horneado"
                        variant="primary"
                        icon="oven"
                    />

                    <LinkButton
                        id="whatsapp"
                        href="https://wa.link/gv9pc2"
                        label="Contáctanos por Whatsapp!"
                        variant="accent"
                        icon="whatsapp"
                    />

                    <LinkButton
                        id="location"
                        href="https://maps.app.goo.gl/DsUvNwc1tJbnTiiw8"
                        label="Nuestra ubicación"
                        variant="secondary"
                        icon="location"
                    />
                </div>
            </div>
        </main>
    )
}

export default App
