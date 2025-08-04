'use client'

import { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to analytics service in production
        const metric = {
          name: entry.name,
          value: 'value' in entry ? entry.value : undefined,
          rating: 'rating' in entry ? entry.rating : undefined,
          delta: 'delta' in entry ? entry.delta : undefined,
          id: 'id' in entry ? entry.id : undefined,
          navigationType: 'navigationType' in entry ? entry.navigationType : undefined,
        }
        console.log('Performance Metric:', metric)
      }
    })

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Fallback for browsers that don't support PerformanceObserver
      console.warn('PerformanceObserver not supported')
    }

    // Monitor page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (navigation) {
            const metrics = {
              dns: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcp: navigation.connectEnd - navigation.connectStart,
              ttfb: navigation.responseStart - navigation.requestStart,
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              loadComplete: navigation.loadEventEnd - navigation.fetchStart,
            }
            
            console.log('Page Load Metrics:', metrics)
          }
        }, 0)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

export default PerformanceMonitor 