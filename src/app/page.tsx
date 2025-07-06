import HeroSection from "@/components/heroSection";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main>
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
    
    </main>
  );
}
