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
        console.log('Performance Metric:', {
          name: entry.name,
          value: entry.value,
          rating: entry.rating,
          delta: entry.delta,
          id: entry.id,
          navigationType: entry.navigationType,
        })
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
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
              loadComplete: navigation.loadEventEnd - navigation.navigationStart,
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