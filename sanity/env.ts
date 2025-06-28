// Hardcoded values for Sanity Studio
const SANITY_PROJECT_ID = 'gatcfs64' // Replace with your actual project ID
const SANITY_DATASET = 'production'

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-23'

// Use env vars if available (for Next.js), otherwise use hardcoded values (for Studio)
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || SANITY_DATASET

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || SANITY_PROJECT_ID

// Keep the assertValue function for Next.js context only
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
