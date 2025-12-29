'use client';

import { Loader2Icon, SparkleIcon } from 'lucide-react';
import FormField from '../forms/form-field';
import { Button } from '../ui/button';
import { addProductAction } from '@/lib/products/product-actions';
import { useActionState } from 'react';

const initialState = {
  success: false,
  error: {},
  message: '',
};

function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );

  const { errors, message, success } = state;

  return (
    <div>
      <form className='space-y-6' action={formAction}>
        <FormField
          label='Product Name*'
          id='name'
          name='name'
          placeholder='My awesome product'
          required
          onChange={() => {}}
          error={errors?.name}
        />

        <FormField
          label='Slug*'
          id='slug'
          name='slug'
          placeholder='my-awesome-product'
          required
          onChange={() => {}}
          error={errors?.slug}
          helperText='URL-friendly version of your product name'
        />

        <FormField
          label='Tagline*'
          id='tagline'
          name='tagline'
          placeholder='A brief, catchy description'
          required
          onChange={() => {}}
          error={errors?.tagline}
        />

        <FormField
          label='Description'
          id='description'
          name='description'
          placeholder='Tell us about your product...'
          required
          onChange={() => {}}
          error={errors?.description}
          textarea
        />

        <FormField
          label='Website URL*'
          id='websiteUrl'
          name='websiteUrl'
          placeholder='https://yourproduct.com'
          required
          onChange={() => {}}
          error={errors?.websiteUrl}
          helperText='Enter your landing page'
        />

        <FormField
          label='Tags*'
          id='tags'
          name='tags'
          placeholder='AI, SaaS, Productivity'
          required
          onChange={() => {}}
          error={errors?.tags}
          helperText='Comma separated tags(e.g AI, SaaS, Productivity)'
        />
        <Button
          type='submit'
          size={'lg'}
          className='w-full'
          disabled={isPending}
        >
          {isPending ? (
            <Loader2Icon className='size-4 animate-spin' />
          ) : (
            <>
              <SparkleIcon className='size-4' />
              Submit Products
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
export default ProductSubmitForm;
