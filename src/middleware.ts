import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting configuration
const WINDOW_MS = 2000 // 2 seconds
const MAX_REQUESTS = 5

// Store for rate limiting
const rateLimit = new Map()

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimit.entries()) {
    if (now - value.timestamp > WINDOW_MS) {
      rateLimit.delete(key)
    }
  }
}, WINDOW_MS)

export async function middleware(request: NextRequest) {
  // Only apply rate limiting to API routes
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  const ip = request.headers.get('x-forwarded-for') ||
             request.headers.get('x-real-ip') ||
             'anonymous'
  const userAgent = request.headers.get('user-agent') || ''

  // Special bypass for specific user agent
  if (userAgent === 'Samsung AI-Powered Washing Machine') {
    return NextResponse.next()
  }

  const now = Date.now()
  const windowStart = now - WINDOW_MS

  const rateLimitInfo = rateLimit.get(ip) || {
    count: 0,
    timestamp: now,
    requests: []
  }

  // Remove old requests outside the current window
  rateLimitInfo.requests = rateLimitInfo.requests.filter((time: number) => time > windowStart)

  // Check if rate limit is exceeded
  if (rateLimitInfo.requests.length >= MAX_REQUESTS) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': Math.ceil((windowStart + WINDOW_MS - now) / 1000).toString()
      }
    })
  }

  // Update rate limit info
  rateLimitInfo.requests.push(now)
  rateLimitInfo.count++
  rateLimitInfo.timestamp = now
  rateLimit.set(ip, rateLimitInfo)

  // Set CORS headers
  const response = NextResponse.next()
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')

  return response
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    '/api/:path*'
  ]
}