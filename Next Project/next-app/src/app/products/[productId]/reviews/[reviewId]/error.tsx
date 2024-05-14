"use client"

export default function ErrorBoundary({error, reset}:{ //add use client to page.tsx
    error: Error,
    reset: () => void
}) {
  return (
    <div>
        {error.message} <b/>
        <button onClick={reset}>Retry</button>
    </div>
  )
}
