import {useRouter} from "next/router";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          product: "101",
        },
      },
      {
        params: {
          product: "102",
        },
      },
      {
        params: {
          product: "103",
        },
      },
    ],
    fallback: true, // Enables fallback for dynamic routes
  };
});

export const getStaticProps = (async (context) => {
  const productId = context.params?.product;
  const content = `Ceci est un exemple de route dynamique. La valeur du paramètre produit est ${productId}.`;

  return {props: {content}, revalidate: 3600}; // Revalidate every hour
});

// Product page component
export default function Product({content}) {
  const router = useRouter();

  return (
    <main>
      <h1>Produit - {router.query.product}</h1>
      <p>{content}</p>
    </main>
  );
}
