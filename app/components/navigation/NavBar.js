import { config } from "../../config";
import Link from "next/link";
import { Anta } from "next/font/google";

const AntaFont = Anta({ subsets: ["latin"], weight: "400" });

const links = {
  home: "/",
  projects: "#projects",
  contributors: "#contributors",
};

const renderLinks = () => {
  return Object.entries(links).map(([key, value]) => (
    <li key={key}>
      <Link href={value} className="text-xl">
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </Link>
    </li>
  ));
};

const NavBar = () => {
  return (
    <nav
      className={` ${AntaFont.className} navbar sticky top-4 z-40 rounded-3xl border border-white/15 bg-base-100/30 px-4 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <button
            className="btn btn-ghost btn-circle lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-56 border border-white/15 bg-base-200/70 p-2 shadow-xl backdrop-blur-xl"
          >
            {renderLinks()}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-semibold">
          {config.org.name}
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 rounded-2xl border border-white/10 bg-base-100/20 px-2 py-1 backdrop-blur-md">
          {renderLinks()}
        </ul>
      </div>

      <div className="navbar-end">
        <a href={config.org.githubUrl}>
          <button className="btn btn-primary btn-soft text-xl py-7">
            Star on GitHub
          </button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
