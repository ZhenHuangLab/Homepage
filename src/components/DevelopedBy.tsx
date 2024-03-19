const DevelopedBy = () => {
  return (
    <div className="mb-8 font-mono text-neutral-10 text-xs text-center">
      <span>
      &copy; 2024 · Built with{" "}
        <a
          href="https://astro.build/"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          Astro
        </a>
        &nbsp;&&nbsp;
        <a
          href="https://github.com/flamrdevs/astrolinkt/tree/main"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          astrolinkt
        </a>
        &nbsp;·
        Modified by{" "}
        <a
          href="https://github.com/ZhenHuangLab"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          {" "}
          Zhen Huang
        </a>
      </span>
    </div>
  );
};

export default DevelopedBy;
