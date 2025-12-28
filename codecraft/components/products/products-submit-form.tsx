'use client';

import FormField from '../forms/form-field';

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
          label='Website URL*'
          id='websiteurl'
          name='websiteurl'
          placeholder='https://yourproduct.com'
          required
          onChange={() => {}}
          error=''
        />
      </form>
    </div>
  );
}
export default ProductSubmitForm;
