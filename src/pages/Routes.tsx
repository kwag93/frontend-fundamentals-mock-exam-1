import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { SavingsCalculatorPage } from './SavingsCalculatorPage';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallbackRender={({ error }) => <div>Error: {error.message}</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <SavingsCalculatorPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
