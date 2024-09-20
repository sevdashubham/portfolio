import { useState, useEffect } from 'react';

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleResize);
        } else {
            mediaQuery.addListener(handleResize); // for older browsers
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleResize);
            } else {
                mediaQuery.removeListener(handleResize);
            }
        };
    }, [breakpoint]);

    return isMobile;
}

export default useIsMobile;
