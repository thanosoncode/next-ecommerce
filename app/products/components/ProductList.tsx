"use client";
import { useAppState } from "@/app/context";
import { Product } from "../../utils/models";
import Image from "next/image";
import Link from "next/link";
import Filter from "./Filter";

interface ProductsProps {
  products: Product[];
  filterByCategory: boolean;
  title: string;
}

const ProductList: React.FC<ProductsProps> = ({
  products,
  filterByCategory,
  title,
}) => {
  const { selectedCategory } = useAppState();

  const filteredProducts = products.filter((product) =>
    selectedCategory ? product.category === selectedCategory : product
  );

  const productsToShow = filterByCategory ? filteredProducts : products;

  return (
    <main>
      <div className="flex justify-between">
        <h4 className="mb-4 text-2xl">{title}</h4>
        <Filter />
      </div>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 0.4fr))",
          gridAutoRows: "minmax(200px, auto)",
          gap: "80px 20px",
        }}
      >
        {productsToShow.map((product) => (
          <div key={product.name}>
            <Link
              href={`/products/${product.id}`}
              style={{
                maxWidth: "100%",
                position: "relative",
                height: "100%",
                display: "block",
              }}
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="rounded-xl object-cover"
              />
            </Link>
            <Link
              href={`/products/${product.id}`}
              style={{ display: "block", padding: "4px" }}
            >
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-sm">€ {product.price}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};
export default ProductList;
