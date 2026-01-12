'use client';

import { HelmetProvider } from 'react-helmet-async';

export function Providers({ children }) {
    return <HelmetProvider>{children}</HelmetProvider>;
}
