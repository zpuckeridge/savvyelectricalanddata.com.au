import * as React from "react"

import { ChakraProvider } from "@chakra-ui/react"

function Wrapper({ Component }) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default Wrapper