import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";
import { Simple } from "./icons";
import mypresentation_brats_2023 from "../assets/files/BraTS-Based-on-U-net-CV-Project-ICL-Winter-School-2023-zhenhuang-presentation.pdf";

const projects = [
  {
    title: "MemXTerminator",
    description: "A software for membrane analysis and subtraction in cryo-EM.",
    icon: Simple.IconCode,
    url: "https://zhenhuanglab.github.io/MemXTerminator/",
  },
  {
    title: "Computer Vision Project",
    description: "Brain Tumor Segmentation (BraTS) Based on U-net - ICL Winter School 2023",
    icon: Simple.IconCode,
    url: mypresentation_brats_2023,
  },
  {
    title: "Research Article",
    description: "Mutation in the BaeSR mediates cefiderocol resistance in A.baumannii",
    icon: Simple.IconMicroscope,
    url: "https://journals.asm.org/doi/10.1128/msystems.01291-22",
  },
  {
    title: "Astrophotography Gallery",
    description: "A selection of images taken by me.",
    icon: Simple.IconKirastar,
    url: "https://blog.zhenhuang.site/astrogallery/",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Selected Works</h2>
      <ul className="grid grid-cols-1 gap-3 p-1">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-primary-10 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <project.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{project.title}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {project.description}
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={project.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
