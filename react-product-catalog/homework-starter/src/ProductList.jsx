import { ProductCard } from "./ProductCard";

export function ProductList({ products }) {
  return (
    <div className="product-list">
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}