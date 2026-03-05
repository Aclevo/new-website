import Image from "next/image";
import {
  SiGithub,
  SiMastodon,
  SiBluesky,
} from "@icons-pack/react-simple-icons";

const socialIcons = {
  github: SiGithub,
  mastodon: SiMastodon,
  bluesky: SiBluesky,
  website: {},
};

const getSocialIcon = (provider) => {
  const IconComponent = socialIcons[provider.toLowerCase()];
  return IconComponent || null;
};

let MemberList = ({ members }) => {
  return (
    <section id="members" className="grid gap-4 md:grid-cols-3">
      {members
        .sort((a, b) => a.id - b.id)
        .map((member) => (
          <article
            key={member.username}
            className="card border border-white/15 bg-base-100/25 shadow-lg backdrop-blur-xl"
          >
            <div className="card-body flex flex-col items-center">
              <Image
                className="rounded-full"
                width={48}
                height={48}
                src={member.avatar_url}
                alt={member.username}
              />
              <h2 className="card-title text-xl">{member.username}</h2>
              <i className="text-center mt-2 mb-2">{member.bio}</i>
              <div className="flex flex-row items-center gap-2 mt-auto">
                <a
                  href={member.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="h-5 w-5" />
                </a>
                {Array.isArray(member.socials) &&
                  member.socials.map((social, i) => {
                    const IconComponent = getSocialIcon(social.provider);
                    if (!IconComponent) return null;
                    return (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </article>
        ))}
    </section>
  );
};

export default MemberList;
