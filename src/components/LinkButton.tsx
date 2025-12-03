import styles from './LinkButton.module.css'
import { WhatsAppIcon, MenuIcon, LocationIcon, ChristmasTreeIcon, ScaleIcon, OvenIcon } from './icons'

interface LinkButtonProps {
    href: string
    label: string
    subLabel?: string
    icon?: 'whatsapp' | 'menu' | 'location' | 'tree' | 'scale' | 'oven'
    variant?: 'primary' | 'secondary' | 'accent'
    id: string
}

export default function LinkButton({ href, label, subLabel, icon, variant = 'primary', id }: LinkButtonProps) {
    const handleClick = () => {
        // Tracking removed for static deployment
        console.log(`Clicked ${id}`)
    }

    const renderIcon = () => {
        if (!icon) return null

        const iconClass = styles.icon

        switch (icon) {
            case 'whatsapp':
                return <WhatsAppIcon className={iconClass} />
            case 'menu':
                return <MenuIcon className={iconClass} />
            case 'location':
                return <LocationIcon className={iconClass} />
            case 'tree':
                return <ChristmasTreeIcon className={iconClass} />
            case 'scale':
                return <ScaleIcon className={iconClass} />
            case 'oven':
                return <OvenIcon className={iconClass} />
            default:
                return null
        }
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles[variant]}`}
            onClick={handleClick}
        >
            {renderIcon()}
            <div className={styles.content}>
                <span className={styles.label}>{label}</span>
                {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
            </div>
        </a>
    )
}
