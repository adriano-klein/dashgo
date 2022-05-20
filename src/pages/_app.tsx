import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from '../styles/theme'
import { SidebarContextProvider } from '../contexts/SidebarDraweContext'
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient'

if(process.env.NODE_ENV === 'development') {
  makeServer()
}



function MyApp({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme = {theme}>
        <SidebarContextProvider>
          <Component {...pageProps} />
        </SidebarContextProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  ) 
}

export default MyApp
