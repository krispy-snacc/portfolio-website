import { useLenisHashScroll } from "../../hooks/useLenisHashScroll";

import siteData from "../../assets/sitedata.json";

type TechArtData = {
    title: string;
    media: string; // gif or mp4 file name
    srcUrl?: string; // optional source link
};

const TechArtCard = ({ title, media, srcUrl }: TechArtData) => {
    const isVideo = media.endsWith(".mp4");
    const isGif = media.endsWith(".gif");
    const isShadertoy = media.includes("shadertoy.com");
    const isComputeToys = media.includes("compute.toys");

    // const imgSrc = `${import.meta.env.BASE_URL}project-icons/${img}`;
    return (
        <div className="overflow-clip h-full w-[420px] border-[1px] border-white/20 transition-colors duration-200 hover:border-white/50 bg-black/40 flex flex-col rounded-lg">
            <div className="relative overflow-hidden w-full aspect-[16/9] xl:h-auto border-b xl:border-r border-white/20 border-[1px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#252525] to-[#171717]" />

                {isVideo && (
                    <video
                        src={media}
                        className="absolute h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                    />
                )}

                {isGif && (
                    <img
                        src={media}
                        className="absolute h-full w-full object-cover"
                        alt={title}
                    />
                )}

                {(isShadertoy || isComputeToys) && (
                    <div
                        className="absolute h-full w-full flex items-center justify-center"
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={media}
                            className="h-full w-full"
                            allow="fullscreen"
                        />
                    </div>
                )}
            </div>
            <div className="py-8 p-4 xl:p-8 flex flex-1 w-full">
                <h2 className="w-full text-xl flex items-center">{title}</h2>
                {srcUrl && (
                    <div className="w-full flex justify-end">
                        <a
                            href={srcUrl}
                            target="_blank"
                            className="text-sm w-44 shrink-0 border-[#535bf2] border-[2px] h-fit px-6 py-4 hover:bg-hover/95 hover:!text-white rounded-full mt-auto"
                        >
                            Source Code ↗
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

const TechArtSection = () => {
    useLenisHashScroll(80);
    return (
        <section
            id="techart"
            className="min-h-screen flex flex-col grow border-b-1 border-white/20 w-full items-center  px-4 xl:px-12 py-8 pb-24"
        >
            <div className="h-full w-full max-w-[min(1680px,100%)] flex flex-col">
                <h2 className="w-full h-18 mb-6 text-4xl flex items-center">
                    Tech Arts
                </h2>
                <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 place-items-center">
                    {(siteData["techarts"] as TechArtData[]).map((item, i) => (
                        <TechArtCard
                            key={i}
                            title={item.title}
                            media={item.media}
                            srcUrl={item.srcUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechArtSection;
