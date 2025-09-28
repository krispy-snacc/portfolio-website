import { motion } from "framer-motion";
import clsx from "clsx";
import { useSlidePanel, SlidePanelProvider } from "./SlidePanelContext";
import NavToggleClose from "../assets/Icons/HamburgToggleClose.svg?react";
import NavToggleOpen from "../assets/Icons/HamburgToggleOpen.svg?react";
import GithubIcon from "../assets/Icons/contact/github.svg?react";
import KofiIcon from "../assets/Icons/contact/kofi.svg?react";

const Logo = () => {
    return (
        <div className="h-full flex-1 xl:flex-none border-r-[1px] xl:border-none border-white/20 xl:w-[200px] flex justify-start items-center">
            <a
                id="logo"
                href="/"
                className="h-full flex items-center justify-center px-4"
            >
                <span className="text-4xl">Kris</span>
            </a>
        </div>
    );
};

const NavLink = ({ name, href }: { name: string; href: string }) => {
    return (
        <li className="h-full w-full flex items-center justify-center grow text-white text-xl">
            <a
                className="h-full px-4 flex items-center justify-center"
                href={href}
            >
                {name}
            </a>
        </li>
    );
};

const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <nav
            id="navbar"
            className="hidden xl:flex h-full w-[320px] border-x-[1px] border-white/20 grow"
        >
            <ol className="flex h-full w-full justify-center items-center">
                {children}
            </ol>
        </nav>
    );
};

const MobileNavLink = ({ name, href }: { name: string; href: string }) => {
    const { togglePanel } = useSlidePanel();
    return (
        <li className="max-h-24 h-full w-full flex items-center grow text-white text-xl border-b-[1px] border-white/20">
            <a
                className="w-full px-8 flex justify-start items-center py-4"
                href={href}
                onClick={togglePanel}
            >
                {name}
            </a>
        </li>
    );
};

const MobileNavbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <nav id="navbar" className="flex h-full w-full grow">
            <ol className="flex flex-col h-full w-full justify-start items-center">
                {children}
            </ol>
        </nav>
    );
};

const ContactIcon = ({
    name,
    href,
    children,
}: {
    name: string;
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <div title={name} className="h-full aspect-square">
            <a href={href} target="_blank">
                {children}
            </a>
        </div>
    );
};

const Contacts = () => {
    return (
        <div
            id="contact-icons"
            className="hidden xl:flex justify-center items-center h-full w-[200px] py-6 px-3"
        >
            <div className="w-full h-full flex gap-1 items-center justify-center">
                <ContactIcon
                    href="https://github.com/krispy-snacc"
                    name="Github"
                >
                    <GithubIcon className="h-full w-full" />
                </ContactIcon>
                <ContactIcon href="https://ko-fi.com/krispysnacc" name="Ko-fi">
                    <KofiIcon className="h-full w-full" />
                </ContactIcon>
            </div>
        </div>
    );
};

const NavButton = () => {
    const { togglePanel, isOpen } = useSlidePanel();
    return (
        <button
            id="nav-button"
            className={clsx(
                "xl:hidden flex justify-center items-center h-full aspect-square py-6 px-3",
                isOpen ? "bg-white hover:bg-white/80" : "hover:bg-white/20"
            )}
            onClick={togglePanel}
        >
            {isOpen ? (
                <NavToggleClose className="w-[32px] h-[32px]" />
            ) : (
                <NavToggleOpen className="w-[32px] h-[32px]" />
            )}
        </button>
    );
};

const SlidePanel = () => {
    const { isOpen } = useSlidePanel();
    return (
        <motion.div
            className="w-screen h-screen fixed z-2 top-0 left-0 bg-black"
            initial={{ x: "0%", y: "-100%" }}
            animate={{ y: isOpen ? "0%" : "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="h-full w-full pt-[80px] pb-[64px]">
                <MobileNavbar>
                    <MobileNavLink name="About" href="#about" />
                    <MobileNavLink name="Skills" href="#skills" />
                    <MobileNavLink name="Tech Art" href="#techart" />
                    <MobileNavLink name="Projects" href="#projects" />
                    <MobileNavLink name="Contact" href="#contact" />
                </MobileNavbar>
            </div>
        </motion.div>
    );
};

const Header = () => {
    return (
        <SlidePanelProvider>
            <SlidePanel />
            <header className="flex justify-center items-center z-10 fixed h-[80px] w-full border-b-1 border-white/20 bg-black/95">
                <div className="w-full max-w-[min(1680px,100%)] mx-auto h-full outline-x-[1px] border-white/20 flex items-center backdrop-blur-xs">
                    <Logo />
                    <Navbar>
                        <NavLink name="About" href="#about" />
                        <NavLink name="Skills" href="#skills" />
                        <NavLink name="Tech Art" href="#techart" />
                        <NavLink name="Projects" href="#projects" />
                        <NavLink name="Contact" href="#contact" />
                    </Navbar>
                    <Contacts />
                    <NavButton />
                </div>
            </header>
        </SlidePanelProvider>
    );
};

const HeaderSpacer = () => {
    return <div className="shrink-0 h-[80px] w-full"></div>;
};

export { Header, HeaderSpacer };
