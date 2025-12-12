import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20'>
      <div className='wrapper'>
        <div className='flex flex-col items-center justify-center lg:py-24 py-12 text-center'>
          <Badge variant='secondary'>
            Join thousands of creators sharing their work
          </Badge>
          <h1>Share What You&apos;ve Built, Discover What&apos;s Launching</h1>
          <p>
            A community platform for creators to showcase their apps, AI tools,
            SaaS products, and creative projects. Authentic launches, real
            builders, genuine feedback.
          </p>
          <Button>Share Your Project</Button>
          <Button>Explore Projects</Button>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
