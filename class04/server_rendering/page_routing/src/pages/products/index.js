import Link from "next/link";

export async function getStaticProps() {
  const products = ["101", "102", "103"];

  return {
    props: {
      products,
    },
  };
}

export default function Products({products}) {
  return (
    <main>
      <h1>Produits</h1>

      <ul>
        {products.map((product) => (
          <li key={product}>
            <Link href={`/products/${product}`}>Produit {product}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}