'use server';

import { auth } from '@clerk/nextjs/server';
import { productSchema } from './product-validation';

type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message: string;
};

export const addProductAction = async (
  prevState: FormState,
  formData: FormData
) => {
  console.log(formData);

  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,

        message: 'You must be sign in to submit the product',
      };
    }

    // Data

    const rawFormData = Object.fromEntries(formData.entries());

    // validate data

    const validateData = productSchema.safeParse(rawFormData);

    if (!validateData.success) {
      console.log(validateData.error.flatten().fieldErrors);
      return {
        success: false,
        errors: validateData.error.flatten().fieldErrors,
        message: 'Invalid data',
      };
    }

    const data = validateData.data;

    // transform the data
  } catch (error) {
    return {
      success: false,
      errors: error,
      message: 'Failed to submit product',
    };
  }
};
