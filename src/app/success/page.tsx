'use client';

import { Suspense } from 'react';
import SuccessClient from './SuccessPage';


export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading receipt...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
