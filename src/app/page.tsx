import Header from "@/components/header";
import HeroBanner from "@/components/HomePageHero";

export default function Home() {
  return (
    <div>
      <main>
        <HeroBanner />
        <section id="portfolio" className="h-[100vh]">
          Portfolio
        </section>
      </main>
    </div>
  );
}
