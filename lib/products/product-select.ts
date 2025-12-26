import { db } from '@/db';
import { products } from '@/db/schema';
import { eq } from 'drizzle-orm';

async function GetFeaturedProducts() {
  const productData = await db
    .select()
    .from(products)
    .where(eq(products.status, 'approved'));

  return productData;
}
export default GetFeaturedProducts;
