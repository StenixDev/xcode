import { StarIcon } from 'lucide-react';
import SectionHeader from '../common/section-header';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

function FeaturedProducts() {
  return (
    <section className='py-20 bg-muted/20'>
      <div className='wrapper'>
        <div className='flex items-center justify-between mb-8'>
          <SectionHeader
            title='Featured Today'
            icon={StarIcon}
            description='Top picks from our community this week.'
          />
          <Button variant='outline' asChild className='hidden sm:flex'>
            <Link href='/explore'>
              View All <ArrowRightIcon className='size-4' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProducts;
