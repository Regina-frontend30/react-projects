export function ProductCard({ product }) {
    const hasDiscount = product.discount;
    const finalPrice = hasDiscount
        ? Math.round(product.price * (1 - product.discount))
        : product.price;

    return (
        <div className="product-card">
            <img
                className="product-image"
                src={product.imageUrl}
                alt={product.title}
            />

            <h2 className="product-title">{product.title}</h2>

            <div className="product-prices">
                {hasDiscount && (
                    <span className="old-price">{product.price} ₽</span>
                )}

                <span className={`price ${hasDiscount ? 'discount' : ''}`}>
                    {finalPrice} ₽
                </span>
            </div>
        </div>
    );
}