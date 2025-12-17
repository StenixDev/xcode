import FeaturedProducts from '@/components/landing-page/featured-products';
import HeroSection from '@/components/landing-page/hero-section';
import RecentlyLaunchedProducts from '@/components/landing-page/recently-launched-products';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />

      <RecentlyLaunchedProducts />
    </div>
  );
}
export default Home;
