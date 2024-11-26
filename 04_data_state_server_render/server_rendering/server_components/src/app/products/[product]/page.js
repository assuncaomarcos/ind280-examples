export async function generateStaticParams() {
  return [{product: "101"}, {product: "102"}, {product: "103"}];
}

export const revalidate = 3000;

export default async function Post({params}) {
  return (
    <main>
      <h1>Produit - {params.product}</h1>
      <p>Ceci est un exemple de route dynamique.
        La valeur du paramètre produit est {params.product}.</p>
    </main>
  );
}