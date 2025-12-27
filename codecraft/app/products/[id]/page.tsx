import GetFeaturedProducts from '@/lib/products/product-select';

export const generateStaticParams = async () => {
  const products = await GetFeaturedProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
};

async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Product ID is {id}</div>;
}
export default Product;
