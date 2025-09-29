import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useSlidePanel, SlidePanelProvider } from "./SlidePanelContext";
import NavToggleClose from "../assets/Icons/HamburgToggleClose.svg?react";
import NavToggleOpen from "../assets/Icons/HamburgToggleOpen.svg?react";
import GithubIcon from "../assets/Icons/contact/github.svg?react";
import KofiIcon from "../assets/Icons/contact/kofi.svg?react";
import LinkedinIcon from "../assets/Icons/contact/linkedin.svg?react";
import EmailIcon from "../assets/Icons/contact/email.svg?react";
import sitedata from "../assets/sitedata.json";

const Logo = () => {
    return (
        <div className="h-full flex-1 xl:flex-none border-r-[1px] xl:border-none border-white/20 xl:w-[200px] flex justify-start items-center">
            <Link
                id="logo"
                to="/"
                className="h-full flex items-center justify-center px-4"
            >
                <span className="text-4xl">Kris</span>
            </Link>
        </div>
    );
};

const NavLink = ({ name, to }: { name: string; to: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li
            className={clsx(
                "h-full w-full flex items-center justify-center grow text-white text-xl transition-colors",
                isActive
                    ? "bg-white/10 text-white"
                    : "text-white hover:bg-white/5"
            )}
        >
            <Link
                className="h-full px-4 flex items-center justify-center w-full"
                to={to}
            >
                {name}
            </Link>
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

const MobileNavLink = ({ name, to }: { name: string; to: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const { togglePanel } = useSlidePanel();

    return (
        <li
            className={clsx(
                "max-h-24 h-full w-full flex items-center grow text-white text-xl border-b-[1px] border-white/20 transition-colors",
                isActive
                    ? "bg-white/10 text-white"
                    : "text-white hover:bg-white/5"
            )}
        >
            <Link
                className="w-full px-8 flex justify-start items-center py-4"
                to={to}
                onClick={togglePanel}
            >
                {name}
            </Link>
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

// Helper function to get the icon component based on icon name
const getIconComponent = (iconName: string) => {
    switch (iconName.toLowerCase()) {
        case "github":
            return GithubIcon;
        case "kofi":
        case "ko-fi":
            return KofiIcon;
        case "linkedin":
            return LinkedinIcon;
        case "email":
            return EmailIcon;
        default:
            return GithubIcon; // fallback
    }
};

const Contacts = () => {
    const socialLinks = sitedata.about.socialLinks;

    return (
        <div
            id="contact-icons"
            className="hidden xl:flex justify-center items-center h-full w-[200px] py-6 px-3"
        >
            <div className="w-full h-full flex gap-1 items-center justify-center">
                {socialLinks.map((link) => {
                    const IconComponent = getIconComponent(link.icon);
                    return (
                        <ContactIcon
                            key={link.name}
                            href={link.url}
                            name={link.name}
                        >
                            <IconComponent className="h-full w-full" />
                        </ContactIcon>
                    );
                })}
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

const MobileContacts = () => {
    const socialLinks = sitedata.about.socialLinks;
    const { togglePanel } = useSlidePanel();

    return (
        <div className="w-full px-8 py-6 border-t-[1px] border-white/20">
            <h3 className="text-white text-lg mb-4">Connect</h3>
            <div className="flex gap-4 items-center">
                {socialLinks.map((link) => {
                    const IconComponent = getIconComponent(link.icon);
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aspect-square h-12 flex items-center justify-center hover:bg-white/10 rounded-md transition-colors"
                            title={link.name}
                            onClick={togglePanel}
                        >
                            <IconComponent className="w-[80%] h-[80%]" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

const SlidePanel = () => {
    const { isOpen } = useSlidePanel();
    return (
        <motion.div
            className="w-screen h-[100dvh] fixed z-2 top-0 left-0 bg-black"
            initial={{ x: "0%", y: "-100%" }}
            animate={{ y: isOpen ? "0%" : "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="h-full w-full pt-[80px] flex flex-col">
                <MobileNavbar>
                    <MobileNavLink name="About" to="/about" />
                    <MobileNavLink name="Skills" to="/skills" />
                    <MobileNavLink name="Tech Art" to="/techart" />
                    <MobileNavLink name="Projects" to="/projects" />
                </MobileNavbar>
                <MobileContacts />
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
                        <NavLink name="About" to="/about" />
                        <NavLink name="Skills" to="/skills" />
                        <NavLink name="Tech Art" to="/techart" />
                        <NavLink name="Projects" to="/projects" />
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
