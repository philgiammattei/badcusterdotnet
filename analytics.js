import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Replace with your actual Measurement ID
const GA_MEASUREMENT_ID = 'G-DY15WWN3R8';

export const pageview = (url) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export default function Analytics({ children }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return children;
}