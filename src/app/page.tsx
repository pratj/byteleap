import Aurora from '@/components/ui/Aurora/Aurora';
import { GlowingEffectDemoSecond } from '@/components/welcome-menu';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#021B36", "#031345", "#011928"]}
          speed={0.5}
        />
      </div>
      <div className="p-8 relative z-10">
        <GlowingEffectDemoSecond />
      </div>
    </div>
  );
}