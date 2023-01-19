import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewProducts,
} from "./category-preview.styles.jsx";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewProducts>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewProducts>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
