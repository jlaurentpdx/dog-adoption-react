import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*').order('id');
  return checkError(resp);
}
export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').eq('id', id).single();
  return checkError(resp);
}

export async function editDog(dog) {
  const resp = await client.from('dogs').update(dog).eq('id', dog.id);
  return checkError(resp);
}

export async function createDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}

export async function deleteDogById(id) {
  const resp = await client.from('dogs').delete().eq('id', id);
  return checkError(resp);
}
