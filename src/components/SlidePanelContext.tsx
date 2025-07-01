import { createContext, useContext, useState } from "react";

interface SlidePanelContextType {
    isOpen: boolean;
    togglePanel: () => void;
}

const SlidePanelContext = createContext<SlidePanelContextType | undefined>(
    undefined
);

export const useSlidePanel = () => {
    const context = useContext(SlidePanelContext);
    if (!context)
        throw new Error("useSlidePanel must be used within SlidePanelProvider");
    return context;
};

export const SlidePanelProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePanel = () => setIsOpen((prev) => !prev);

    return (
        <SlidePanelContext.Provider value={{ isOpen, togglePanel }}>
            {children}
        </SlidePanelContext.Provider>
    );
};
