import React from "react";
import { useLenisHashScroll } from "../../hooks/useLenisHashScroll";

import siteData from "../../assets/sitedata.json";

const TechLabel = ({ title, color }: { title: string; color: string }) => {
    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className="text-sm px-2 rounded-full text-nowrap"
        >
            {title}
        </div>
    );
};

const TechLabels = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="flex flex-wrap justify-end items-end max-w-96 gap-2 pl-8 ml-auto mt-auto ">
            {children}
        </div>
    );
};

type Lang = {
    name: string;
    color: string;
};

type ProjectData = {
    title: string;
    description: string;
    img: string;
    srcUrl: string;
    langs: Lang[];
};

const ProjectCard = ({
    title,
    description,
    img,
    srcUrl,
    children,
}: {
    title: string;
    description: string;
    img: string;
    srcUrl: string;
    children: React.ReactNode;
}) => {
    const imgSrc = `${import.meta.env.BASE_URL}project-icons/${img}`;
    return (
        <div className="overflow-clip h-full lg:w-[420px] w-full  border-[1px] border-white/20 transition-colors duration-200 hover:border-white/50 bg-black/40 flex flex-col rounded-lg">
            <div className="relative overflow-hidden w-full aspect-[7/3] xl:h-auto border-b xl:border-r border-white/20 border-[1px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#252525] to-[#171717]" />

                <img
                    src={imgSrc}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover blur-sm scale-100 brightness-50"
                    style={{ willChange: "transform, filter" }}
                />
                <img
                    src={imgSrc}
                    className="absolute h-full w-full object-cover"
                />
            </div>
            <div className="py-6 p-4 xl:p-8 flex flex-col flex-1 w-full">
                <h2 className="w-full mb-6 text-2xl flex items-center">
                    {title}
                </h2>
                <p className="w-full text-sm flex items-center mb-16">
                    {description}
                </p>
                <div className="grow w-full flex">
                    <a
                        href={srcUrl}
                        target="_blank"
                        className="text-sm w-44 shrink-0 border-[#535bf2] border-[2px] h-fit px-6 py-4 hover:bg-hover/95 hover:!text-white rounded-full mt-auto"
                    >
                        Source Code ↗
                    </a>
                    <TechLabels>{children}</TechLabels>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    useLenisHashScroll(80);
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col grow border-b-1 border-white/20 w-full items-center px-4 xl:px-12 py-8 pb-24"
        >
            <div className="h-full w-full max-w-[min(1680px,100%)] flex flex-col">
                <h2 className="w-full h-18 mb-6 text-4xl flex items-center">
                    Projects
                </h2>
                <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 place-items-center">
                    {(siteData["projects"] as ProjectData[]).map((item, i) => (
                        <ProjectCard
                            key={i}
                            title={item.title}
                            img={item.img}
                            srcUrl={item.srcUrl}
                            description={item.description}
                        >
                            {item.langs?.map((l) => (
                                <TechLabel title={l.name} color={l.color} />
                            ))}
                        </ProjectCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
