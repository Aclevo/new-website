import Image from "next/image";

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
            </div>
          </article>
        ))}
    </section>
  );
};

export default MemberList;
