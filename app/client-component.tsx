'use client';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export function ClientComponent({ promise }: { promise: Promise<number> }) {
  const resolvedValue = use(promise);
  return (
    <div>
      <h1>Your lucky number is : {resolvedValue}</h1>
      <button>Get another random number</button>
    </div>
  );
}
