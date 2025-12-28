'use client';

import FormField from '../forms/form-field';
import { Button } from '../ui/button';

function ProductSubmitForm() {
  return (
    <div>
      <form className='space-y-6'>
        <FormField
          label='Product Name*'
          id='name'
          name='name'
          placeholder='My awesome product'
          required
          onChange={() => {}}
          error=''
        />

        <FormField
          label='Slug*'
          id='slug'
          name='slug'
          placeholder='my-awesome-product'
          required
          onChange={() => {}}
          error=''
          helperText='URL-friendly version of your product name'
        />

        <FormField
          label='Tagline*'
          id='tagline'
          name='tagline'
          placeholder='A brief, catchy description'
          required
          onChange={() => {}}
          error=''
        />

        <FormField
          label='Description'
          id='description'
          name='description'
          placeholder='Tell us about your product...'
          required
          onChange={() => {}}
          error=''
          textarea
        />

        <FormField
          label='Website URL*'
          id='websiteurl'
          name='websiteurl'
          placeholder='https://yourproduct.com'
          required
          onChange={() => {}}
          error=''
          helperText='Enter your landing page'
        />

        <FormField
          label='Tags*'
          id='tags'
          name='tags'
          placeholder='AI, SaaS, Productivity'
          required
          onChange={() => {}}
          error=''
          helperText='Comma separated tags(e.g AI, SaaS, Productivity)'
        />
        <Button type='submit' size={'lg'} className='w-full'>
          Submit Products
        </Button>
      </form>
    </div>
  );
}
export default ProductSubmitForm;
