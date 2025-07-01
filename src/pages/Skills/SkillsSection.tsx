import { useLenisHashScroll } from "../../hooks/useLenisHashScroll";

const icons = import.meta.glob("/src/assets/Icons/skills/*.svg", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const TechIcon = ({ name }: { name: string }) => {
    return (
        <div title={name} className="h-24 aspect-square">
            <img
                src={icons[`/src/assets/Icons/skills/${name}.svg`]}
                alt={name}
            />
        </div>
    );
};

const SkillSet = ({
    name,
    children,
}: {
    name: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="w-full flex flex-col">
            <h2 className="mb-6 text-2xl flex items-center">•{name}</h2>

            <div className="flex justify-center w-full p-6 border-y-[1px] border-white/20">
                <div className="w-fit max-w-180 h-full flex justify-center gap-4 flex-wrap ">
                    {children}
                </div>
            </div>
        </div>
    );
};

const SkillsSection = () => {
    useLenisHashScroll(80);
    return (
        <section
            id="skills"
            className="flex flex-col grow border-b-1 border-white/20 w-full items-center justify-center px-4 xl:px-12 py-8 pb-24"
        >
            <div className="h-full w-full max-w-[min(1680px,100%)] flex flex-col">
                <h2 className="w-full h-18 mb-6 text-4xl flex items-center">
                    Skills
                </h2>
                <div className="h-full w-full flex flex-col gap-12">
                    <SkillSet name="Languages">
                        <TechIcon name="rust"></TechIcon>
                        <TechIcon name="c"></TechIcon>
                        <TechIcon name="cplusplus"></TechIcon>
                        <TechIcon name="csharp"></TechIcon>
                        <TechIcon name="typescript"></TechIcon>
                        <TechIcon name="javascript"></TechIcon>
                        <TechIcon name="kotlin"></TechIcon>
                        <TechIcon name="python"></TechIcon>
                        <TechIcon name="bash"></TechIcon>
                        <TechIcon name="go"></TechIcon>
                    </SkillSet>
                    <SkillSet name="Frameworks">
                        <TechIcon name="react"></TechIcon>
                        <TechIcon name="nextjs"></TechIcon>
                        <TechIcon name="tailwindcss"></TechIcon>
                        <TechIcon name="electron"></TechIcon>
                        <TechIcon name="bootstrap"></TechIcon>
                        <TechIcon name="opencv"></TechIcon>
                        <TechIcon name="opengl"></TechIcon>
                        <TechIcon name="mysql"></TechIcon>
                    </SkillSet>
                    <SkillSet name="Tools">
                        <TechIcon name="nginx"></TechIcon>
                        <TechIcon name="docker"></TechIcon>
                        <TechIcon name="git"></TechIcon>
                        <TechIcon name="arduino"></TechIcon>
                        <TechIcon name="vim"></TechIcon>
                    </SkillSet>
                    <SkillSet name="Software">
                        <TechIcon name="unity"></TechIcon>
                        <TechIcon name="blender"></TechIcon>
                        <TechIcon name="figma"></TechIcon>
                        <TechIcon name="github"></TechIcon>
                        <TechIcon name="vscode"></TechIcon>
                    </SkillSet>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
