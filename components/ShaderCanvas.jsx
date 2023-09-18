import { useRef } from 'react'
import Script from 'next/script'
import resolveConfig from 'tailwindcss/resolveConfig'

import { useMediaQuery } from '../hooks/useMediaQuery'
import tailwindConfig from '../tailwind.config'

export default function ShaderCanvas({ fragmentUrl, ...props }) {
  const canvasRef = useRef()

  const config = resolveConfig(tailwindConfig)
  const md = useMediaQuery(`(min-width: ${config.theme.screens.md})`)

  return md ? (<>
    <canvas 
      ref={canvasRef}
      style={{
        '--breakpoint-md' : config.theme.screens.md + 'px' 
      }}
      {...props}
    />
    <Script 
      src="https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js"
      strategy="lazyOnload"
      onReady={() => {
        const sandbox = new GlslCanvas(canvasRef.current)

        fetch(fragmentUrl)
        .then(response => {
          return response.text()
        })
        .then(fragment => {
          sandbox.load(fragment)
        })
      }}
    />
  </>
  ): null
}