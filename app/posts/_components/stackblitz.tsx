"use client"

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'nextra-theme-blog'
import sdk from '@stackblitz/sdk'

export function StackBlitzEmbed({ projectId }: { projectId: string }) {
  const { resolvedTheme } = useTheme()
  const embedRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    console.log('useEffect')
    const container = embedRef.current
    if (!container) return

    try {
      const vmPromise = sdk.embedProjectId(
        container,
        projectId,
        {
          forceEmbedLayout: true,
          openFile: 'README.md',
          height: 500,
          theme: resolvedTheme === 'dark' ? 'dark' : 'light',
          clickToLoad: true,
        }
      )

      // Handle embedding errors and runtime errors
      vmPromise
        .catch((error: Error) => {
          setError(error)
          setIsLoading(false)
        })
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }

    return () => {
      // Cleanup the container element when component unmounts
      container?.remove()
    }
  }, [projectId])

  return (
    <div className="stackblitz-embed" ref={embedRef}>
      {isLoading && <h3 style={{ textAlign: 'center' }}>Loading...</h3>}
      {error && <h3 style={{ textAlign: 'center', color: 'red' }}>Error: {error?.message || 'Error loading StackBlitz'}</h3>}
    </div>
  )
}
