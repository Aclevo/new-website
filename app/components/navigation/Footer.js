import { SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";
import { config } from "../../config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/15 bg-base-100/25 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-base-content/70">
              &copy; {currentYear} {config.org.name}. Licensed under the{" "}
              {config.site.license} license. See{" "}
              <a href="https://github.com/Aclevo/new-website/blob/main/LICENSE">
                LICENSE
              </a>{" "}
              for more information.
            </p>
            <p className="text-xs text-base-content/50">
              Innovating with open source.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={config.org.githubUrl}
              target="_blank"
              className="text-base-content/60 transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href={config.org.discordUrl}
              className="text-base-content/60 transition-colors hover:text-primary"
              aria-label="Discord"
            >
              <SiDiscord className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
