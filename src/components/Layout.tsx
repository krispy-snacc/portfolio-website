import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MouseShadow from "./MouseShadow";
import { Header, HeaderSpacer } from "./Header";
import Content from "./Content";

const Layout = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const location = useLocation();

    const handlePointerMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePos({ x: clientX, y: clientY });
    };

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    return (
        <div
            className="w-full font-DepartureMono"
            onMouseMove={handlePointerMove}
        >
            <Header />
            <HeaderSpacer />
            <Content>
                <Outlet />
            </Content>
            <MouseShadow mousePos={mousePos} />
        </div>
    );
};

export default Layout;
