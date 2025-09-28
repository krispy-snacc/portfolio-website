import { motion } from "framer-motion";

const AboutInfo = () => {
    return (
        <div className="py-8 xl:py-16 h-fit xl:h-full flex justify-center">
            <div className="flex flex-col justify-center h-full w-full px-4 xl:px-16">
                <h2 className="text-[clamp(3rem,6vw,4rem)] text-7xl text-white mb-6 ">
                    Hi! I'm Kris
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                    I'm a developer who loves figuring out how things work under
                    the hood and making them look cool on screen. Systems and
                    graphics programming are my main playgrounds, but I hop into
                    web dev when needed and enjoy connecting all the pieces into
                    something that just feels right.
                </p>
            </div>
        </div>
    );
};

const AboutProfilePic = ({ imgSrc }: { imgSrc: string }) => {
    let amp = 14;
    return (
        <div className="w-full xl:h-full xl:w-[50%] xl:border-l flex flex-col items-center justify-center border-white/20 py-8">
            <motion.div
                animate={{ y: [amp, -amp, amp] }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="transition-transform ease-in-out relative overflow-hidden rounded-lg"
            >
                <img
                    className="h-auto w-auto max-h-[512px] xl:h-[88%] min-h-[512px] object-center object-contain"
                    // style={{ filter: "grayscale(100%) contrast(120%)" }}
                    src={imgSrc}
                    alt="Profile Picture"
                />
            </motion.div>
            <div
                className="text-[.5rem] text-white/50 relative"
                style={{ top: `${amp}px` }}
            >
                Artwork by{" "}
                <a
                    className="!text-white/80 hover:!text-hover"
                    target="_blank"
                    href="https://x.com/cherrymaru8/status/1934601675773530524/photo/1"
                >
                    @cherrymaru8
                </a>{" "}
                on x
            </div>
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
                {/* Placeholder Profile Pic ig? */}
                <AboutProfilePic
                    imgSrc={`${import.meta.env.BASE_URL}profilepic.png`}
                />
            </div>
        </section>
    );
};

export default AboutSection;
