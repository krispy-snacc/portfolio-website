const ContactSection = () => {
    return (
        <footer
            id="contact"
            className="flex flex-col grow border-b-1 border-white/20 w-full items-center justify-center px-4 xl:px-12 py-8"
        >
            <div className="h-full w-full max-w-[min(1680px,100%)] flex flex-col">
                <h2 className="w-full h-18 text-4xl flex items-center">
                    Contact
                </h2>
                <div className="w-full flex flex-col">
                    <div className="w-full flex items-center text-2xl py-6">
                        <a href="mailto:krispysnacc@gmail.com">
                            krispysnacc@gmail.com
                        </a>
                    </div>
                    <div className="w-full flex items-center flex-wrap justify-around text-lg mb-8">
                        <div className="px-6 py-4">
                            <a href="#">Github</a>
                        </div>
                        <div className="px-6 py-4">
                            <a href="#">Github</a>
                        </div>
                        <div className="px-6 py-4">
                            <a href="#">Github</a>
                        </div>
                        <div className="px-6 py-4">
                            <a href="#">Github</a>
                        </div>
                    </div>
                    <div className="w-full text-xs">
                        @2048 Krispy Snacc. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
