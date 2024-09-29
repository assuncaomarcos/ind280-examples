import {useState, useMemo} from "react";
import List from "./List";
import products from "./data";

function updateData(filter, sortOrder) {
  let updatedData = products;

  if (filter.length !== 0) {
    updatedData = updatedData.filter(item => (item.description.includes(filter)));
  }

  updatedData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.description.localeCompare(b.description);
    } else {
      return b.description.localeCompare(a.description);
    }
  });
  return updatedData;
}

export default function ListContainer() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');
  const data = useMemo(
    () => {
      return updateData(filter, sortOrder);
    }, [filter, sortOrder]);

  return (
    <List
      data={data}
      onFilter={(text) => setFilter(text)}
      onSort={(order) => setSortOrder(order)}
      sortOrder={sortOrder}
    />
  )

}