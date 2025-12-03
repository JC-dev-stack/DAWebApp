import LinkButton from './components/LinkButton'
import styles from './App.module.css'

function App() {
    return (
        <main className={styles.main}>
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
                        href="/Carta Menu D&A 2025.pdf"
                        label="Ver Carta"
                        variant="primary"
                        icon="menu"
                    />

                    <LinkButton
                        id="christmas"
                        href="/Especiales de Navidad D&A 2025.pdf"
                        label="Especiales de Navidad"
                        variant="primary"
                        icon="tree"
                    />

                    <LinkButton
                        id="carnes"
                        href="/Carnes al peso.pdf"
                        label="Carnes al peso"
                        variant="primary"
                        icon="scale"
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
