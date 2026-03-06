import { Suspense } from "react";
import MemberList from "../../components/MemberList";
import ProjectList from "../../components/ProjectList";
import HeroSection from "./sections/HeroSection";
import CommunitySection from "./sections/CommunitySection";
import JoinSection from "./sections/JoinSection";
import { getTopProject, getProjects, getStats, getMembers } from "./data";

const LoadingSkeleton = () => (
  <div className="space-y-8">
    <div className="hero overflow-hidden rounded-[2rem] border border-primary/25 bg-base-100/35 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="hero-content w-full flex-col items-start gap-8 p-8 sm:p-12 lg:flex-row">
        <div className="max-w-2xl space-y-5">
          <div className="h-8 w-32 animate-pulse rounded bg-base-200" />
          <div className="h-12 w-64 animate-pulse rounded bg-base-200" />
          <div className="h-4 w-full animate-pulse rounded bg-base-200" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-base-200" />
        </div>
      </div>
    </div>
    <div className="h-64 animate-pulse rounded-[2rem] bg-base-200" />
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-48 animate-pulse rounded-2xl bg-base-200" />
      ))}
    </div>
  </div>
);

const HomePageContent = async () => {
  const [topProject, projects, stats, members] = await Promise.all([
    getTopProject(),
    getProjects(),
    getStats(),
    getMembers(),
  ]);

  return (
    <div className="space-y-8">
      <HeroSection topProject={topProject} />
      <CommunitySection stats={stats} />
      <div className="divider divider-primary">Public Members</div>
      <MemberList members={members} />
      <div className="divider divider-primary">Our Projects</div>
      <ProjectList projects={projects} />
      <JoinSection />
    </div>
  );
};

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <HomePageContent />
    </Suspense>
  );
};

export default HomePage;
