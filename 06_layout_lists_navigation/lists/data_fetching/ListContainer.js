import {useState, useMemo, useEffect} from "react";
import List from "./List";

const API_URL = "https://fakerapi.it/api/v2/products?_quantity=10";

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json.data;
  } catch {
    throw new Error("Error fetching products");
  }
}

function updateData(data, filter, sortOrder) {
  let updatedData = data;

  if (filter.length !== 0) {
    updatedData = updatedData.filter(item => (item.name.includes(filter)));
  }

  updatedData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return updatedData;
}

export default function ListContainer() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data)
      }).catch(error => {
      console.log(error.message)
    });
  }, []);

  const products = useMemo(
    () => {
      return updateData(data, filter, sortOrder);
    }, [filter, sortOrder, data]);

  return (
    <List
      data={products}
      onFilter={(text) => setFilter(text)}
      onSort={(order) => setSortOrder(order)}
      sortOrder={sortOrder}
    />
  )

}