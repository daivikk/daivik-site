import { MeshGradient } from '@paper-design/shaders-react';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const oldStyleBT = localFont({
  src: [
    {
      path: '../fonts/bitstream-iowan-old-style-bt-586c36a8d7712.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/bitstream-iowan-old-style-italic-bt-586c3740dc396.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/bitstream-iowan-old-style-bold-bt-586c371d8d669.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/bitstream-iowan-old-style-bold-italic-bt-586c37701cb62.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-iowan'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oldStyleBT.variable}`} style={{ margin: 0, padding: 0, backgroundColor: 'white' }}>
        {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
          <MeshGradient
            width={typeof window !== 'undefined' ? window.innerWidth : 1920}
            height={typeof window !== 'undefined' ? window.innerHeight : 1080}
            colors={["#d1ecff", "#ffe0e0"]}
            distortion={0}
            swirl={0}
            grainMixer={0}
            grainOverlay={0}
            speed={0.66}
          />
        </div> */}
        {children}
      </body>
    </html>
  )
}
