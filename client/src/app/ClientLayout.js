'use client';

import { useLocation } from '../src/router-compat';
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';
import ScrollToTop from '../src/components/utils/ScrollToTop';
import SmoothScroll from '../src/components/utils/SmoothScroll';
import { Suspense } from 'react';

function ClientLayoutContent({ children }) {
    const { pathname } = useLocation();
    const isDashboard = pathname.startsWith('/dashboard');

    return (
        <div className="min-h-screen bg-gray-950 text-white transition-colors duration-300 flex flex-col">
            <ScrollToTop />
            <SmoothScroll />

            {!isDashboard && <Navbar />}
            <main className="flex-grow">
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
                    {children}
                </Suspense>
            </main>
            {!isDashboard && <Footer />}
        </div>
    );
}

export default function ClientLayout({ children }) {
    return (
        <ClientLayoutContent>{children}</ClientLayoutContent>
    );
}
