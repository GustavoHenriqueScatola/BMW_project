'use client'

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'bmwTypeNextWeb', Arial, Helvetica, sans-serif" },
        body:    { value: "'bmwTypeNextWeb', Arial, Helvetica, sans-serif" },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}