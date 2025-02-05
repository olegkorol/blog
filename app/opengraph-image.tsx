import { ImageResponse } from 'next/og'
import config from './config'
 
export const runtime = 'edge'

// Image metadata
export const alt = config.appName
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  // Font
  // const interSemiBold = fetch(
  //   new URL('./Inter-SemiBold.ttf', import.meta.url)
  // ).then((res) => res.arrayBuffer())
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          fontSize: 60,
          letterSpacing: '-.02em',
          fontWeight: 700,
          padding: '40px',
          boxSizing: 'border-box',
        }}
        >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            ~ blog.olegkorol.de
          </span>
        </div>
        <div
          style={{
            backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
            backgroundClip: 'text',
            color: 'transparent',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap',
          }}
        >
          {config.appName}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: await interSemiBold,
      //     style: 'normal',
      //     weight: 400,
      //   },
      // ],
    }
  )
}