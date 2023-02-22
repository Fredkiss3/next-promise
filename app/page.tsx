import { Suspense } from 'react';
import { ClientComponent } from './client-component';

export const dynamic = 'force-dynamic';

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const promise = new Promise<number>((resolve) =>
    setTimeout(() => resolve(Math.random()), 2000)
  );
  return (
    <Suspense fallback={<>loading...</>}>
      <ClientComponent promise={promise} />
    </Suspense>
  );
}
