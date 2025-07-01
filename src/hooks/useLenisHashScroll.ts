import { useEffect } from "react";
import { useLenis } from "lenis/react";

export const useLenisHashScroll = (offset = 100) => {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash) return;

            const id = hash.slice(1);
            const el = document.getElementById(id);
            if (!el) return;

            lenis.scrollTo(el, {
                offset: -offset,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        };

        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement)?.closest('a[href^="#"]');
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            e.preventDefault();
            const id = href.slice(1);
            const el = document.getElementById(id);
            if (!el) return;

            lenis.scrollTo(el, {
                offset: -offset,
                duration: 1.2,
            });

            // Update URL hash manually
            history.pushState(null, "", `#${id}`);
        };

        scrollToHash();

        window.addEventListener("hashchange", scrollToHash);
        document.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("hashchange", scrollToHash);
            document.removeEventListener("click", handleClick);
        };
    }, [lenis, offset]);
};
