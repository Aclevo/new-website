import Image from "next/image";
const PartnerList = ({ partners }) => {
    return (
        <section id="partners" className="grid gap-4 md:grid-cols-3">
            {partners.map((partner) => (
                <article key={partner.shortName} className="card border border-white/15 bg-base-100/50 shadow-lg backdrop-blur-xl transition duration-[0.3s] hover:shadow-cyan-50">
                    <div className="card-body flex flex-col items-center">
                        <Image
                            className="rounded-full"
                            width={96}
                            height={96}
                            src={partner.avatar_url}
                            alt={partner.shortName}
                            sizes="96px"
                        />
                        <h2 className="card-title text-xl">{partner.name}</h2>
                        <i className="text-center mt-2 mb-2">{partner.shortName} has been a partner with us since {new Date(partner.since_date).getFullYear()}! Thank you so much for your contributions! </i>
                        <div className="flex flex-row items-center gap-2 mt-auto">
                            <a href={partner.website} target="_blank" aria-label={`${partner.shortName}'s Website`} className="btn btn-primary">Check out their website!</a>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default PartnerList