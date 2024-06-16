import Hero from '@/components/Hero';
import VideoCarousels from '@/components/VideoCarousels';

import About from '@/components/About';
import FeaturedComparison from '@/components/FeaturedComparison';
import PopularBrands from '@/components/PopularBrands';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PopularBrands />
      <FeaturedComparison />
      <div className="h-[300px] sm:h-[500px] lg:h-full ">
        <VideoCarousels />
      </div>
      <Footer />
    </main>
  );
}
