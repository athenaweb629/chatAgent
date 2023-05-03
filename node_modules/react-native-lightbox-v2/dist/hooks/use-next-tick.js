import { useRef, useEffect } from 'react';
export const useNextTick = (ticker, delay = 0) => {
    const timer = useRef(null);
    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
        };
    }, []);
    return () => {
        timer.current = setTimeout(ticker, delay);
    };
};
