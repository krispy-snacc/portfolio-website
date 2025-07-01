import "./Content.css";

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="main-content-container w-full flex flex-col justify-center items-center">
            {children}
        </main>
    );
};

export default Content;
