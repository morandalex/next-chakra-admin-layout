import React, { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import '@fontsource/montserrat/400.css'
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import theme from "../theme/theme"
import dynamic from "next/dynamic"
const Layout = dynamic(() => import('../components/Layout'), {
  ssr: false
})
function MyApp({ Component, pageProps }: AppProps) {
  //const [isDark, setIsDark] = useState(false)
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp
