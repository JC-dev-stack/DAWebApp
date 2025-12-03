export function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    )
}

export function MenuIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
    )
}

export function LocationIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    )
}

export function ChristmasTreeIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Star on top */}
            <path d="M12 2 L13 4 L12 6 L11 4 Z" fill="currentColor" strokeWidth="1" />

            {/* Top triangle */}
            <path d="M12 6 L7 11 L17 11 Z" fill="none" strokeWidth="1.5" />

            {/* Middle triangle */}
            <path d="M12 9 L6 15 L18 15 Z" fill="none" strokeWidth="1.5" />

            {/* Bottom triangle */}
            <path d="M12 13 L4 20 L20 20 Z" fill="none" strokeWidth="1.5" />

            {/* Tree trunk */}
            <rect x="10" y="20" width="4" height="3" rx="0.5" strokeWidth="1.5" />
        </svg>
    )
}

export function ScaleIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Scale base */}
            <rect x="4" y="20" width="16" height="2" rx="1" />

            {/* Scale pole */}
            <line x1="12" y1="20" x2="12" y2="8" strokeWidth="2" />

            {/* Scale arm */}
            <line x1="6" y1="8" x2="18" y2="8" strokeWidth="1.5" />

            {/* Left pan */}
            <path d="M6 8 L4 12 L8 12 Z" fill="none" strokeWidth="1.5" />
            <line x1="4" y1="12" x2="8" y2="12" strokeWidth="1.5" />

            {/* Right pan */}
            <path d="M18 8 L16 12 L20 12 Z" fill="none" strokeWidth="1.5" />
            <line x1="16" y1="12" x2="20" y2="12" strokeWidth="1.5" />

            {/* Balance indicator */}
            <circle cx="12" cy="6" r="1.5" fill="currentColor" />
        </svg>
    )
}

export function OvenIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Oven body */}
            <rect x="3" y="4" width="18" height="16" rx="2" />

            {/* Control panel divider */}
            <line x1="3" y1="10" x2="21" y2="10" />

            {/* Knobs */}
            <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
            <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
            <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />

            {/* Window */}
            <rect x="7" y="13" width="10" height="4" rx="1" />
        </svg>
    )
}
