import Image from "next/image";
import { categories, products } from "../data/categories";
import Container from "../components/Container";
import Link from "next/link";
import Contact from "../components/Contact";

const ProductsNew = () => {
  return (
    <>
      <header className="bg-lightGreen">
        <Container classes="relative">
          <h1 className="text-3xl text-center font-extralight tracking-wide pt-6 pb-28">
            Find things you'll love. Support independent sellers. Only on Etsy.
          </h1>
          <section
            className="flex gap-12 items-center justify-center"
            style={{
              position: "absolute",
              top: "100px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div className="w-24 h-24 overflow-hidden rounded-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="object-fill w-24 h-24"
                  />
                </div>
                <p>{category.name}</p>
              </div>
            ))}
          </section>
        </Container>
      </header>
      <Container>
        <main className="pt-32">
          <h4 className="text-2xl  mb-4">Find something you love</h4>
          <section
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fill, 256px)",
            }}
          >
            {products.map((product) => (
              <div className="shrink-0 w-64 h-64" key={product.id}>
                <Image src={product.image} alt={product.name} />
                <Link href={`/products/${product.id}`}>
                  <p className="">{product.name}</p>
                </Link>
                <p>€{product.price}</p>
              </div>
            ))}
          </section>
        </main>
      </Container>
      <Contact />
    </>
  );
};
export default ProductsNew;
