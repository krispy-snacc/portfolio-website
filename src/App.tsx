import { useState } from "react";
import MouseShadow from "./components/MouseShadow";
import { Header } from "./components/Header";
import Content from "./components/Content";
import AboutSection from "./pages/About/AboutSection";
import ProjectsSection from "./pages/Projects/ProjectsSection";
import SkillsSection from "./pages/Skills/SkillsSection";
import ContactSection from "./pages/Contact/ContactSection";

function App() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handlePointerMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePos({ x: clientX, y: clientY });
    };

    return (
        <div
            className="w-screen font-DepartureMono"
            onMouseMove={handlePointerMove}
        >
            <Header />
            <Content>
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </Content>
            <MouseShadow mousePos={mousePos} />
        </div>
    );
}

export default App;
