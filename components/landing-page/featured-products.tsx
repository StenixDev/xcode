import { StarIcon } from 'lucide-react';
import SectionHeader from '../common/section-header';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import ProductCard from '../products/product-card';
import GetFeaturedProducts from '@/lib/products/product-select';

/*
const featuredProducts = [
  {
    id: 1,
    name: 'ParityKit',
    description: 'A toolkit for creating parity',
    tags: ['SaaS', 'Pricing', 'Global'],
    votes: 615,
    isFeatured: true,
  },

  {
    id: 2,
    name: 'Modern Stack',
    description: 'Learn to build from nextjs',
    tags: ['Next.js', 'Full-Stack', 'Course'],
    votes: 123,
    isFeatured: false,
  },
];
*/

async function FeaturedProducts() {
  const featuredProducts = await GetFeaturedProducts();

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
        <div className='grid-wrapper'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeaturedProducts;
