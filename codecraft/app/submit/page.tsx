import SectionHeader from '@/components/common/section-header';
import ProductSubmitForm from '@/components/products/products-submit-form';
import { SparkleIcon } from 'lucide-react';

function SubmitPage() {
  return (
    <section className='py-20'>
      <div className='wrapper'>
        <SectionHeader
          title='Submit your project'
          icon={SparkleIcon}
          description='Share your creation with the community'
        />
        <div className='max-w-2xl mx-auto'>
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
}
export default SubmitPage;
