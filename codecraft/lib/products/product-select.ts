import { db } from '@/db';
import { products } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

async function GetFeaturedProducts() {
  const productData = await db
    .select()
    .from(products)
    .where(eq(products.status, 'approved'))
    .orderBy(desc(products.voteCount));

  return productData;
}

async function GetRecentlyLaundedProducts() {
  const productData = await GetFeaturedProducts();

  const oneWeekAgo = new Date();

  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );

  return productData;
}
export default GetFeaturedProducts;
