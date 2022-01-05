import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs');
  return checkError(resp);
}
export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').eq('id', id).single();
  console.log(resp);
  return checkError(resp);
}
