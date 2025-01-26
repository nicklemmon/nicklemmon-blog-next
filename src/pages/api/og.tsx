import React from 'react'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // Simple blue gradient for the background
          background: '#0c0fe7',
          color: '#FFFFFF',
          padding: '50px',
          fontSize: 64,
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        {searchParams.get('title')}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
