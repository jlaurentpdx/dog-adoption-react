import { useEffect, useState } from 'react';
import { fetchDogs } from '../services/dogs';

export default function Dogs() {
  console.log(fetchDogs());
  return (
    <div>
      <h1>This is the dogs page.</h1>
    </div>
  );
}
