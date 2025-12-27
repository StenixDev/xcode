import { Calendar1Icon, RocketIcon } from 'lucide-react';
import SectionHeader from '../common/section-header';
import ProductCard from '../products/product-card';
import EmptyState from '../common/empty-state';
import GetRecentlyLaundedProducts from '@/lib/products/product-select';

/*
const recentlyLaunchedProducts = [
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
]; */

async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = await GetRecentlyLaundedProducts();
  return (
    <section className='py-20'>
      <div className='wrapper space-y-8'>
        <SectionHeader
          title='Recently Launched'
          icon={RocketIcon}
          description='Discover the latest products from our community'
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className='grid-wrapper'>
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message='No products launches in the last week. Check back soon for new launches.'
            icon={Calendar1Icon}
          />
        )}
      </div>
    </section>
  );
}
export default RecentlyLaunchedProducts;
