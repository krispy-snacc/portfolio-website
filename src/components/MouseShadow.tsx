import { motion } from "framer-motion";
import "./MouseShadow.css";

interface Props {
    mousePos: {
        x: number;
        y: number;
    };
}

const MouseShadow = ({ mousePos }: Props) => {
    return (
        <motion.div
            animate={{ left: mousePos.x, top: mousePos.y }}
            transition={{
                duration: 0.1,
                ease: "linear",
            }}
            className="hidden xl:block"
            id="mouse-shadow"
        />
    );
};

export default MouseShadow;
