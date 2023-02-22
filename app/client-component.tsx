'use client';
import { use } from 'react';

export function ClientComponent({ promise }: { promise: Promise<number> }) {
  const resolvedValue = use(promise);
  return (
    <div>
      <h1>Your lucky number is : {resolvedValue}</h1>
      <a href="/">Get another one</a>
    </div>
  );
}
