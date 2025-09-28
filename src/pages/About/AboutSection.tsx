import clsx from "clsx";
import { motion } from "framer-motion";
import GithubIcon from "../../assets/Icons/contact/github.svg?react";
import KofiIcon from "../../assets/Icons/contact/kofi.svg?react";
import EmailIcon from "../../assets/Icons/contact/email.svg?react";
import siteData from "../../assets/sitedata.json";

type AboutData = {
    name: string;
    title: string;
    description: string;
    secondaryDescription: string;
    status: {
        text: string;
        color: string;
    };
    currentFocus: {
        title: string;
        description: string;
        technologies: string[];
    };
    profilePicture: {
        src: string;
        alt: string;
        author: string;
        authorUrl: string;
        attribution: string;
    };
    socialLinks: Array<{
        name: string;
        url: string;
        description: string;
        icon: string;
    }>;
};

const aboutData = siteData.about as AboutData;

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case "github":
            return <GithubIcon className="w-8 h-8" />;
        case "kofi":
            return <KofiIcon className="w-8 h-8" />;
        case "email":
            return <EmailIcon className="w-8 h-8" />;
        default:
            return null;
    }
};

const AboutHi = () => <></>;

const SocialLinks = () => {
    return (
        <div className="mt-8">
            <h3 className="text-xl text-white mb-4">Let's Connect</h3>
            <div className="flex flex-wrap gap-4">
                {aboutData.socialLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={
                            link.name !== "Email"
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="text-white group-hover:text-blue-400 transition-colors">
                            {getIconComponent(link.icon)}
                        </div>
                        <div>
                            <div className="text-white font-medium">
                                {link.name}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {link.description}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

const AboutInfo = () => {
    return (
        <div className="xl:flex-1 xl:border-r xl:border-white/20 py-8 xl:py-48 h-fit xl:h-full flex items-center justify-center">
            <div className="flex flex-col justify-center h-full w-full px-4 xl:px-16 xl:pr-12 pb-8">
                <h2 className="text-[clamp(3rem,6vw,4rem)] text-7xl text-white mb-6 ">
                    {aboutData.title}
                </h2>

                {/* Status indicator for mobile */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">
                        {aboutData.status.text}
                    </span>
                </div>
                <AboutProfilePic
                    className="xl:hidden mb-6"
                    imgSrc={`${import.meta.env.BASE_URL}${
                        aboutData.profilePicture.src
                    }`}
                />
                <p className="text-lg text-gray-400 leading-relaxed w-full xl:max-w-3xl mb-6">
                    {aboutData.description}
                </p>

                <p className="text-md text-gray-300 leading-relaxed w-full xl:max-w-3xl">
                    {aboutData.secondaryDescription}
                </p>
            </div>
        </div>
    );
};

const AboutBottomSection = () => {
    return (
        <div className="w-full max-w-[min(1680px,100%)] px-4 xl:px-16 py-8">
            {/* Current Focus */}
            <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-lg">
                <h4 className="text-lg text-white mb-3 font-medium">
                    {aboutData.currentFocus.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                    {aboutData.currentFocus.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-gray-400">
                    {aboutData.currentFocus.description}
                </p>
            </div>

            <SocialLinks />
        </div>
    );
};

const AboutProfilePic = ({
    imgSrc,
    className,
}: {
    imgSrc: string;
    className?: string;
}) => {
    let amp = 14;
    return (
        <div
            className={clsx(
                "w-full xl:h-full xl:w-[50%] flex flex-col items-center justify-center py-8 xl:px-8",
                className || ""
            )}
        >
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
                    className="h-auto w-auto max-h-[512px] xl:max-h-[400px] xl:h-auto min-h-[300px] xl:min-h-[300px] object-center object-contain"
                    // style={{ filter: "grayscale(100%) contrast(120%)" }}
                    src={imgSrc}
                    alt={aboutData.profilePicture.alt}
                />
            </motion.div>
            <div
                className="text-[.5rem] text-white/50 relative text-center mt-2"
                style={{ top: `${amp}px` }}
            >
                {aboutData.profilePicture.attribution}{" "}
                <a
                    className="!text-white/80 hover:!text-hover"
                    target="_blank"
                    href={aboutData.profilePicture.authorUrl}
                >
                    {aboutData.profilePicture.author}
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
            className="min-h-screen h-fit flex flex-col border-b-1 border-white/20 w-full items-center"
        >
            {/* Split layout section */}
            <div className="xl:max-h-[1024px] items-center h-full w-full max-w-[min(1680px,100%)] flex flex-col xl:flex-row">
                <AboutHi />
                <AboutInfo />
                <AboutProfilePic
                    className="hidden xl:flex"
                    imgSrc={`${import.meta.env.BASE_URL}profilepic.png`}
                />
            </div>

            {/* Full width divider line */}
            <div className="w-full border-t border-white/20"></div>

            {/* Bottom section - full width */}
            <AboutBottomSection />
        </section>
    );
};

export default AboutSection;
