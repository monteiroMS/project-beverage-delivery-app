import axios from 'axios';

async function getProducts() {
  const result = await axios.get('http://localhost:3001/customer/products')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
  return result;
}
export async function getSales() {
  const result = await axios.get('http://localhost:3001/sales')
    .then(({ data }) => data)
    .catch((err) => err.toJSON());
  return result;
}

export default getProducts;
