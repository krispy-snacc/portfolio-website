import { motion } from "framer-motion";
import pfp from "../../assets/profilepic.jpg";

const AboutInfo = () => {
    return (
        <div className="py-8 xl:py-16 h-fit xl:h-full flex justify-center">
            <div className="flex flex-col justify-center h-full w-full px-4 xl:px-16">
                <h2 className="text-[clamp(3rem,6vw,4rem)] text-7xl text-white mb-6 ">
                    Hi! I'm Kris
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                    I'm a passionate front-end developer with a strong
                    foundation in modern web technologies like React,
                    TypeScript, and Tailwind CSS. I enjoy building clean,
                    performant, and accessible user interfaces with a focus on
                    user experience and responsive design.
                </p>
            </div>
        </div>
    );
};

const AboutProfilePic = () => {
    let amp = 14;
    return (
        <div className="w-full xl:h-full xl:w-[50%] xl:border-l flex items-center justify-center border-white/20 py-8">
            <motion.div
                animate={{ y: [amp, -amp, amp] }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="transition-transform ease-in-out relative max-h-[512px] h-[80%] xl:h-[67%] min-h-[320px] aspect-[3/4] overflow-hidden rounded-lg"
            >
                <img
                    className="h-full w-full absolute object-center object-cover"
                    // style={{ filter: "grayscale(100%) contrast(120%)" }}
                    src={pfp}
                    alt="Profile Picture"
                />
            </motion.div>
        </div>
    );
};

const AboutSection = () => {
    return (
        <section
            id="about"
            className="pt-[80px] xl:max-h-[855px] h-fit xl:h-screen flex flex-col border-b-1 border-white/20 w-full items-center"
        >
            <div className="h-full w-full xl:h-full max-w-[min(1680px,100%)] flex flex-col xl:flex-row">
                <AboutInfo />
                <AboutProfilePic />
            </div>
        </section>
    );
};

export default AboutSection;
