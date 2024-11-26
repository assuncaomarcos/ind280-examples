const URL = 'https://fakerapi.it/api/v2/persons?_locale=fr_FR&_quantity=1&_seed=42';

export const getServerSideProps = (async () => {
  const res = await fetch(URL);
  const data = await res.json();

  return {props: {user: data?.data[0]}};
});

export default function About({user}) {
  return (
    <main>
      <h2>{user.firstname} {user.lastname}</h2>
      <p><strong>Email :</strong> {user.email}</p>
      <p><strong>Adresse :</strong> {user.address.street}, {user.address.city}</p>
      <p><strong>Téléphone :</strong> {user.phone}</p>
      <p><strong>Date de naissance :</strong> {user.birthday}</p>
    </main>
  );
}