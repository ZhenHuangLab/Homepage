import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";
import mypersonalCV from "../assets/files/CV-zhenhuang.pdf";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/profile.jpg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-mono text-lg lg:text-xl">Undergrad, Zhejiang Univ</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">
            <span className="gradient-text">黄振</span> Zhen Huang</h2>
        </div>
      </div>

      <div className="font-mono">
      I am a senior student from Zhejiang University, China. My research focuses on cryo-EM/ET, especially its computational side. I am interested in exploring the interdisciplinary interface between physics, chemistry, biology, and computer science, and I strive to learn and conduct research at this intersection.
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href={mypersonalCV} target="_blank" aria-label="CV">
          <Simple.IconCV />
          CV / Résumé
        </Button>
      </div>
    </div>
  );
};
