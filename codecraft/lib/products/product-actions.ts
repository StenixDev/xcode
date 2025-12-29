'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { productSchema } from './product-validation';
import { db } from '@/db';
import { products } from '@/db/schema';
import z, { success } from 'zod';

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

    const user = await currentUser();
    const userEmail = user?.emailAddresses?.[0].emailAddress || 'Anonymous';

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

    const { name, slug, tagline, description, websiteUrl, tags } =
      validateData.data;

    // transform the data

    const tagArray = tags ? tags.filter((tag) => typeof tag === 'string') : [];

    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      tags: tagArray,
      status: 'pending',
      submittedBy: userEmail,
      organizationId: '',
      userId,
    });

    return {
      success: true,
      message: 'Product submitted successfully! it will be reviewed shortly',
    };
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: 'Validation failed. Please check the form',
      };
    }

    return {
      success: false,
      errors: error,
      message: 'Failed to submit product',
    };
  }
};
