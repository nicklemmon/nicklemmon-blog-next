import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Nick Lemmon, frontend engineering leader'
    const date = searchParams.get('date')

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            background: '#ffffff',
            position: 'relative',
          }}
        >
          {/* Accent bar */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '12px',
              background: '#0c0fe7',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '80px 100px',
              width: '100%',
            }}
          >
            {/* Title and date */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: '#293038',
                  lineHeight: 1.1,
                  maxWidth: '900px',
                }}
              >
                {title}
              </div>

              {date && (
                <div
                  style={{
                    fontSize: 28,
                    color: '#575757',
                    fontWeight: 400,
                  }}
                >
                  {date}
                </div>
              )}
            </div>

            {/* Author */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '4px',
                  background: '#0c0fe7',
                  opacity: 0.3,
                }}
              />
              <div
                style={{
                  fontSize: 24,
                  color: '#575757',
                  fontWeight: 400,
                }}
              >
                Nick Lemmon, frontend engineering leader
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
